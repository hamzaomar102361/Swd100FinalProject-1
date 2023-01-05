function idCard () {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var address = document.getElementById("address").value;
  var fullName = document.getElementById("postFullName");
  fullName.innerHTML = firstName + " " + lastName;
  var addressOnId = document.getElementById("postAddress");
  addressOnId.innerHTML = address;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("telephon").value);
  var ageOnId = document.getElementById("postAge");
  var phone = document.getElementById("postPhoneNumber");
  var numberArray = [];
  numberArray.push(age);
  numberArray.push(phoneNumber);
  for(var i = 0; i < numberArray.length; i++) {
    if(numberArray[i] < 100) {
      ageOnId.innerHTML = "Age:" + " " + numberArray[i]; 
    }else if(numberArray[i] > 100) {
      phone.innerHTML = "Phone Number:" + " "  + numberArray[i];
    } else {
      phone.innerHTML = " ";
    }
  }
  var form = document.getElementById("form");
  form.onsubmit = function (e) {
    e.preventDefault();
  };
}