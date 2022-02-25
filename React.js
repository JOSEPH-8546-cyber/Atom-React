/* function */

const myArray = ['apple','orange','melon','pineapple','grape'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('proof'))
