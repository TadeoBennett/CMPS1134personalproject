function infoMetric() {
  alert(
    "Kindly note that you are using the metric system(centimeters and meters), as well as kilograms."
  );
}
document.getElementById("tabMetric").addEventListener("click", infoMetric);

function infoStandard() {
  alert(
    "Kindly note that you are using the imperial system(feet and inches), as well as pounds."
  );
}
document.getElementById("tabStandard").addEventListener("click", infoStandard);

function validateForm1() {
  let feet = document.getElementById("feet").value;
  let inches = document.getElementById("inches").value;
  let weight = document.getElementById("weightLBS").value;
  if (feet == "" || inches == "" || weight == "") {
    document.getElementById("info1").innerHTML = "Fill in all fields";
    document.getElementById("info1").style.color = "red";
    document.getElementById("info1").style.fontfamily = "Arial, Helvetica, sans-serif";
    document.getElementById("calculateStandard").innerText = "Calculate";
    document.getElementById("output1").innerHTML = "You are trying to submit an incomplete form. Kindly enter the required fields to be able to get your accurate BMI.";
    return false;
  } else {
    feet = parseInt(feet, 10);
    inches = parseInt(inches, 10);
    weight = parseInt(weight, 10);

    let height = feet * 12 + inches;
    let bmi = (weight / height ** 2) * 703;
    bmi = Math.round(bmi);

    document.getElementById("info1").innerHTML = "Your BMI has been computed successfully";
    document.getElementById("info1").style.color = "green";
    document.getElementById("info1").style.fontfamily = "Arial, Helvetica, sans-serif";
    document.getElementById("calculateStandard").innerText = "SUCCESS";
    
    if (bmi < 18.5) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output1").innerHTML = bmi + " This means that you are underweight";
      return false;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output1").innerHTML = bmi + " This means that you are at  a healthy weight.";
      return false;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output1").innerHTML = bmi + " Be wary of your condition. This means that you are overweight.";
      return false;
    } else if (bmi > 30.0) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output1").innerHTML = bmi + " This means that you are obese. Be cautious about the health implications of being obese.";
      return false;
    }

    document.getElementById("output1").innerHTML = bmi;
    return false;
  }
}

function validateForm2() {
  let meters = document.getElementById("meters").value;
  let cm = document.getElementById("cm").value;
  let weight = document.getElementById("weightKG").value;
  if (meters == "" || cm == "" || weight == "") {
    document.getElementById("info2").innerHTML = "Fill in all fields";
    document.getElementById("info2").style.color = "red";
    document.getElementById("info2").style.fontfamily = "Arial, Helvetica, sans-serif";
    document.getElementById("calculateMetric").innerText = "Calculate";
    document.getElementById("output2").innerHTML = "You are trying to submit an incomplete form. Kindly enter the required fields to be able to get your accurate BMI.";
    return false;
  } else {
    meters = parseInt(meters, 10);
    cm = parseInt(cm, 10);
    weight = parseInt(weight, 10);

    let height = meters + (cm / 100);
    let bmi = (weight / (height ** 2));
    bmi = Math.round(bmi);

    document.getElementById("info2").innerHTML = "Your BMI has been computed successfully";
    document.getElementById("info2").style.color = "green";
    document.getElementById("info2").style.fontfamily = "Arial, Helvetica, sans-serif";
    document.getElementById("calculateMetric").innerText = "SUCCESS";
    
    if (bmi < 18.5) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output2").innerHTML = bmi + " This means that you are underweight.";
      return false;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output2").innerHTML = bmi + " This means that you are at a healthy weight.";
      return false;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output2").innerHTML = bmi + " Be wary of your condition. This means that you are overweight.";
      return false;
    } else if (bmi > 30.0) {
      bmi = "Your BMI is " + bmi + ".";
      document.getElementById("output2").innerHTML = bmi + " This means that you are obese. Be cautious about the health implications of being obese.";
      return false;
    }

    document.getElementById("output2").innerHTML = bmi;
    return false;
  }
}

