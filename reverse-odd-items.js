// returns the given array with odd-items reversed.
export function reverseOddItems(original){
  let justOddItems = []

  for (i = 0; i < original.length; i = i + 2) {
      justOddItems.push(original[i]);
  }
  
  let reversed = justOddItems.reverse();
  
  let paddedJustOddItems = reversed.reduce((prev, hex) => prev.concat([hex, "asdf"]), []);
  
  let final = [];
  
  for (i = 0; i < paddedJustOddItems.length; i = i + 2) {
    final.push(paddedJustOddItems[i])
    final.push(original[i+1]);
  }
  
  
  return final.slice(0,final.length-1);
}

/**
// console.log(reverseOddItems(['#e54444',1200,'#e56d44',1500,'#e99963', 2000, '#efc68a',2500,'#f2f2a2']));
prints:
 * [
  '#f2f2a2', 1200,
  '#efc68a', 1500,
  '#e99963', 2000,
  '#e56d44', 2500,
  '#e54444'
  ]
 */