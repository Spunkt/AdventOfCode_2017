const helper = require('./utils/helper');
let day = 11;

switch(day){
  case 1:{
    const day1 = require('./Day1/solution');
    let numbers = helper.fileToString("./Day1/numbers.txt");
    console.log("Result if next same: ", day1.addIfNextSame(numbers));
    console.log("Result Other Half: ", day1.addIfOtherHalfSame(numbers));
    break;
  }
  case 2:{
    const day2 = require('./Day2/solution');
    let numbers = helper.fileToArray("./Day2/input.txt");
    console.log(day2.sumOfArrayLines(numbers));
    console.log(day2.sumOfEvenArrayDiff(numbers));
    break;
  }
  case 3:{
    const day3 = require('./Day3/solution');
    console.log(day3.calculateStepsToNumber(368078));
    break;
  }
  case 4:{
    const day4 = require('./Day4/solution');
    let rows = helper.fileToArray("./Day4/input.txt");
    console.log(day4.checkPassphrase(rows));
    console.log(day4.checkPassphraseV2(rows));
    break;
  }
  case 5:{
    const day5 = require('./Day5/solution');
    let rows = helper.fileToSimpleArray("./Day5/input.txt");
    console.log(day5.jumpsToEscape(rows));
    rows = helper.fileToSimpleArray("./Day5/input.txt");
    console.log(day5.jumpsToEscapeV2(rows));
    break;
  }
  case 6:{
    const day6 = require('./Day6/solution');
    let row = helper.fileToSimpleArray('./Day6/input.txt');
    let showSizeOfLoops = true;
    console.log(day6.memoryMove(row, showSizeOfLoops));
    break;
  }
  case 7:{
    const day7 = require('./Day7/solution');
    let rows = helper.fileToSimpleString('./Day7/input.txt');
    console.log(day7.recursiveTower(rows));
    console.log(day7.balanceWeight(rows));
    break;
  }
  case 8:{
    const day8 = require('./Day8/solution');
    let rows = helper.fileToSimpleArray('./Day8/input.txt');
    console.log(day8.registers(rows));
    break;
  }
  case 9:{
    const day9 = require('./Day9/solution');
    let symbols = helper.fileToSimpleString('./Day9/input.txt');
    console.log("Score: ", day9.stringProcessing(symbols));
    break;
  }
  case 10:{
    const day10 = require('./Day10/solution');

    let numbers = helper.fileToSimpleArray('./Day10/input.txt');
    numbers = numbers[0].split(",").map(n => +n);
    let list = day10.knotHash(numbers);
    console.log("Multiplication of first two numbers: ", list[0] * list[1]);

    let input = helper.fileToSimpleString('./Day10/input.txt');
    console.log("Hash:", day10.hashs(input));
    break;
  }
  case 11:{
    const day11 = require('./Day11/solution');
    const input = helper.fileToSimpleString("./Day11/input.txt");
    let result = day11.hexPath(input);
    console.log("Steps:", result[0]);
    console.log("Max distance:", result[1]);
    break;
  }
  case 12:{
    const day12 = require("./Day12/solution");
    break;
  }
  case 13:{
    break;
  }
  case 14:{
    break;
  }
  case 15:{
    break;
  }
  case 16:{
    break;
  }
  case 17:{
    break;
  }
  case 18:{
    break;
  }
  case 19:{
    break;
  }
  case 20:{
    break;
  }
  case 21:{
    break;
  }
  case 22:{
    break;
  }
  case 23:{
    break;
  }
  case 24:{
    break;
  }
  case 25:{
    break;
  }
}
