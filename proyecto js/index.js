// Definir 3 productos en variables con sus respectivos precios.

let product1 = "Tablet";
let price1 = "$200";
let product2 = "Laptop";
let price2 = "$800";
let product3 = "Smartphone";
let price3 = "$500";
console.log(product1 + " - " + price1);
console.log(product2 + " - " + price2);
console.log(product3 + " - " + price3);

// Ofrecerle al usuario un menú con los productos y sus precios, y que elija uno.

let userChoice = prompt("Please select a product: 1. " + product1 + " - " + price1 + " 2. " + product2 + " - " + price2 + " 3. " + product3 + " - " + price3);

if (userChoice == 1) {
  console.log("You have selected: " + product1 + " - " + price1);
} else if (userChoice == 2) {
  console.log("You have selected: " + product2 + " - " + price2);
} else if (userChoice == 3) {
  console.log("You have selected: " + product3 + " - " + price3);
} else {
  console.log("Invalid selection. Please choose a number between 1 and 3.");
}

// Según el producto elegido, sumar ese valor al precio total de la compra.


let total = 0;
let userChoice = prompt("Please select a product: 1. " + product1 + " - $" + price1 + " 2. " + product2 + " - $" + price2 + " 3. " + product3 + " - $" + price3);

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
  console.log("Invalid selection. Please choose a number between 1 and 3.");
}
console.log("Total: $" + total);


// Una vez que el usuario termine de comprar, preguntarle si quiere agregar algo más a la compra o "salir" para finalizar.


let continueShopping = true;

while (continueShopping) {
  let userChoice = prompt("Please select a product: 1. " + product1 + " - $" + price1 + " 2. " + product2 + " - $" + price2 + " 3. " + product3 + " - $" + price3);

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
    console.log("Invalid selection. Please choose a number between 1 and 3.");
  }

  let keepShopping = prompt("Do you want to continue shopping? Type 'yes' or 'no'").toLowerCase();
  if (keepShopping === "no") {
    continueShopping = false;
  }
}
console.log("Total: $" + total);
console.log("Thank you for shopping with us!");
