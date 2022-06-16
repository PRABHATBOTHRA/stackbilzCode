import * as React from 'react';
import './style.css';

export default function App() {
  const arr = ['hello', 'hiii'];

  const arr1 = ['fruit', 'okay'];

  const concatarray = arr.concat(arr1);
  console.log(concatarray);

  const copyWithinarr = [1, 3, 4, 5, 99, 66, 200];
  copyWithinarr.copyWithin(0, 2, 4);
  console.log(copyWithinarr);

  const findArray = copyWithinarr.find((x) => x > 5);
  console.log(findArray);
  const arrs = arr.join(' ad ');
  const numbers = [2, 45, 30, 100];
  const reduceRigthArr = numbers.reduceRight((x, i) => x - i);

  const inputArray = [3, 6, -2, -5, 7, 3];

  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (max < inputArray[i] * inputArray[i + 1]) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  console.log('max value ', max);

  const data = inputArray.slice(0,-5).map((index)=>{return index*inputArray[index+1]})
  console.log('Arrat data ', data);

  console.log(reduceRigthArr);
  console.log(arrs);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
