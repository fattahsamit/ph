const showCars = (cars) => {
  const container = document.getElementById("cards-container");
  for (const car of cars) {
    console.log(car);
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "card-compact",
      "w-96",
      "bg-base-100",
      "shadow-xl"
    );
    card.innerHTML = `
        <figure>
            <img src=${
              car.imageURL ? car.imageURL : "https://picsum.photos/400/200"
            } alt="Car" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Car Name: ${car.name}</h2>
            <p class="mb-3">
                Car Detail: ${car.description}
            </p>
            <div class="card-actions justify-start">
                <button class="btn btn-secondary">Car Price: ${
                  car.price
                }</button>
            </div>
        </div>
    `;
    container.appendChild(card);
  }
};

showCars(data);
