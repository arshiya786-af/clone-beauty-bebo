var blush = [
    {
        id: 1,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/_/5_91.jpg",
        name: "Miss Claire Mineral Blusher Kit - 3716-4-04",
        rating:"",
        price: "338.00",
        strikedoffprice: "₹375.00",
        discount: "10% off"
    },
    {
        id: 2,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/7/37_4_2.jpg",
        name: "Lakme Absolute Illuminating Blush Shimmer Brick - In Pink",
        rating:"",
        price: "689.00",
        strikedoffprice: "₹725.00",
        discount: "5% off"
    },
    {
        id: 3,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/6/160.jpg",
        name: "Miss Claire Make Up Palette 9924 (Make Up Kit)",
        rating:"",
        price: "1007.00",
        strikedoffprice: "₹1095.00",
        discount: "8% off"
    },
    {
        id: 4,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/5/159.jpg",
        name: "Miss Claire Make Up Palette 9929 (Make Up Kit)",
        rating:"",
        price: "2180.00",
        strikedoffprice: "₹2295.00",
        discount: "5% off"
    },
    {
        id: 5,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/5/158.jpg",
        name: "Miss Claire Make Up Palette 9910 (Make Up Kit)",
        rating:"",
        price: "1007.00",
        strikedoffprice: "₹1095.00",
        discount: "8% off"
    },
    {
        id: 6,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/5/155.jpg",
        name: "Miss Claire Make Up Palette 9911 (Make Up Kit)",
        rating:"",
        price: "1058.00",
        strikedoffprice: "₹1150.00",
        discount: "8% off"
    },
    {
        id: 7,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/5/150.jpg",
        name: "Miss Claire Make Up Palette 9952-2 (Make Up Kit)",
        rating:"",
        price: "446.00",
        strikedoffprice: "₹495.00",
        discount: "10% off"
    },
    {
        id: 8,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/149.jpg",
        name: "Miss Claire Make Up Palette 9955-1 (Make Up Kit)",
        rating:"",
        price: "823.00",
        strikedoffprice: "₹895.00",
        discount: "8% off"
    },
    {
        id: 9,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/148.jpg",
        name: "Miss Claire Make Up Palette 9952-1 (Make Up Kit)",
        rating: "",
        price: "495.00",
        strikedoffprice: "₹446.00",
        discount: "10% off"
    },
    {
        id: 10,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/145.jpg",
        name: "Miss Claire Professional Blusher Palette - 3",
        rating:"",
        price: "1610.00",
        strikedoffprice: "₹1695.00",
        discount: "5% off"
    },
    {
        id: 11,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/144.jpg",
        name: "Miss Claire Make Up Palette 9954-1 (Make Up Kit)",
        rating:"",
        price: "536.00",
        strikedoffprice: "₹595.00",
        discount: "10% off"
    },
    {
        id: 12,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/143.jpg",
        name: "Miss Claire Make Up Palette 9912 (Make Up Kit)",
        rating:"",
        price: "1007.00",
        strikedoffprice: "₹1095.00",
        discount: "8% off"
    },
]


var arr = [];
blush.map(function(elem,index,arr){
    var div = document.createElement("div")
    var div2 = document.createElement("div")
    var div1 = document.createElement("div")
    var avatar = document.createElement("img")
    avatar.setAttribute("src",elem.image_url)
    avatar.style.width = "100%"
    avatar.style.width = "100%"
    var name = document.createElement("h4")
    name.innerText = elem.name
    name.style.color = "#8d9793"
    var fdiv = document.createElement("div")
    var price = document.createElement("h3")
    price.innerText = "₹"+elem.price
    price.style.color = "#dd0285"
    var sprice = document.createElement("s")
    sprice.innerText = elem.strikedoffprice
    var discount = document.createElement("h4")
    discount.innerText = elem.discount
    discount.style.color = "#008000"
    var click = document.createElement("div")
    var button1 = document.createElement("button")
    button1.innerHTML = "<i class='fa-solid fa-cart-arrow-down'></i>"+" "+"Add To Cart"
    var button2 = document.createElement("button")
    button2.innerHTML = "<i class='fa-solid fa-heart'></i>"
    -+
    rat.style.fontSize =  "10px"
    rat.style.color =  "#eca330"
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
    sale.setAttribute("id","sale")
    
    button2.setAttribute("id","btn2")
    fdiv.setAttribute("id","fdivi")
    div1.setAttribute("id","div1")
    div2.setAttribute("id","div2")
    div.setAttribute("id","divi")
    click.append(button1, button2)
    if(elem.discount=="10% off")
    {
        div1.append(avatar,sale)
    }
    else
    {
        div1.append(avatar)
    }
    fdiv.append(sdiv,sprc,sdiv1)
    div2.append(name,rat,fdiv,click)
    div.append(div1,div2)
   

    document.querySelector("#container2").append(div)
    
})