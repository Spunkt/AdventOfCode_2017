const helper = require('../utils/helper');

module.exports = {
  memoryMove: function(inputRow, showSizeOfLoops){
    let cycles = 0;
    let scenarios = []
    let a = inputRow[0].split("\t");
    for(let i = 0; i < a.length; ++i){
      a[i] = parseInt(a[i]);
    }
    scenarios.push(a);
    let run = true;
    let j = 0;
    let seenOnce = false;
    while(run){
      let row = scenarios[scenarios.length - 1].slice();
      let highestValue = 0;
      for(let i = 0; i < a.length; ++i){
        if(row[i] > row[highestValue] && highestValue !== row[i]){ highestValue = i; }
      }

      let index = highestValue + 1;
      let stopIndex = row[highestValue];
      row[highestValue] = 0;
      for(let i = 0; i < stopIndex; ++i){
        if(index >= row.length){
          index = 0;
        }
        row[index] += 1;
        index++;
      }
      for(let i = 0; i < scenarios.length; ++i){
        if(helper.arraysEqual(row, scenarios[i]) && !seenOnce){
          if(showSizeOfLoops){ console.log(scenarios.length - i) }
          run = false;
        }
      }
      scenarios.push(row);
    }
    return scenarios.length - 1;
  }
}
