document.querySelector("#formSignin").addEventListener("submit", loginInfo)


function loginInfo(event) {
  event.preventDefault();


  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  // console.log(email, pass)

  checkInfo(email, pass)
  userispresent = { "email": email }
  localStorage.setItem("userispresent", userispresent)
}



function checkInfo(mailid, password) {
  //event.preventDefault();
  //console.log(mailid);


  var getSignUpData = JSON.parse(localStorage.getItem("BeautySignupInfo"));

  if (getSignUpData == undefined) {
    alert("you are new User please Signup first!!")
    document.querySelector("#email").value = ""
    document.querySelector("#pass").value = ""
  }
  else {





    //console.log(getSignUpData)

    getSignUpData.map(function (ele, index, arr) {
      var flag = false;
      console.log(ele.email, ele.pass)



      if (ele.email == document.querySelector("#email").value && ele.pass == document.querySelector("#pass").value) {
        alert("login successful")
        window.location.href = "/beauty-bebo/Merging/new/homepage.html"
      }
      else if (ele.email == document.querySelector("#email").value) {
        alert("incorrect password")
      }
      // else if (document.querySelector("#email").value == "") {
      //   alert("enter mail id")
      // }
      else {
        alert("you are new User please Signup first!!")
        document.querySelector("#email").value = ""
        document.querySelector("#pass").value = ""
      }



      // if (flag == false) {
      //   alert("Please Check Mail ")
      // }
      // else {

      // }

    })
  };





}


document.getElementById("createaccount").onclick = function () {
  window.location.href = "./signup.html";
}