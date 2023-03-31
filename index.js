function longest_consec(arr, k) {
  if (arr.length == 0 || k > arr.length || k <= 0) return "";

  return arr.reduce((oldLongest, curr, index, sourceArr)=> {
    let newLongest= sourceArr.slice(index,index+k).join('')
    return newLongest.length > oldLongest.length ? newLongest : oldLongest
  }, "");
}

console.log(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2));
