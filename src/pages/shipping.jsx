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

function Shipping() {
  return (
    <>
      <SEO
        title="Shipping"
        keywords={[
          'shipping policy',
          'shipping',
          'dog treats',
          'peanut butter',
          'subscription',
          'dogs',
        ]}
        description="Shipping Policy of Peanut Butter Dog Treats"
      />
      ;
      <PageWrapper>
        <h1>Shipping Policy</h1>
        <Wrapper>
          <Group>
            <h2>Shipment Processing time</h2>
            <p>
              ALL orders are processed within 2-3 business days. Orders are not
              shipped or delivered on weekends or holidays. If we are
              experiencing a high volume of orders, shipments may be delayed by
              a few days. Please allow additional days in transit for delivery.
              If there will be a significant delay in shipment of your order, we
              will contact you via email or telephone.
            </p>
            <Table>
              <tr>
                <th>Minimum Purchase</th>
                <th>Shipment Method</th>
                <th>Estimated Delivery Time</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>$20 and over</td>
                <td>USPS Priority Mail</td>
                <td>2 days</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>$0 - $19</td>
                <td>USPS First Class Mail</td>
                <td>1-3 days</td>
                <td>$2</td>
              </tr>
            </Table>
            <p>Delivery delays can occasionally occur.</p>
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
            <h2>Customs, Duties and Taxes </h2>
            <p>
              Peanut Butter Dog Treats is not responsible for any customs and
              taxes applied to your order. All fees imposed during or after
              shipping are the responsibility of the customer (tariffs, taxes,
              etc.).
            </p>
          </Group>
          <Group>
            <h2>Damages</h2>
            <p>
              Peanut Butter Dog Treats is not liable for any products damaged or
              lost during shipping. If you received your order damaged, please
              contact the shipment carrier to file a claim. Please save all
              packaging materials and damaged goods before filing a claim.
            </p>
          </Group>
          <Group>
            <h2>International Shipping Policy</h2>
            <p>We currently do not ship outside the U.S.</p>
          </Group>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

export default Shipping;
