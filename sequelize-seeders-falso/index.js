var arr = [{
    "name": "John",
    "age": 30,
    "cars": "BMW"
  },
  {
    "name": "Micheal",
    "age": 30,
    "cars": "Ford"
  },
  {
    "name": "Andy",
    "age": 29,
    "cars": "Ford"
  }
];

var carValues = arr.map( (value) => value.cars).filter( (value, index, _arr) => _arr.indexOf(value) == index);
console.log(carValues);