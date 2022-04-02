document.querySelector("#signupForm").addEventListener("submit", signupInfo)


// signupArr = signupArr 

function signupInfo(event) {

   event.preventDefault();
   // console.log("raj")

   var signupArr = JSON.parse(localStorage.getItem("BeautySignupInfo")) || []




   // signupArr.map(function (elem, index, arr) {
   //    console.log(raj);


   // })
   var infoObj = {
      name: document.querySelector("#name").value,
      surname: document.querySelector("#surname").value,
      email: document.querySelector("#email").value,
      pass: document.querySelector("#pass").value,
      repass: document.querySelector("#repass").value
   }


   signupArr.push(infoObj);

   console.log("raj");
   console.log(signupArr);

   localStorage.setItem("BeautySignupInfo", JSON.stringify(signupArr));

      document.querySelector("#name").value = ""
      document.querySelector("#surname").value = ""
      document.querySelector("#email").value = ""
      document.querySelector("#phone").value = ""
      document.querySelector("#pass").value = ""
      document.querySelector("#repass").value = ""


      window.location.href = "/beauty-bebo/loginSignup/login.html"
      
   //   userispresent = {"name" : document.querySelector("#name").value}
   //   userispresent = JSON.stringify(userispresent)
   // localStorage.setItem("userispresent" , userispresent)
   //    console.log(infoObj)


}

// var signupArr =  JSON.parse(localStorage.getItem("BeautySignupInfo"));
