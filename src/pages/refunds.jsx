import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '~/utils/styles';
import SEO from '~/components/seo';

const Wrapper = styled.div`
  width: 85%;
  max-width: 600px;
  margin: 0 auto;
`;

const Group = styled.div`
  margin: 25px 0;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border-bottom: none;
  }
  h2 {
    font-size: ${props => props.theme.fontSize.medium};
    margin: 15px 0;
  }
  p {
    line-height: 1.4em;
    margin: 20px 0;
  }
  ul {
    margin: 15px 0;
  }
  li {
    line-height: 1.4em;
    list-style: circle;
    margin-left: 25px;
  }
`;

const Table = styled.table`
  text-align: left;
  border-collapse: collapse;
  margin: 15px 0;
  border: 1px solid black;
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  th,
  td {
    padding: 8px;
  }
  th {
    background: rgba(0, 0, 0, 0.1);
  }
`;

function Refunds() {
  return (
    <>
      <SEO
        title="Refunds"
        keywords={[
          'refund policy',
          'dog treats',
          'peanut butter',
          'subscription',
          'dogs',
        ]}
        description="Refund Policy of Peanut Butter Dog Treats"
      />
      ;
      <PageWrapper>
        <h1>Refund Policy</h1>
        <Wrapper>
          <Group>
            <h2>Returns</h2>
            <p>
              Our policy lasts 30 days. If 30 days have gone by since your
              purchase, unfortunately we can’t offer you a refund or exchange.
            </p>
            <p>
              To be eligible for a full refund, your item must be unopened and
              in the same condition that you received it. It must also be in the
              original packaging.
            </p>
            <p>
              Our products are perishable goods such as food, dog food and dog
              treats. If these products arrive inedible for your pets, we will
              process a free replacement of the same goods ordered.
            </p>
            <p>
              To complete your return, we require a receipt or proof of
              purchase.
            </p>
            <p>Please do not send your purchase back to the manufacturer.</p>
            <p>
              There are certain situations where only partial refunds are
              granted (if applicable):
            </p>
            <ul>
              <li>If 50% or more of the product has been consumed.</li>
              <li>
                Any item not in its original condition, is damaged or missing
                parts for reasons not due to our error.
              </li>
              <li>
                Any item that is returned more than 30 days after delivery.
              </li>
            </ul>
          </Group>

          <Group>
            <h2>Shipment confirmation and Order tracking</h2>
            <p>
              You will receive a Shipment Confirmation email once your order has
              shipped containing your tracking number(s). The tracking number
              will be active within 24 hours.
            </p>
          </Group>
          <Group>
            <h2>Refunds (if applicable)</h2>
            <p>
              Once your return claim is approved or rejected, we will send you
              an email to notify you.
            </p>
            <p>
              If you are approved, then your refund will be processed, and a
              credit will automatically be applied to your credit card or
              original method of payment, within a certain amount of days.
            </p>
          </Group>
          <Group>
            <h2>Late or missing refunds (if applicable)</h2>
            <p>
              If you haven’t received a refund yet, first check your bank
              account again.
            </p>
            <p>
              Then contact your credit card company, it may take some time
              before your refund is officially posted.
            </p>
            <p>
              Next contact your bank. There is often some processing time before
              a refund is posted.
            </p>
            <p>
              If you’ve done all of this and you still have not received your
              refund yet, please contact us at peamcs@gmail.com.
            </p>
          </Group>
          <Group>
            <h2>Sale items (if applicable)</h2>
            <p>
              Only regular priced items may be refunded, unfortunately sale
              items cannot be refunded.
            </p>
          </Group>
          <Group>
            <h2>Gifts</h2>
            <p>
              If the item was marked as a gift when purchased and shipped
              directly to you, you’ll receive a product replacement for the
              value of your return. Once the returned item is received, a
              replacement product will be mailed to you.
            </p>
            <p>
              If the item wasn’t marked as a gift when purchased, or the gift
              giver had the order shipped to themselves to give to you later, we
              will send a replacement to the gift giver.{' '}
            </p>
          </Group>
          <Group>
            <h2>Shipping</h2>
            <p>Please do not mail product back to us, the manufacturer.</p>
            <p>
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are non-refundable. Depending
              on where you live, the time it may take for your exchanged product
              to reach you, may vary.
            </p>
            <p>
              If you are shipping an item over $75, you should consider using a
              trackable shipping service or purchasing shipping insurance. We
              don’t guarantee that we will receive your returned item.
            </p>
          </Group>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

export default Refunds;
