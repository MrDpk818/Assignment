const countrySelect = document.querySelector("#country");
const stateSelect = document.querySelector("#state");
const contactNoInput = document.querySelector("#contactNo");
const emailSelect = document.querySelector("#email");
const form = document.querySelector("#form");

fetch(
  "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    countrySelect.innerHTML = `<option>Select Country</option>`;
    const countriesData = data.map((country) => ({
      text: country.name,
      value: country.code2,
    }));
    for (let option of countriesData) {
      countrySelect.options[countrySelect.options.length] = new Option(
        option.text,
        option.value
      );
    }
  })
  .catch((err) => {
    console.log(err);
  });

// On Country select state dropdown option changes
countrySelect.addEventListener("change", (event) => {
  fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      stateSelect.innerHTML = `<option>Select State</option>`;
      const { states } = data.find(
        (country) => country.code2 === event.target.value
      );

      const statesData = states.map((country) => ({
        text: country.name,
        value: country.code,
      }));
      for (let option of statesData) {
        stateSelect.options[stateSelect.options.length] = new Option(
          option.text,
          option.value
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


// Validation
// form.addEventListener('submit',(e)=>{
//   e.preventDefault();

//   checkInputs();
// });

// const checkInputs = () =>{
//   // Get values from the inputs
//   const usernameValue = userName.value.trim();
//   const emailValue = emailSelect.value.trim();
//   const contectValue = contactNoInput.value.trim();
//   const countryValue = countrySelect.value.trim();
//   const stateValue = stateSelect.value.trim();
// }

// if(!usernameValue){
//    //Show error    
//     //Add error class
//     setErrorFor(userName, 'Username cannot be blank');
//   }


// const setErrorFor = (input, message) => {
//   const formControl = input.parentElement; //this is the .form-control
//   const small = formControl.querySelector('small');
  
//   //add error message inside small
//   small.innerText = message;
  
//   //add error class
//   formControl.className = 'form-group error';
// } 

// const setSuccessFor = (input) => {
//   const formControl = input.parentElement; //this is the .form-control
  
//   //add success class
//   formControl.className = 'form-control success';
// }





form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Validate the form fields
  if (!validateForm()) {
    return;
  }

  // If the form is valid, submit it
  form.submit();
});

function validateForm() {
  const userName = document.querySelector("#name").value;
  const contact = document.querySelector("#contactNo").value;
  const DOB = document.querySelector("#dob").value;
  const Email = document.querySelector("#email").value;
  const Country = document.querySelector("#country").value;
 const State = document.querySelector("#state").value;


  if(userName===""){
    document.querySelector("#a0").innerHTML = "** Please fill username";
    return false;
  }else if(userName.length<4 || userName.length>10){
    document.querySelector("#a0").innerHTML = "** Length should be between 4-10 characters";
    return false;
  }

  if(DOB===""){
    document.querySelector("#a1").innerHTML = "** Please fill D.O.B.";
    return false;
  }

  if(contact===""){
    document.querySelector("#a2").innerHTML = "** Please enter a valid Contact no.";
    return false;
  }else if(contact.length>10){
    document.querySelector("#a2").innerHTML = "** Mobile number should be of 10 digits";
    return false;
  }

  if(Country===""){
    document.querySelector("#a3").innerHTML = "** Please select Country";
    return false;
  }

  if(State===""){
    document.querySelector("#a4").innerHTML = "** Please select state";
    return false;
  }

  if(Email===""){
    document.querySelector("#a5").innerHTML = "** Please enter a valid email";
    return false;
  }


  // if (name === "") {
  //   alert("Please enter a name");
  //   return false;
  // }

  // if (email === "") {
  //   alert("Please enter an email address");
  //   return false;
  // }

  return true;
}