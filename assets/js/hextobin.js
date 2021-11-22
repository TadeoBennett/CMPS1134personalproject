function getBinary() {
  var input = document.getElementById("input");
  var output = document.getElementById("output");
  var hex ="";
  //do nothing if nothing is entered
  if (input.value == "") {
    alert("Empty")
    return 0;
  }

  //since inputs that begin with 0 are omitted when a non 0 character follows it, we need to find a way do display the conversion of the 0s and continue on with the rest of characters in the input.
  if (input.value[0] == "0") {
    let begin0s = "";
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] == "0") {
        begin0s += "0000";
      }
      if (input.value[i] != "0") {
        // alert("Begin0s is "+begin0s+" and i is "+ i);
        for (i ; i < input.value.length; i++) {
          hex += parseInt(input.value[i], 16).toString(2).padStart(4, "0");
          console.log(hex);
        }
        break; //exit if and loop
      }
    }
    hex = begin0s + hex;
  } else {
    //do this to change the entire input
    hex = parseInt(input.value, 16).toString(2).padStart(4, "0");
  }
  output.value = hex;
}
