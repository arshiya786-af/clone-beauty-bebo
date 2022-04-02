DATA = localStorage.getItem("single")
data = JSON.parse(DATA)
console.log(data)

var avatar = document.createElement("img")
    avatar.setAttribute("src", data.img)
    avatar.style.width = "100%"
    avatar.style.width = "100%"

var n = document.createElement("h4")
n.innerText = data.name

first = document.querySelector(".show_image")
first.append(avatar)

secound = document.querySelector(".show_data")
secound.append(n)

var rat = document.createElement("div")
    rat.innerHTML = "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>"
    // i.style.height = "10px"
    rat.style.fontSize = "10px"
    rat.style.color = "#eca330"
    rat.style.marginBottom = "15px"
    rat.style.letterSpacing = "3px"

secound.append(rat)


var sym = document.createElement("h3")
sym.innerText = data.name;
console.log(sym)
var sprc = document.createElement("div")
sprc.id = "allprice"
priceh3 = document.createElement("h3")
priceh3.innerText = data.price
spriceh3 = document.createElement("h3")
spriceh3.innerText = data.strikedoffprice
dis = document.createElement("h3")
dis.innerText = data.discount
sprc.append(priceh3,spriceh3,dis)
secound.append(sprc)


var sec = document.createElement("div")
var button1 = document.createElement("button")
button1.innerHTML = "<i class='fa-solid fa-cart-arrow-down'></i>" + " " + "Add To Cart"
button1.id = "button1";
var button2 = document.createElement("button")
button2.innerHTML = "<i class='fa-solid fa-heart'></i>"
button2.id = "button2"
sec.append(button1,button2)
secound.append(sec)
var h5 = document.createElement("h5")
h5.innerText = "if you have already used it please give your valuable review/opinion on this product, thank you."
var input = document.createElement("input")
secound.append(h5)
secound.append(input)