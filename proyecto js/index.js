let product1 = "Tablet";
let price1 = 200;
let product2 = "Laptop";
let price2 = 800;
let product3 = "Smartphone";
let price3 = 500;

let total = 0;
let continueShopping = true;

while (continueShopping) {
  let userChoice = prompt("Selecciona un producto: 1. " + product1 + " - $" + price1 + " 2. " + product2 + " - $" + price2 + " 3. " + product3 + " - $" + price3);

  if (userChoice == 1) {
    total += price1;
    console.log("You have selected: " + product1 + " - $" + price1);
  } else if (userChoice == 2) {
    total += price2;
    console.log("You have selected: " + product2 + " - $" + price2);
  } else if (userChoice == 3) {
    total += price3;
    console.log("You have selected: " + product3 + " - $" + price3);
  } else {
    console.log("Invalido. Por favor, elija un número entre 1 y 3.");
  }
  console.log("Current total: $" + total);
  let keepShopping = prompt("Queres continuar comprando? Escribe 'yes' or 'no'").toLowerCase();
  if (keepShopping === "no") {
    continueShopping = false;
  }
}
console.log("Total: $" + total);
console.log("Gracias por comprar!");
