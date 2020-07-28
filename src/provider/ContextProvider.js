import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';

import Context from '~/context/StoreContext';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// To connect with Shopify
const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
});

const ContextProvider = ({ children }) => {
  let initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const [store, updateStore] = useState(initialStoreState);

  let isRemoved = false;

  // triggered by store.client.checkout
  useEffect(() => {
    // function definition, will be run at end of this useEffect
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== 'undefined';

      const existingCheckoutID = isBrowser
        ? localStorage.getItem('shopify_checkout_id')
        : null;

      // Updates the checkout
      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id);
        }

        updateStore(prevState => {
          return { ...prevState, checkout };
        });
      };

      // Creates a new checkout on the client
      const createNewCheckout = () => store.client.checkout.create();

      // Gets a previously created checkout
      const fetchCheckout = id => store.client.checkout.fetch(id);

      // If checkout id exists, run this
      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID);
          // Make sure this cart hasn’t already been purchased.
          if (!isRemoved && !checkout.completedAt) {
            setCheckoutInState(checkout);
            return;
          }
        } catch (e) {
          localStorage.setItem('shopify_checkout_id', null);
        }
      }

      // Creates new checkout
      const newCheckout = await createNewCheckout();
      if (!isRemoved) {
        setCheckoutInState(newCheckout);
      }
    };

    initializeCheckout();
  }, [store.client.checkout]);

  useEffect(
    () => () => {
      isRemoved = true;
    },
    []
  );

  return (
    <Context.Provider
      // the things i can pull from context and use elsewhere in app
      // (1) store, (2), addVariantToCart, (3) removeLineItem, (4) updateLineItem
      value={{
        // object held in state {client, adding, checkout, products, shop}
        store,

        addVariantToCart: (variantId, quantity) => {
          if (variantId === '' || !quantity) {
            console.error('Both a size and quantity are required.');
            return;
          }

          updateStore(prevState => {
            return { ...prevState, adding: true };
          });

          const { checkout, client } = store;

          const checkoutId = checkout.id;
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ];

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout, adding: false };
              });
            });
        },

        removeLineItem: (client, checkoutID, lineItemID) => {
          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res };
              });
            });
        },

        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ];

          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res };
              });
            });
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
