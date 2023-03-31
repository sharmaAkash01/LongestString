function longest_consec(arr, k) {
  if (arr.length == 0 || k > arr.length || k <= 0) return "";

  return arr.reduce((oldLongest, curr, index, sourceArr)=> {
    let newLongest= sourceArr.slice(index,index+k).join('')
    return newLongest.length > oldLongest.length ? newLongest : oldLongest
  }, "");
}

console.log(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2));


//2nd Approach
function longest_consec2(arr, k) {
  if (arr.length == 0 || k > arr.length || k <= 0) return "";
  let longest=arr[0]+arr[1]
  for (let i = 0; i < arr.length-1; i++) {
    let newStr = arr.slice(i, i + k).join("");
    if(newStr.length>longest.length){
      longest= newStr
    }
  }
  return longest
}

console.log(
  longest_consec2(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
