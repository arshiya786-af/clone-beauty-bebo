
document.querySelector("#otpbox").addEventListener("submit", otpfunct);


function otpfunct(event)
{

    if(document.querySelector("#inputBox").value ==="1234")
    {
        window.location.href = "/beauty-bebo/Merging/new/homepage.html"
        alert("Payment Successful")
        alert("Order placed Successfully")
    
    }
    else{
        alert("Invalid OTP")
        console.log("invalie otp")
    }
}