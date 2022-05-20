/* function */

// funcion normales
alertHello = function() {
  return "Hello Joseph";
};

document.getElementById("proof").innerHTML = alertHello();

// funcion de flecha
zq = () => {
  return "Hello White";
}

document.getElementById("mq").innerHTML = zq();

//funcion de flecha con parametros
zw = (val) => "Hello " + val;

document.getElementById("mw").innerHTML = zw("Joseph");

/*
- tambien sirve sin parentesis
*/

//usando this con funcion regular
class Show {
  constructor() {
    this.color = "Blue";
  }

  changeColor = function() {
    document.getElementById("mr").innerHTML += this;
  }
}

const showUp = new Show();

window.addEventListener('load', showUp.changeColor);

document.getElementById("me").addEventListener("click", showUp.changeColor);

// varianbles = var, let, constructor
var ji = 62;

mu = () => {
  if (ji == 57) {
    return "hola";
  } else {
    return "hello";
  }
};

document.getElementById("mi").innerHTML = mu();

/*
//metodos de matriz
import React from 'react';
import ReactDOM from 'react-dom/client';

const arr = ['Apple', 'banana', 'watermelon', 'mango'];

const list = arr.map((item) => <p>{item}</p>)


ReactDOM.render(list, document.getElementById("root"));

*/


/* */
//destructuracion de array
function calculate(r, o) {
  const add = r + o;
  const subtract = o - r;
  const multiply = r * o;
  const divide = o / r;


  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(52, 74);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");


//destruccion y forma de mostrar
const vehiculeOne = {
  brand: 'Land Rover',
  model: 'range rover',
  type: 'car',
  year: 2022,
  color: 'marine blue'
}

myVehicule(vehiculeOne);

function myVehicule({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ', ' + brand + ', ' + model + '.';

document.getElementById("mp").innerHTML = message;
}

//otra forma de hacerlo

/*
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';

  document.getElementById("demo").innerHTML = message;
}
*/

/*
◘ se debe mantener la como de las posiciones que no que no queremos mostrar
◘
*/



//operador de propagación o spread

    //ejemplo 1
    const numbersOne = [4, 8, 3];
    const numbersTwo = [5, 9, 4];

    const numbersCombined = [...numbersOne, ...numbersTwo];

    document.write(numbersCombined);

    //ejemplo 2: usando destructuracion y el operador de extención
    const numbers = [1, 2, 3, 4, 5, 9, 10]

    const [one, two, ...rest] = numbers;

    document.write("<p>" + one + "</p>");
    document.write("<p>" + two + "</p>");
    document.write("<p>" + rest + "</p>");

    //ejemplo 3: usando objetos
    const myVehicle = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red'
    }

    const updateMyVehicle = {
      type: 'car',
      year: 2021,
      color: 'yellow'
    }

    const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

    //Check the result object in the console:
    console.log(myUpdatedVehicle);
