/*
    1. if ticket number is less than 100, per ticket price: 100 taka
    2. if ticket number is more than 100 but less than 200, first 100 tickets will be 100 taka per ticket
       rest tickets will be 90 taka per piece
            first 100 ---> 100 taka
            rest      ---> 90 taka
    3. if you purchase more than 200 tickets
            first 100 ---> 100 taka
            101-200   ---> 90 taka
            200+      ---> 70 taka
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100price + restTicketPrice;
    return totalPrice;
  } else {
    const first100price = 100 * first100Rate;
    const second100price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100price + second100price + restTicketPrice;
    return totalPrice;
  }
}

const price = ticketPrice(201);
console.log("Price:", price);
