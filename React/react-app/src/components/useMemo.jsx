import React, { useState ,useMemo} from 'react';

function Usememo() {
  const [text, setText] = useState(''); // Regular text input
  const [range, setRange] = useState(0); // Number for sum calculation

//   function calculateSum() {
//     console.log('Recalculating sum...');
//     let total = 0;
//     for (let i = 0; i < range; i++) {
//       total += i;
//     }
//     return total;
//   }
//  const sum = calculateSum();

  const sum = useMemo(() => {
    console.log('Recalculating sum...');
    let total = 0;
    for (let i = 0; i < range; i++) {
      total += i;
    }
    return total;
  }, [range]);

  return (
    <div>
      <label htmlFor="name">NAME: </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <br />
      <label htmlFor="range">Range: </label>
      <input
        type="number"
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
      />
      <p>Computed Sum: {sum}</p>
      <p>Text Value: {text}</p>
    </div>
  );
}

export default Usememo;
