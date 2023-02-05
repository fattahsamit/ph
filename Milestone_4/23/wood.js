/*
    FIXED: per item wood requirements
    chair --> 3 cft
    table --> 10 cft
    bed --> 50 cft

    VARY: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3,
    perTableWood = 10,
    perBedWood = 50;

  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log("Total wood required:", totalWood);
