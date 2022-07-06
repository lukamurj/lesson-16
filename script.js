// 1
function isNumEven(Num) {
  return Num % 2 === 0;
}

console.log(isNumEven(6));

// 2
function areaOfRectangle(Num1, Num2) {
  return Num1 * Num2;
}

console.log(areaOfRectangle(3, 9));

// 3
function areaOfSquare(Num1) {
  return Num1 ** 2;
}

console.log(areaOfSquare(8));

// 4
function getRandomNum() {
  return Math.round(Math.random() * 100);
}

console.log(getRandomNum());

// 5
function getCurrencySymbolFromCode(Currency) {
  switch (Currency) {
    case "USD":
      console.log("$");
      break;
    case "EUR":
      console.log("€");
      break;
    case "GEL":
      console.log("ლ");
      break;
    default:
      console.log(
        "Your code doesn't associate with any of our! Please enter right one"
      );
  }
}

getCurrencySymbolFromCode("GEL");

// 6
let students = [
  {
    Name: "Luka",
    Age: 18,
  },
  {
    Name: "Gio",
    Age: 23,
  },
  {
    Name: "Mari",
    Age: 19,
  },
  {
    Name: "Nini",
    Age: 33,
  },
  {
    Name: "Dato",
    Age: 28,
  },
];

function youngestStudent(arr) {
  let Num = arr[0].Age;
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Num > arr[i].Age) {
      Num = arr[i].Age;
      index = i;
      console.log(Num);
    }
  }
  return index;
}

console.log(students[youngestStudent(students)]);
