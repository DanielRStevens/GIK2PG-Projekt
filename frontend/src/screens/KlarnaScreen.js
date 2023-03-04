import axios from "axios";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";

function KlarnaScreen() {
  const [error, setError] = useState(null);
  const [klarnaData, setKlarnaData] = useState(null);

axios.defaults.auth = {
   username : "PK70051_be8730814ae1",
   password : "H7sY1aJnOMlzv2zM" 
}

  const config = {
     headers: {
      //"Content-Type": "application/json",
      //Authorization:
        //"Basic " + Buffer.from(username + ":" + password).toString("base64"),
    }, 
    auth: {
      username: "PK70051_be8730814ae1",
      password: "H7sY1aJnOMlzv2zM",
    },
  };
  // Preliminary test article
  const article = {
    body: JSON.stringify({
      purchase_country: "SE",
      purchase_currency: "SEK",
      locale: "en-SE",
      order_amount: 80000,
      order_tax_amount: 7273,
      order_lines: [
        {
          type: "physical",
          reference: "19-402-USA",
          name: "Red T-Shirt",
          quantity: 8,
          quantity_unit: "pcs",
          unit_price: 10000,
          tax_rate: 1000,
          total_amount: 80000,
          total_discount_amount: 0,
          total_tax_amount: 7273
        }
      ],
      merchant_urls: {
        terms: "https://www.example.com/terms.html",
        checkout: "https://www.example.com/checkout.html",
        confirmation: "https://www.example.com/confirmation.html",
        push: "https://www.example.com/api/push"
      },
    }),
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.playground.klarna.com/checkout/v3/orders",
          article//,
          //config
        );
        setKlarnaData(response.data);
      } catch (error) {
        setError(error);
        console.error("There was an error!", error.message);
      }
    };
    fetchData();
  }, []); //klarnaData.htmlSnippet;
  console.log(klarnaData);

  return (
    <div>
      <p>Response: {klarnaData && JSON.stringify(klarnaData)}</p>
    </div>
  );
}
export default KlarnaScreen;
