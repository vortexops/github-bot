const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// const makeCommit = (a, b, n) => {
//     if(n===0) {
//         return simpleGit().push();
//     }
//     const x = randomIntFromInterval(0, 54);
//     const y = randomIntFromInterval(0, 6);
//     const DATE = moment().subtract(1, 'y').add(1, 'd')
//                 .add(x, 'w').add(y, 'd').format();
//     const data = {date: DATE}
//     console.log(DATE);
//     jsonfile.writeFile(FILE_PATH, data, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, makeCommit.bind(this, --n));
//     });
// }

// makeCommit(1, 2, 100)

const startDate = moment().subtract(3, 'years');
  const endDate = moment();

  for (let date = startDate; date.isBefore(endDate); date.add(1, 'days')) {
    const DATE = date.format();
    const data = { date: DATE };
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();
    });
  }
