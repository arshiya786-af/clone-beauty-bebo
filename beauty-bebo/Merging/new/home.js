function cartpage(){
    window.location.href = "/beauty-bebo/Merging/cart/rk.html"
}


document.querySelector("#selectLogin").addEventListener("change",change)

function change(){
    var x = document.querySelector("#selectLogin").value
    
    if(x == "login")
    {
        console.log(x)
        window.location.href = "/beauty-bebo/loginSignup/login.html"
    }
    else if(x == "reg")
    {
        window.location.href = "/beauty-bebo/loginSignup/signup.html"
    }
}


function showdata(){
    console.log(document.querySelector(".zname").innerHTML)
}

var cartarr = JSON.parse(localStorage.getItem("cart")) || []
d = document.querySelectorAll("#Addcart1")
d.forEach(e => {
    e.addEventListener("click",go)
});
function go(e)
{
    imgsrc = e.target.parentNode.parentNode.childNodes[1].src
    imgname = e.target.parentNode.parentNode.childNodes[3].innerText
    price= e.target.parentNode.parentNode.childNodes[7].childNodes[3].innerText
    quantity = 1
    console.log(imgsrc,imgname,price,quantity)
    cartpush = {
        "image_url" : imgsrc,
        "name" : imgname,
        "price" : price,
        "quantity" : quantity,
    }
    cartarr.push(cartpush)
    cartarr = JSON.stringify(cartarr)
    localStorage.setItem("cart",cartarr)
    document.location.reload()
}

for(x=0;x<17;x++)
{
    if(x%2==0)
    {
        rem = document.querySelectorAll("#Addcart>div")[x].addEventListener("click",other)
    }
}

function other(e)
{
    imgsrc = e.target.parentNode.parentNode.parentNode.childNodes[1].src
    imgname = e.target.parentNode.parentNode.childNodes[1].innerText
    price = e.target.parentNode.parentNode.childNodes[5].innerText
    quantity = 1
    console.log(imgsrc,imgname,price,quantity)
    cartpush = {
        "image_url" : imgsrc,
        "name" : imgname,
        "price" : price,
        "quantity" : quantity,
    }
    cartarr.push(cartpush)
    cartarr = JSON.stringify(cartarr)
    localStorage.setItem("cart",cartarr)
    document.location.reload()
}

function showbig(e) {
    img = e.target.src
    n = e.target.parentNode.parentNode.lastChild.querySelector("h4").innerText
    // 
    retting = e.target.parentNode.parentNode.lastChild.querySelector("div")
    // 
    price = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi>div>s").innerText
    // 
    strikedoffprice = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi")
    strikedoffprice = strikedoffprice.querySelectorAll("div")[1].innerText

    discount = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi")
    discount = discount.querySelectorAll("div")[2].innerText

    button = e.target.parentNode.parentNode.lastChild.lastChild
    single = { "img": img, "name": n, "price": price, "strikedoffprice": strikedoffprice, "discount": discount }
    single = JSON.stringify(single)
    localStorage.setItem("single", single)
    window.open("http://127.0.0.1:5500/showItem.html", "_self")
}


