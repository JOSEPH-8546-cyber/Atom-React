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

function myVehicule({
  type,
  color,
  brand,
  model
}) {
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

const myUpdatedVehicle = {
  ...myVehicle,
  ...updateMyVehicle
}

//Check the result object in the console:
console.log(myUpdatedVehicle);


//condicionales

/* if and else */
function renderApp() {
  document.getElementById('ma').innerHTML = "Welcome !";
}

function renderlogin() {
  document.getElementById("ma").innerHTML = "Please login";
}

let auth = true;

if (auth) {
  renderApp();
} else {
  renderlogin();
}

//operador ternario
function render_app() {
  document.getElementById("ms").innerHTML = "hello";
}

function render_login() {
  document.getElementById('ms').innerHTML = "hola";
}

let auto = true;

auto ? render_app() : render_login();

//componentes
/*
class Example extends React.Component {
  render() {
    return <h2> Hola Joseph </h2>;
  }
}
*/

//componentes de funciones
/*
function Ex () {
  return <h1> Hello Manuel </h1>;
}
*/

//renderizar un componentes
/*
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
  return <p> Hola Joseph </p>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
*/

//usando props
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car2(props) {
  return <h1 > hello Mr. {props.color}< /h1>;
}

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render( <Car2 color = "rgba(255, 255, 255, 1)" /> );

//otro ejemplo usando props
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hola2(props) {
  return <h1> hola {props.name} como estas hoy </h1>;
}

const rootP = ReactDOM.createRoot(document.getElementById("rootP"));
rootP.render( <Hola2 name = "Joseph" /> );

//llamando componentes dentro de otros componentes
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car3() {
  return <p> hola Joseph as well </p>;
}

function Garage() {
  return (
    <>
    <h1> Who is there? </h1>
    <Car3 />
    </>
  );
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Garage />);


//usando el constructor y la super() funciones
import React from 'react';
import ReactDOM from 'react-dom/client';

class CarU extends React.Component {
  constructor() {
    //super hace referencia al constructor
    super();
    this.state = {color: "blue"};
  }
  render() {
    return <h2> I am a {this.state.color} Car!</h2>;
  }
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root3.render(<CarU />);

//usando props con el constructor y la super funcion
import React from 'react';
import ReactDOM from 'react-dom/client';

class CarQ extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <h2>I am a {props.name} </h2>;
  }
}

//usando el objato state
import React from 'react';
import ReactDOM from 'react-dom/client';

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color : "blue",
      type : "oak",
      size : "big"
    };
  }
  render() {
    return (
      <div>
         <p>
            <h1> My {this.state.type} is color {this.state.color} and it is a {this.state.size} tree;</h1>
         </p>
      </div>
    );
  }
}

ReactDOM.render(<Tree />, document.getElementById("md"));

//usando el setState() para cambiar el estado
import React from 'react';
import ReactDOM from 'react-dom/client';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "sparrow",
      type : "mamal",
      color : "red with white",
      size : "small",
      habitat : "jungle"
    };
  }
  changeType = () => {
    this.setState({type : "bird"});
  }
  changeSize = () => {
    this.setState({size : "little"})
  }
  render() {
    return (
      <div>
        <h1>The animal's name is {this.state.name} </h1>;
         <p>
           It is a {this.state.type} and your color is {this.state.color}.
           It lives in the {this.state.habitat} and it is a {this.state.size} bird.
         </p>
      </div>
    );
  }
}

ReactDOM.render(<Animal />, document.getElementById("mf"));

//usando getDerivedStateFromProps(props, state) para insertar el estado y cambiarlo
import React from 'react';
import ReactDOM from 'react-dom/client';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favColor : "yellow"}
  }
  static getDerivedStateFromProps(props, state) {
    return {favColor : props.favoriteColor };
  }
  render() {
    return (
      <h1> My Favorite thing is color {this.state.favColor} </h1>;
    );
  }
}

const root5 = ReactDOM.createRoot(document.getElementById("root"));
root5.render(<Thing favoriteColor = "Blue marine"/>);

//usando componentDidMount() para cambiar el estado con un limite de tiempo
import React from 'react';
import ReactDOM from 'react-dom/client';

class Cake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colorCake : "blue"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({colorCake : "green"})
    }, 1000)
  }
  render() {
    return (
      <h2> My favorite cake color is {this.state.colorCake} </h2>;
    );
  }
}

const root6 = ReactDOM.createRoot(document.getElementById("root"));
root6.render(<Cake />);

/*
Usando metodos para hacer actualizaciones
 */

 //usando getDerivedStateFromProps() para hacer updates
 import React from 'react';
 import ReactDOM from 'react-dom/client';

 class Tools extends React.Component {
   constructor(props) {
     super(porps);
     this.state = {toolFav : "screwdriver"}
   }
   static getDerivedStateFromProps(props, state) {
     return {toolFav : props.favTool};
   }
   changeTool = () => {
     this.setState({toolFav : "hammer"})
   }
    render() {
      return (
        <div>
            <h1> My favorite Tools is {this.state.toolFav} </h1>
            <button type="button" onClick={this.changeTool}></button>
        </div>
     );
   }
 }

 const root7 = ReactDOM.createRoot(document.getElementById("root"));
 root7.render(<Tools favTool="wrech"/>);

 //usando shouldComponentUpdate()
