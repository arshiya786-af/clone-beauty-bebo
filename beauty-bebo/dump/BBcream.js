var BBcream = [
    {
        id: 1,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/4/54_2.jpg",
        name: "Faces Canada Peaches N Cream Tinted Moisturizer - Light 01",
        rating: "",
        price: "539.00",
        strikedoffprice: "₹599.00",
        discount: "10% off",

    },
    {
        id: 2,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/t/h/th1.jpg",
        name: "The Body Shop All-In-One Bb Cream",
        rating: "",
        price: "1373.00",
        strikedoffprice: "₹1,445.00",
        discount: "5% off"
    },
    {
        id: 3,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/o/lo17.jpg",
        name: "L'Oreal Paris True Match BB Cream SPF 35 PA+++ - Silver/Gold",
        rating: "",
        price: "603.00",
        strikedoffprice: "₹670.00",
        discount: "10% off"
    },
    {
        id: 4,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/3/o3.jpg",
        name: "O3+ Bright Glow BB Cream SPF 30 PA+++",
        rating: "",
        price: "405.00",
        strikedoffprice: "₹445.00",
        discount: "9% off"
    },
    {
        id: 5,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/b/sb6.jpg",
        name: "Swiss Beauty Shiny Pearl Water Drop Blemish Balm BB Foundation",
        rating: "",
        price: "199.00",
        strikedoffprice: "₹220.00",
        discount: "10% off"
    },
    {
        id: 6,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/o/co.jpg",
        name: "Colorbar Perfect Match BB Cream SPF",
        rating: "",
        price: "300.00",
        strikedoffprice: "₹315.00",
        discount: "5% off"
    },
    {
        id: 7,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/2/92_1_2.jpg",
        name: "Olay Total Effects 7 In One Touch Of Foundation BB Cream Day SPF 15",
        rating: "",
        price: "781.00",
        strikedoffprice: "₹849.00",
        discount: "8% off"
    },
    {
        id: 8,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/0/10_26_4.jpg",
        name: "NYX Professional Makeup Born To Glow Liquid Illuminator - Sunbeam",
        rating: "",
        price: "782.00",
        strikedoffprice: "₹850.00",
        discount: "8% off"
    },
    {
        id: 9,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/n/pn1.jpeg",
        name: "Ponds Anti-Pollution Cream",
        rating: "",
        price: "145.00",
        strikedoffprice: "₹160.00",
        discount: "10% off"
    },
    {
        id: 10,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/3/n3.jpg",
        name: "Ponds White Beauty Anti Spot Fairness Cream SPF 15 PA++",
        rating: "",
        price: "240.00",
        strikedoffprice: "₹264.00",
        discount: "10% off"
    },
    {
        id: 11,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/1/p11.jpg",
        name: "Ponds White Beauty Spot-Less Fairness Day Cream",
        rating: "",
        price: "242.00",
        strikedoffprice: "₹269.00",
        discount: "10% off"
    },
    {
        id: 12,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_white_beauty_anti_spot_fairness.jpg",
        name: "Ponds Anti Spot Fairness",
        rating: "",
        price: "125.00",
        strikedoffprice: "₹150.00",
        discount: "20% off"
    },
]


// var arr = [];

displayData()


function displayData() {

    BBcream.map(function (elem, index, arr) {
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div1 = document.createElement("div")
        var avatar = document.createElement("img")
        avatar.setAttribute("src", elem.image_url)
        avatar.style.width = "100%"
        avatar.style.width = "100%"
        var name = document.createElement("h4")
        name.innerText = elem.name
        name.style.color = "#8d9793"
        var fdiv = document.createElement("div")
        var price = document.createElement("h3")
        price.innerText = "₹" + elem.price
        price.style.color = "#dd0285"
        var sprice = document.createElement("s")
        sprice.innerText = elem.strikedoffprice
        var discount = document.createElement("h4")
        discount.innerText = elem.discount
        discount.style.color = "#008000"
        var click = document.createElement("div")
        var button1 = document.createElement("button")
        button1.innerHTML = "<i class='fa-solid fa-cart-arrow-down'></i>" + " " + "Add To Cart"
        var button2 = document.createElement("button")
        button2.innerHTML = "<i class='fa-solid fa-heart'></i>"
        var rat = document.createElement("div")
        rat.innerHTML = "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>"
        rat.style.fontSize = "10px"
        rat.style.color = "#eca330"
        rat.style.marginBottom = "15px"
        rat.style.letterSpacing = "3px"
        click.style.display = "flex"
        click.style.justifyContent = "center"
        fdiv.style.display = "flex"
        fdiv.style.justifyContent = "space-around"
        var sym = document.createElement("h3")
        sym.innerHTML = "₹"
        var sprc = document.createElement("div")
        sprc.append(price)
        var sdiv = document.createElement("div")
        sdiv.append(sprice)
        var sdiv1 = document.createElement("div")
        sdiv1.append(discount)
        var sale = document.createElement("div")
        sale.innerHTML = "Sale"
        sale.setAttribute("id", "sale")
        button2.setAttribute("id", "btn2")
        fdiv.setAttribute("id", "fdivi")
        div1.setAttribute("id", "div1")
        div2.setAttribute("id", "div2")
        div.setAttribute("id", "divi")
        click.append(button1, button2)
        if (elem.discount == "10% off") {
            div1.append(avatar, sale)
        }
        else {
            div1.append(avatar)
        }
        fdiv.append(sdiv, sprc, sdiv1)
        div2.append(name, rat, fdiv, click)
        div.append(div1, div2)


        document.querySelector("#container2").append(div)

    })

}


document.querySelector("#select").addEventListener("change",sortfuction)

function sortfuction(){
    var x = document.querySelector("#select").value

    if(x == "l2h")
    {
        BBcream.sort(function(a,b){
            return Number(a.price) - Number(b.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if(x == "h2l")
    {
        BBcream.sort(function(a,b){
            return Number(b.price) - Number(a.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if(x == "Pname")
    {
        BBcream.sort(function(a,b){
            var x = a.name.toUpperCase()
            var y = b.name.toUpperCase()
            if(x>y){
                var comparision = 1
            }
            else{
                var comparision = -1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

    else if(x == "arr")
    {
        BBcream.sort(function(a,b){
            var x = a.discount.toUpperCase()
            var y = b.discount.toUpperCase()
            if(x>y){
                var comparision = -1
            }
            else{
                var comparision = 1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

}

document.querySelector("#skin").addEventListener("click",popup)

function popup(){
   var x = document.createElement("div")
   x.innerHTML = "rajkamal"
   

   document.querySelector("#mystery").append(x)
}
