import axios from "axios";

async function KlarnaScreen() {    
    const resp = await axios.post(
        `https://api.klarna.com/checkout/v3/orders`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from('PK70051_be8730814ae1:H7sY1aJnOMlzv2zM').toString('base64'),
            },
            body: JSON.stringify({

                "purchase_country": "SE",
                "purchase_currency": "SEK",
                "locale": "en-SE",
                "order_amount": 80000,
                "order_tax_amount": 7273,
                "order_lines": [
                    {
                        "type": "physical",
                        "reference": "19-402-USA",
                        "name": "Red T-Shirt",
                        "quantity": 8,
                        "quantity_unit": "pcs",
                        "unit_price": 10000,
                        "tax_rate": 1000,
                        "total_amount": 80000,
                        "total_discount_amount": 0,
                        "total_tax_amount": 7273
                    }
                ],
                "merchant_urls": {
                    "terms": "https://www.example.com/terms.html",
                    "checkout": "https://www.example.com/checkout.html",
                    "confirmation": "https://www.example.com/confirmation.html",
                    "push": "https://www.example.com/api/push"

                }
            })
        }
    );

    const data = await resp.json();
    console.log(data);

    return (data.html_snippet)
}
export default KlarnaScreen;