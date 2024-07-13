const crypto = require('crypto');
const args = process.argv;
const operation = args[2];
console.log(args)
const parseArgsAsNumbers = (index1, index2) => [Number(args[index1]), Number(args[index2])];

const generateRandomNumber = (length) => {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const randomBytes = crypto.randomBytes(length);
  const randomNumber = randomBytes.toString('binary');
  console.log("Random number:", randomNumber);
};

if (operation === 'add') {
  if (args.length !== 5) {
    console.log("Please provide exactly two numbers for addition.");
  } else {
    const [num1, num2] = parseArgsAsNumbers(3, 4);
    console.log("Result:", num1 + num2);
  }
} else if (operation === 'sub') {
  if (args.length !== 5) {
    console.log("Please provide exactly two numbers for subtraction.");
  } else {
    const [num1, num2] = parseArgsAsNumbers(3, 4);
    console.log("Result:", num1 - num2);
  }
} else if (operation === 'mult') {
  if (args.length !== 5) {
    console.log("Please provide exactly two numbers for multiplication.");
  } else {
    const [num1, num2] = parseArgsAsNumbers(3, 4);
    console.log("Result:", num1 * num2);
  }
} else if (operation === 'divide') {
  if (args.length !== 5) {
    console.log("Please provide exactly two numbers for division.");
  } else {
    const [num1, num2] = parseArgsAsNumbers(3, 4);
    if (num2 === 0) {
      console.log("Cannot divide by zero.");
    } else {
      console.log("Result:", num1 / num2);
    }
  }
} else if (operation === 'sin') {
  if (args.length !== 4) {
    console.log("Please provide exactly one number for sine calculation.");
  } else {
    const num = Number(args[3]);
    console.log("Result:", Math.sin(num));
  }
} else if (operation === 'cos') {
  if (args.length !== 4) {
    console.log("Please provide exactly one number for cosine calculation.");
  } else {
    const num = Number(args[3]);
    console.log("Result:", Math.cos(num));
  }
} else if (operation === 'tan') {
  if (args.length !== 4) {
    console.log("Please provide exactly one number for tangent calculation.");
  } else {
    const num = Number(args[3]);
    console.log("Result:", Math.tan(num));
  }
} else if (operation === 'random') {
  const length = parseInt(args[3], 10);
  generateRandomNumber(length);
} else {
  console.log("Invalid operation.");
}
