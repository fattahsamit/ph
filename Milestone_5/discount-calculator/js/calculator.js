document
  .getElementById("coupon-input")
  .addEventListener("keyup", function (event) {
    const line = event.target.value;

    document.getElementById("btn-apply").addEventListener("click", function () {
      if (line === "DISC30") {
        console.log("DISCO");
        event.target.value = "";

        const mainPrice = document.getElementById("price");
        const priceString = mainPrice.innerText;
        const price = parseFloat(priceString);

        const discountPayment = price * 0.3;
        const mainPayment = document.getElementById("payment");
        mainPayment.innerText = price - discountPayment;
      }
    });
  });
