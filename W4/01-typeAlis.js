function paymentMethod(method) {
    if (method === "UPI") {
        console.log("Payment Method", method);
    }
    else if (method === "CreditCard") {
        console.log("Payment Method", method);
    }
    else {
        console.log("Payment Method not UPI or Creditcard, it is Paypal");
    }
}
paymentMethod("UPI");
paymentMethod("PayPal");
