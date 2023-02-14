console.log("hello");

function coupon30Confirmation(coupon) {
  document.getElementById(coupon).addEventListener("keyup", function (event) {
    const line = event.target.value;
    if (line === "DISC30") {
      return true;
    } else {
      return false;
    }
  });
}

document.getElementById("btn-apply").addEventListener("click", function () {
  if (coupon30Confirmation("coupon-input")) {
  }
});
