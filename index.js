const core = require('@actions/core');

function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

try {
  // action.yml で定義した、入力を受け取る
  const username = core.getInput('number');
  console.log(`Calcurate FizzBuzz below ${number}.`);

  // FizzBuzz
  fizzbuzz(number);

  console.log(`Completed FizzBuzz!!`);
} catch (error) {
  core.setFailed(error.message);
}