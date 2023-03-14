import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";


const initialOptions = {
  "client-id": "test",
  currency: "SEK",
  intent: "capture",
};

export default function PaypalScreen() {
const navigate = useNavigate();
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          layout: "horizontal",
        }}
        createOrder={function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                // Describe items of shopping cart, but only in String
                description: "Book",
                amount: {
                  currency_code: "SEK",
                  value: 0.02,
                  breakdown: {
                    item_total: {
                      currency_code: "SEK",
                      value: 0.01,
                    },
                    shipping: {
                      currency_code: "SEK",
                      // free shipping for API-testing money-saving purposes
                      value: 0
                    },
                    tax_total: {
                      currency_code: "SEK",
                      // Or use percentage like item_total*5%
                      // tax on books is 6% in sweden
                      value: 0.01
                    },
                  },
                },
              },
            ],
          });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            console.log('Capture result', actions.order.data, JSON.stringify(actions.order.data, null, 2));

            // Show a success message within this page, e.g.
            navigate('/payment/success');
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