import React from 'react';
import ReactDOM from 'react-dom/client';

class Chair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color : "white"};
  }
  shouldComponentUpdate() {
    return false /*true*/;
  }
  changeColor = () => {
    this.setState({color : "black"});
  }
  render() {
    return (
      <div>
          <h2> The chair is color {this.state.color} </h2>
          <button type="button" onClick={this.changeColor}></button>
      </div>
    );
  }
}

const root8 = ReactDOM.createRoot(document.getElementById("root8"));
root8.render(<Chair />);

//usando getSnapshotBeforeUpdate() y el componentDidUpdate() para actualizar
import React from 'react';
import ReactDOM from 'react-dom/client';

class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type : "Orquidias"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({type : "Bromelias"});
    }, 2000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
    "Before the update, the type was " + prevState.type;
  }
  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
    "The update of type is " + this.state.type;
  }
  render() {
    return (
      <div>
          <h1> The type of plant is {this.state.type} </h1>
          <br>
          <div id="div2"></div>
          <div id="div1"></div>
      </div>
    );
  }
}

const root9 = ReactDOM.createRoot(document.getElementById("root9"));
root9.render(<Plant />);

//usando solo el componentDidUpdate()
import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

/*
Metodos para desmontar los componentes
*/

//usando el metodo componentWillUnmount() para desmotar o eliminar un componente
import React from 'react';
import ReactDOM from 'react-dom/client';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show : true};
  }
  delHeader = () => {
    this.setState({show : false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}></button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted");
  }
  render() {
    return (
      <h1> Hola Joseph </h1>
    );
  }
}

const root10 = ReactDOM.createRoot(document.getElementById("root"));
root10.render(<Container />);

//usando props
import React from 'react';
import ReactDOM from 'react-dom/client';

 function CarP(props) {
  return <h2>I am a {props.brand}</h2>
}

const myElemet = <CarP brand="Ferrari" />;

const root11 = ReactDOM.createRoot(document.getElementById("root"));
root11.render(myElemet);

//usando los {} para enviar props de una constante
import React from 'react';
import ReactDOM from 'react-dom/client';

Ball = () => {
  return <h2> I am a {props.shape} </h2>
}

function Basket() {
  const ballShape = "Circle";
  return (
    <>
    <h1> What is the shape of ball ? </h1>
    <Ball shape = {ballShape} />
    </>
  );
}

const root12 = ReactDOM.createRoot(document.getElementById("root12"));
root12.render(<Basket />);

/*
Eventos de React.js
*/

//usando el onClick()
import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = () => {
    alert("Hello Joseph, great shoot");
  }
  return (
    <button onClick={shoot}>Click me</button>
  );
}

const rootp = ReactDOM.createRoot(document.getElementById("root12"));
rootp.render(<Football />);

//pasar un argumento a un controlador de Eventos
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hola() {
  const greet = (a) => {
    alert(a)
  }

  return (
    <button onClick{() => greet("Hola Joseph")}> How are you ? </button>
  );
}

const rootl = ReactDOM.createRoot(document.getElementById("root12"));
rootl.render(<Hola />);

//como ver cual es el evento que se esta utilizando
import React from 'react';
import ReactDOM from 'react-dom/client';

function Gall() {
  const row = (a, b) => {
    alert(b.type);
  }

  return (
    <button onClick={(event) => row("Hello", event)}>Click here</button>
  );
}

const rootl = ReactDOM.createRoot(document.getElementById("root12"));
rootl.render(<Gall />);

/*
Renderizado con condicionales
*/

//usando if
import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
  return <h1>Missed!</h1>;
}

function MadeGoal() {
  return <h2>Goallllllll!</h2>
}

function GoalU() {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />
  }
  return <MissedGoal />
}

const rootl = ReactDOM.createRoot(document.getElementById("rootl"));
rootl.render(<GoalU isGoal={false} />);

//usando el operador &&
import React from 'react';
import ReactDOM from 'react-dom/client';

function Tort(){
  const cars = props.cars;
  return (
    <>
    <h1>Garage</h1>
    {cars.length > 0 &&
      <h2>
      You have {cars.length} cars in your garage.
      </h2>
    }
    </>
  );
}

const cars = ["BMW", "Audi", "Ferrari"];

const rootl = ReactDOM.createRoot(document.getElementById("rootl"));
rootl.render(<Tort cars={cars} />);

//usando los condicionales ternarios
import React from 'react';
import ReactDOM from 'react-dom/client';

White = () => {
  return <h1> This is White </h1>
}

function Black() {
  return <h1> This is Black </h1>
}

function Color() {
  const isColor = props.isColor;
  return (
    <>
    {isColor ? <White /> : <Black />}
    </>
  );
}

const rootl = ReactDOM.createRoot(document.getElementById("rootl"));
rootl.render(<Tort isColor={true} />);
