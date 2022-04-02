var BBcream = [
    {
        id: 101, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/9/19_12_4.jpg",
        name: "Mamaearth Vitamin C Under Eye Cream For Dark Circles, Vitamin C & Gotu Kola",
        price: 999.00,
        discount: "10% off",
        strikedoffprice: "₹899.00",
        teg: "skin_eye", rating: ""
    },
    { id: 102, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/m/am9.jpg", name: "Aroma Magic Glycolic Concentrate- Lightens Pigmentation & Dark Circles", price: 850.00, discount: "10% off", strikedoffprice: "₹765.00", teg: "skin_eye", rating: "" },
    { id: 103, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg", name: "L'oréal Paris Youth Code Eye Serum", price: 799.00, discount: "10% off", strikedoffprice: "₹719", teg: "skin_eye", rating: "" },
    { id: 104, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/n/pndssss.jpg", name: "Ponds Age Miracle Eye Cream", price: 699.00, discount: "10% off", strikedoffprice: "₹630.00", teg: "skin_eye", rating: "" },
    { id: 105, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/f/dfhgdf.jpg", name: "L'oreal Paris Hydrafresh Anti-Ox Grape Seed Hydrating Mask-In Eye Gel", price: 490.00, discount: "10% off", strikedoffprice: "₹449.00", teg: "skin_eye", rating: "" },

    { id: 106, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/z/_/z_1.jpg", name: "Olay Serum Regenerist Collagen Boosting Serum, 50 M", price: 1399.00, discount: "10% off", strikedoffprice: "₹1260", teg: "EYE_CONTOUR_CARE", rating: "" },
    { id: 107, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg", name: "L'oréal Paris Youth Code Eye Serum", price: 799.00, discount: "10% off", strikedoffprice: "₹719.00", teg: "EYE_CONTOUR_CARE", rating: "" },
    { id: 108, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/_/u.jpg", name: "Olay Ultimate Eye Cream (Dark Circles Wrinkles & Puffiness)", price: 1699.00, discount: "5% off", strikedoffprice: "₹1614.00", teg: "EYE_CONTOUR_CARE", rating: "" },

    { id: 109, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/6/76bdacd8992304017810_0.jpg", name: "LOreal Paris Revitalift Anti Wrinkle + Radiance Eye Cream", price: 565.00, discount: "9% off", strikedoffprice: "₹515.00", teg: "EYE_CREAM", rating: "" },
    { id: 110, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/68cff016923700958614_new_3.jpg", name: "L'Oreal Paris Revitalift Triple Action Eye Cream", price: 1035.00, discount: "5% off", strikedoffprice: "₹983.00", teg: "EYE_CREAM", rating: "" },
    { id: 111, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/m/am5.jpg", name: "Aroma Magic Nourishes & Firms Under Eye Cream", price: 210, discount: "0% off", strikedoffprice: "₹210", teg: "EYE_CREAM", rating: "" },

    { id: 112, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001528-1.jpg", name: "Garnier Skin Naturals Light Complete Eye Roll On", price: 189.00, discount: "16% off", strikedoffprice: "₹159.00", teg: "EYE_MASKS", rating: "" }
]

// var BBcream = [
//     { id: 101, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/9/19_12_4.jpg", name: "Mamaearth Vitamin C Under Eye Cream For Dark Circles, Vitamin C & Gotu Kola", price: 999.00, discount: 10, strikedoffprice: 899.00, teg: "skin_eye", rating: "" },
//     { id: 102, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/m/am9.jpg", name: "Aroma Magic Glycolic Concentrate- Lightens Pigmentation & Dark Circles", price: 850.00, discount: 10, strikedoffprice: 765.00, teg: "skin_eye", rating: "" },
//     { id: 103, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg", name: "L'oréal Paris Youth Code Eye Serum", price: 799.00, discount: 10, strikedoffprice: 719, teg: "skin_eye", rating: "" },
//     { id: 104, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/n/pndssss.jpg", name: "Ponds Age Miracle Eye Cream", price: 699.00, discount: 10, strikedoffprice: 630.00, teg: "skin_eye", rating: "" },
//     { id: 105, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/f/dfhgdf.jpg", name: "L'oreal Paris Hydrafresh Anti-Ox Grape Seed Hydrating Mask-In Eye Gel", price: 490.00, discount: 10, strikedoffprice: 449.00, teg: "skin_eye", rating: "" },

//     { id: 106, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/z/_/z_1.jpg", name: "Olay Serum Regenerist Collagen Boosting Serum, 50 M", price: 1399.00, discount: 10, strikedoffprice: 1260, teg: "EYE_CONTOUR_CARE", rating: "" },
//     { id: 107, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg", name: "L'oréal Paris Youth Code Eye Serum", price: 799.00, discount: 10, strikedoffprice: 719.00, teg: "EYE_CONTOUR_CARE", rating: "" },
//     { id: 108, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/_/u.jpg", name: "Olay Ultimate Eye Cream (Dark Circles Wrinkles & Puffiness)", price: 1699.00, discount: 5, strikedoffprice: 1614.00, teg: "EYE_CONTOUR_CARE", rating: "" },

//     { id: 109, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/6/76bdacd8992304017810_0.jpg", name: "LOreal Paris Revitalift Anti Wrinkle + Radiance Eye Cream", price: 565.00, discount: 9, strikedoffprice: 515.00, teg: "EYE_CREAM", rating: "" },
//     { id: 110, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/68cff016923700958614_new_3.jpg", name: "L'Oreal Paris Revitalift Triple Action Eye Cream", price: 1035.00, discount: 5, strikedoffprice: 983.00, teg: "EYE_CREAM", rating: "" },
//     { id: 111, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/m/am5.jpg", name: "Aroma Magic Nourishes & Firms Under Eye Cream", price: 210, discount: 0, strikedoffprice: 210, teg: "EYE_CREAM", rating: "" },

//     { id: 112, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001528-1.jpg", name: "Garnier Skin Naturals Light Complete Eye Roll On", price: 189.00, discount: 16, strikedoffprice: 159.00, teg: "EYE_MASKS", rating: "" },
//     { id: 113, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/f/dfhgdf.jpg", name: "L'Oreal Paris Hydrafresh Anti-Ox Grape Seed Hydrating Mask-In Eye Gel", price: 499.00, discount: 10, strikedoffprice: 449.00, teg: "EYE_MASKS", rating: "" },

//     { id: 114, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/z/_/z_1.jpg", name: "Olay Serum Regenerist Collagen Boosting Serum, 50 Ml", price: 1399.00, discount: 10, strikedoffprice: 1260.00, teg: "EYE_SERUMS", rating: "" },
//     { id: 115, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/q/q/qqq.jpg", name: "L'Oréal Paris Youth Code Eye Serum", price: 799.00, discount: 10, strikedoffprice: 719.00, teg: "EYE_SERUMS", rating: "" },

//     { id: 116, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/n/pndssss.jpg", name: "Ponds Age Miracle Eye Cream", price: 699.00, discount: 10, strikedoffprice: 630.00, teg: "PUFFINESS", rating: "" },
//     { id: 117, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/n/anti-ageing_1.jpg", name: "Lotus Herbals YouthRx Anti-Ageing Eye Contour Crème", price: 475.00, discount: 20, strikedoffprice: 380.00, teg: "PUFFINESS", rating: "" },

//     { id: 118, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/9/19_12_4.jpg", name: "Mamaearth Vitamin C Under Eye Cream For Dark Circles, Vitamin C & Gotu Kola,", price: 999.00, discount: 10, strikedoffprice: 899.00, teg: "UNDER_EYE_CREAMS", rating: "" },
//     { id: 119, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/n/pndssss.jpg", name: "Ponds Age Miracle Eye Cream", price: 699.00, discount: 10, strikedoffprice: 630.00, teg: "UNDER_EYE_CREAMS", rating: "" },

//     { id: 120, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/1/71gi9vpqtgl._sl1500_.jpg", name: "Himalaya Herbals Under Eye Cream", price: 200, discount: 0, strikedoffprice: 200, teg: "UNDER_EYE_WRINKLES", rating: "" },
//     { id: 121, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/0/806360800102.jpg", name: "Lotus Herbals Nutraeye Rejuvenating & Correcting Eye Gel", price: 345.00, discount: 0, strikedoffprice: 345.00, teg: "UNDER_EYE_WRINKLES", rating: "" },

//     { id: 122, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/5/a55f0e28906080039713_0.jpg", name: "Organic Harvest Kumkumadi Cream With Saffron", price: 795.00, discount: 8, strikedoffprice: 731.00, teg: "ANTI_AGEING_CREAMS", rating: "" },
//     { id: 123, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be203.jpg", name: "Vaadi Herbals Anti Ageing Cream With Extracts Of Wheatgerm And Rose", price: 255.00, discount: 0, strikedoffprice: 255.00, teg: "ANTI_AGEING_CREAMS", rating: "" },

//     { id: 124, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/1/o13.jpg", name: "O3+ Meladerm Vitamin C Gel Bleach", price: 550.00, discount: 8, strikedoffprice: 506.00, teg: "BLEACH_CREAMS", rating: "" },
//     { id: 125, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be145.jpg", name: "Beeone Premium Chcolate Facial Creme Bleach", price: 270.00, discount: 22, strikedoffprice: 210.00, teg: "BLEACH_CREAMS", rating: "" },

//     { id: 126, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/0/70bf0be8904311901860_1.jpg", name: "WOW Skin Science Aloe Vera Multi-Vitamin Face Cream", price: 599.00, discount: 10, strikedoffprice: 540.00, teg: "BRIGHTENING_CREAM", rating: "" },
//     { id: 127, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be205.jpg", name: "Vaadi Herbals Chandan Kesar Haldi Face Pack", price: 495.00, discount: 0, strikedoffprice: 495.00, teg: "BRIGHTENING_CREAM", rating: "" },

//     { id: 128, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/5/759639c8904311903499__1_.jpg", name: "Wow Skin Science Apple Cider Vinegar Face Wash Bottle", price: 399.00, discount: 0, strikedoffprice: 399.00, teg: "FACE_WASH", rating: "" },
//     { id: 129, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/c/3c6b628o3xxx00000025_1.jpg", name: "O3+ Vitamin C Face Wash For Glow Skin", price: 325.00, discount: 0, strikedoffprice: 325.00, teg: "FACE_WASH", rating: "" },

//     { id: 130, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va24.jpg", name: "Lotus Herbals Frujuvenate Skin Perfecting & Rejuvenating Fruit Pack", price: 345.00, discount: 10, strikedoffprice: 311.00, teg: "FACIAL_WIPES", rating: "" },
//     { id: 130, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/l/cleanser_1_olay-gentle-foaming-face-wash-with-aloe_50g_fop_1.jpg", name: "Olay Gentle Foaming Face Wash With Aloe", price: 150.00, discount: 20, strikedoffprice: 120.00, teg: "FACIAL_WIPES", rating: "" },

//     { id: 132, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/0/f0c4f25lotus00000014.jpg", name: "Lotus Organics+ Bakuchiol Plant Retinol Miracle Facial Oil", price: 995.00, discount: 10, strikedoffprice: 896.00, teg: "FACE_OIL", rating: "" },
//     { id: 133, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/r/arom1.jpg", name: "Aroma Magic Olive Oil", price: 210.00, discount: 0, strikedoffprice: 210.00, teg: "FACE_OIL", rating: "" },

//     { id: 134, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53f7f568906080030383_rvn1.jpg", name: "Organic Harvest Masseuscious Damage Control Cleanser With Acai Berry", price: 1495.00, discount: 5, strikedoffprice: 1420.00, teg: "FACE_CLEANSERS", rating: "" },
//     { id: 135, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/4/b4.jpg", name: "Biotique Bio Pineapple Oil Control Foaming Face Cleanser", price: 149.00, discount: 149.00, strikedoffprice: 149.00, teg: "FACE_CLEANSERS", rating: "" },

//     { id: 136, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/2/12_34_8.jpg", name: "Aroma Magic 5 In 1 Facial Kit Salon Range", price: 1250.00, discount: 8, strikedoffprice: 1150.00, teg: "FACIAL_KITS", rating: "" },
//     { id: 137, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/6/16_17_2.jpg", name: "Vaadi Herals Deep - Moisturising Chocolate Massage Cream", price: 295.00, discount: 295.00, strikedoffprice: 295.00, teg: "FACIAL_KITS", rating: "" },

//     { id: 138, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/c/dcsasadsadasdas.jpg", name: "Biotique Advanced Ayurveda Bio Rose Pore Tightening Toner With Himalayan", price: 220.00, discount: 0, strikedoffprice: 220.00, teg: "FACE_TOOLS", rating: "" },
//     { id: 139, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/_/r.jpg", name: "Innisfree Jeju Orchid Fluid", price: 1500.00, discount: 0, strikedoffprice: 1500.00, teg: "FACE_TOOLS", rating: "" },

//     { id: 140, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/61a4f818904311904076_1.jpg", name: "Wow Skin Science Green Tea Face Moisturizer", price: 349.00, discount: 0, strikedoffprice: 349.00, teg: "MOISTURIZER", rating: "" },
//     { id: 141, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/1/e1e02018906087777236__7_.jpg", name: "Mamaearth Coco Nourishing Cold Cream For Dry Skin With Coffee And Vitamin E", price: 299, discount: 0, strikedoffprice: 299, teg: "MOISTURIZER", rating: "" },

//     { id: 142, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b2917c28904311900818-_2_.jpg", name: "Wow Skin Science Pink Rose Clay Face Mask", price: 499.00, discount: 10, strikedoffprice: 449.99, teg: "MASK_AND_PEELS", rating: "" },
//     { id: 143, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/a/2abe6c8joyxx00000023_n1.jpg", name: "Joy Revivify Green Clay Mask Pore Clarifying & Pollution Defense Mask", price: 265.00, discount: 0, strikedoffprice: 265.00, teg: "MASK_AND_PEELS", rating: "" },

//     { id: 144, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg", name: "WOW Skin Science Caffeine Face Serum", price: 599, discount: 14, strikedoffprice: 515.00, teg: "SERUM", rating: "" },
//     { id: 145, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/a/8ada0a1joyxx00000032_2.jpg", name: "Joy Revivify Hyaluronic + Hydra Boosting Intensive Repair Ultimate Hydrating", price: 349.00, discount: 10, strikedoffprice: 315.00, teg: "SERUM", rating: "" },

//     { id: 146, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/c/5cbb65aorgaa00000056_1.jpg", name: "Organic Harvest Organic Face Toner- Vitamin C", price: 495.00, discount: 10, strikedoffprice: 446.00, teg: "TONER_AND_ASTRINGENTS", rating: "" },
//     { id: 147, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/1/l11.png", name: "Lakme 9 To 5 Moist Matte Mattifying Face Toner", price: 249.00, discount: 0, strikedoffprice: 249.00, teg: "TONER_AND_ASTRINGENTS", rating: "" },

//     { id: 148, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg", name: "Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20", price: 475.00, discount: 10, strikedoffprice: 428.00, teg: "ALL_CREAM", rating: "" },
//     { id: 149, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/1/21_12_3.jpg", name: "Vaadi Herbals Chocolate & Strawberry Massage Gel - Pack Of 2", price: 570.00, discount: 0, strikedoffprice: 570.00, teg: "ALL_CREAM", rating: "" },

//     { id: 150, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/e/3eb5e308904311902874_1.jpg", name: "Wow Skin Science Raw African Shea Body Butter", price: 499.00, discount: 12, strikedoffprice: 440.00, teg: "BODY_MOISTURIZERS", rating: "" },
//     { id: 151, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/b/dbf4108wowxx00000096__1_.jpg", name: "WOW Skin Science Skin Revive Nectar Moisturiser No Parabens And No", price: 399.00, discount: 0, strikedoffprice: 399.00, teg: "BODY_MOISTURIZERS", rating: "" },

//     { id: 152, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/6/f67.jpg", name: "Faces Canada Hydro Toner", price: 479.00, discount: 12, strikedoffprice: 422.00, teg: "BODY_TONERS", rating: "" },
//     { id: 153, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001757-1.jpg", name: "Plum Bodylovin' Hawaiian Rumba Shower", price: 480.00, discount: 15, strikedoffprice: 480.00, teg: "BODY_TONERS", rating: "" },

//     { id: 154, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901631_1.jpg", name: "Wow Skin Science Kids Cool-The-Rays Sunscreen Cream - Spf 30+ Pa+++", price: 349.00, discount: 0, strikedoffprice: 349.00, teg: "BODY_SUN_CARE", rating: "" },
//     { id: 155, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be220.jpg", name: "Lotus Professional PhytoRx Silk Matte Sun Defense SPF 50", price: 795.00, discount: 8, strikedoffprice: 732.00, teg: "BODY_SUN_CARE", rating: "" },

//     { id: 156, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901495_1_1_.jpg", name: "WOW Skin Science AM2PM Sunscreen SPF 50 Lotion", price: 385.00, discount: 0, strikedoffprice: 385.00, teg: "BRIGHTENING_LOTION", rating: "" },
//     { id: 157, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/8/583d5ae4005808353149new.jpg", name: "NIVEA Body Lotion For Normal Skin, Express Hydration, For Fast Absorption", price: 367.00, discount: 8, strikedoffprice: 399.00, teg: "BRIGHTENING_LOTION", rating: "" },

//     { id: 158, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/5/a55f0e28906080039713_0.jpg", name: "Organic Harvest Kumkumadi Cream With Saffron", price: 795.00, discount: 8, strikedoffprice: 731.00, teg: "DARK_CIRCLES_AND_WRINKLES", rating: "" },
//     { id: 159, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/a/patanjali_ayurverd-1-min.jpg", name: "Patanjali Ayurverd Ltd Saundarya Anti Aging Cream", price: 300.00, discount: 12, strikedoffprice: 264.00, teg: "DARK_CIRCLES_AND_WRINKLES", rating: "" },

//     { id: 160, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg", name: "Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20", price: 475.00, discount: 10, strikedoffprice: 428.00, teg: "DAY_CREAM", rating: "" },
//     { id: 161, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be3a2018906087777212__7_.jpg", name: "Mamaearth Ubtan Nourishing Cold Cream For Winter With Turmeric &", price: 299.00, discount: 0, strikedoffprice: 299.00, teg: "DAY_CREAM", rating: "" },

//     { id: 162, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be147.jpg", name: "Beeone Body Polishing Kit", price: 925.00, discount: 15, strikedoffprice: 786.00, teg: "FOOT_CREAM", rating: "" },
//     { id: 163, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/foot_protector.jpg", name: "The Body Shop Hemp Foot Protector", price: 995.00, discount: 6, strikedoffprice: 935.00, teg: "FOOT_CREAM", rating: "" },

//     { id: 164, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be186.jpg", name: "O3+ D-Tan Liposoluble Wax (Italian Formula)", price: 990, discount: 8, strikedoffprice: 911, teg: "HAIR_REMOVER_CREAM", rating: "" },
//     { id: 165, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be161.jpg", name: "Beeone Green Apple Milky Wax", price: 310.00, discount: 20, strikedoffprice: 248.00, teg: "HAIR_REMOVER_CREAM", rating: "" },

//     { id: 166, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/3/43a6fecnivea00000064_1.jpg", name: "Nivea Soft Light Moisturizer Cream Peppy Pomegranate For Hands And", price: 325.00, discount: 0, strikedoffprice: 325.00, teg: "HAND_CREAMS", rating: "" },
//     { id: 167, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/2/c23.jpg", name: "Colorbar Floral Breeze Fruit Drop Hand Cream", price: 275.00, discount: 0, strikedoffprice: 275.00, teg: "HAND_CREAMS", rating: "" },

//     { id: 168, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm180.jpg", name: "Mamaearth After Bite Roll On For Rashes And Insect Bites - Roman Chamomile &", price: 249.00, discount: 0, strikedoffprice: 249.00, teg: "HANDS_AND_FEET", rating: "" },
//     { id: 169, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/2/c23.jpg", name: "Colorbar Floral Breeze Fruit Drop Hand Cream", price: 275.00, discount: 0, strikedoffprice: 275.00, teg: "HANDS_AND_FEET", rating: "" },

//     { id: 170, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/27_8_2.jpg", name: "Veet Full Body Waxing Kit Easy-Gelwax Technology Dry Skin - 20 Strips", price: 220.00, discount: 0, strikedoffprice: 220.00, teg: "KITS_AND_COMBOS", rating: "" },
//     { id: 171, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/a/facial_kit_with_face_massager.jpg", name: "Himalaya Herbals Pure Skin Neem Facial Kit With Face Massager", price: 649.00, discount: 15, strikedoffprice: 551.00, teg: "KITS_AND_COMBOS", rating: "" },

//     { id: 172, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_210_12.jpg", name: "Lotus Professional Phyto-Rx Whitening & Brightening Serum & Night Crème", price: 1320.00, discount: 8, strikedoffprice: 1215.00, teg: "NIGHT_CREAM", rating: "" },
//     { id: 173, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/_/5_90_4.jpg", name: "Wow Skin Science Anti Aging Night Cream - 50ml", price: 699.00, discount: 12, strikedoffprice: 615.00, teg: "NIGHT_CREAM", rating: "" },

//     { id: 174, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/i/himalayan_organics-2-min_1.jpg", name: "Himalayan Organics Vitamin C Night Cream With Hyaluronic Acid | Anti", price: 1195.00, discount: 8, strikedoffprice: 1099.00, teg: "NECK_CREAMS", rating: "" },
//     { id: 175, image_url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/e/deep_moisturisation_cream2.jpg", name: "Dove Deep Moisturisation Cream", price: 299.00, discount: 11, strikedoffprice: 266.00, teg: "NECK_CREAMS", rating: "" },
// ]












document.querySelector(".cart").addEventListener("click",cartpage)

function cartpage(){
    window.location.href = "/beauty-bebo/Merging/cart/rk.html"
}



var cartarr = JSON.parse(localStorage.getItem("cart")) || []
var wisharr = []    

displayData()


function displayData() {
    BBcream.map(function (elem, index, arr) {
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div1 = document.createElement("div")
        var avatar = document.createElement("img")
        avatar.setAttribute("src", elem.image_url)
        avatar.style.width = "100%"
        avatar.style.height = "100%"
        avatar.addEventListener("click", showbig)
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
        button1.addEventListener("click",addtocartfn,{once:true})
        function addtocartfn() {
            elem.quantity = 1
            cartarr.push(elem)
            localStorage.setItem("cart", JSON.stringify(cartarr))
            console.log(cartarr)
        }
        var button2 = document.createElement("button")
        button2.innerHTML = "<i class='fa-solid fa-heart'></i>"
        button2.addEventListener("click",addtowishfn,{once:true})
        function addtowishfn(){
            wisharr.push(elem)
            console.log(wisharr)
        }
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






document.querySelector("#select1").addEventListener("change", sortfuction)

function sortfuction() {
    var x = document.querySelector("#select1").value

    if (x == "l2h") {
        BBcream.sort(function (a, b) {
            return Number(a.price) - Number(b.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if (x == "h2l") {
        BBcream.sort(function (a, b) {
            return Number(b.price) - Number(a.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if (x == "Pname") {
        BBcream.sort(function (a, b) {
            var x = a.name.toUpperCase()
            var y = b.name.toUpperCase()
            if (x > y) {
                var comparision = 1
            }
            else {
                var comparision = -1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

    else if (x == "arr") {
        BBcream.sort(function (a, b) {
            var x = a.discount.toUpperCase()
            var y = b.discount.toUpperCase()
            if (x > y) {
                var comparision = -1
            }
            else {
                var comparision = 1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

}

document.querySelector("#skin").addEventListener("click", popup1)
skinckick = true
function popup1() {
    arrofcheckbox = ["Combination", "Dry", "Normal", "Oily", "Sensitive", "All Skin Type"]
    idc = 101
    if (skinckick == true) {
        document.querySelector("#skin").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            // x.style = "display : block"
            document.querySelector("#mysteryskin").append(x)
            y = document.getElementById("mysteryskin")
            y.style = "display : block"
            idc++
            skinckick = false
        });
        s = document.querySelectorAll("#mysteryskin>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });


    }
    else {
        // document.createElement("div").innerHTML= ""
        document.querySelector("#skin").innerText = "+"
        document.querySelector("#mysteryskin").innerHTML = ""
        skinckick = true
    }
}

document.querySelector("#price").addEventListener("click", popup2)
priceclick = true
function popup2() {
    arrofcheckbox = ["Below Rs. 1,000.00", "Rs. 1000.00 and above"]
    idc = 101
    if (priceclick == true) {
        document.querySelector("#price").innerText = "-"
        z = []
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            z += x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            // 
            document.querySelector("#mysteryprice").append(x)
            y = document.getElementById("mysteryprice")
            // 
            y.style = "display : block"
            idc++
            priceclick = false
            displayData()
        });
    }
    else {
        document.querySelector("#price").innerText = "+"
        document.querySelector("#mysteryprice").innerHTML = ""
        priceclick = true
    }
}

document.querySelector("#brand").addEventListener("click", popup3)
brandclick = true
function popup3() {
    arrofcheckbox = ["Garnier", "L'Oreal Paris", "Maybelline", "Olay", "Pond's", "Faces Canada", "NYX", "O3+", "Swiss Beuty", "Colorbar"]
    idc = 201
    if (brandclick == true) {
        document.querySelector("#brand").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            document.querySelector("#mysterybrand").append(x)
            y = document.getElementById("mysterybrand")
            y.style = "display : block"
            idc++
            brandclick = false
        });
        s = document.querySelectorAll("#mysterybrand>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });


        //  s = document.querySelector("#mysterybrand")
        //  
    }
    else {
        document.querySelector("#mysterybrand").innerHTML = ""
        document.querySelector("#brand").innerText = "+"
        brandclick = true
    }
}

document.querySelector("#shades").addEventListener("click", popup4)
shadesclick = true
function popup4(elem) {
    arrofcheckbox = ["Garnier", "L'Oreal Paris", "Maybelline"]
    idc = 1
    if (shadesclick == true) {
        document.querySelector("#shades").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<span class='dot'></span>"
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = color" + idc + " style = margin:0px>"

            // x.style = "styleradius : 50%"
            // y.style = "display : block"
            document.querySelector("#mysteryshades").append(x)
            idc++
            shadesclick = false
        });
    }
    else {
        document.querySelector("#mysteryshades").innerHTML = ""
        document.querySelector("#shades").innerText = "+"
        shadesclick = true
    }
}


document.querySelector("#form").addEventListener("click", popup5)
formclick = true
function popup5(elem) {
    arrofcheckbox = ["Balm", "Cleansing Milk", "Cream", "Liquid", "Lotion/Body Butter"]
    idc = 401
    if (formclick == true) {
        document.querySelector("#form").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            document.querySelector("#mysteryform").append(x)
            y = document.getElementById("mysteryform")
            y.style = "display : block"
            idc++
            formclick = false
        });
        s = document.querySelectorAll("#mysteryform>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });
    }
    else {
        document.querySelector("#mysteryform").innerHTML = ""
        document.querySelector("#form").innerText = "+"
        formclick = true
    }
}

l101c = false
l102c = false
document > left > mysteryprice.addEventListener("click", clearInterval)
// sq.addEventListener("click",clearInterval)
function clearInterval(ta) {
    ans = []
    BBcreamres = BBcream
    if (ta.target.id == "left101") {
        BBcream.map(element => {
            price = Number(element.price)
            if (price < 1000) {
                ans.push(element)
            }
        });
        BBcream = ans
        document.querySelector("#container2").innerHTML = ""

        if (l101c == true) {
            BBcream = BBcreamres
            displayData()
            l101c = false
        }
        else {
            displayData()
            BBcream = BBcreamres
            l101c = true
        }
    }
    if (ta.target.id == "left102") {
        s = BBcream.map(element => {
            price = Number(element.price)
            if (price > 1000) {
                ans.push(element)
            }
            return ans
        });
        BBcream = ans
        document.querySelector("#container2").innerHTML = ""
        if (l102c == true) {
            BBcream = BBcreamres
            displayData()
            l102c = false
        }
        else {
            displayData()
            BBcream = BBcreamres
            l102c = true
        }
    }
}

leftitemsearch = []
function run(e) {
    eid = e.target.id

    s = document.getElementById(eid)
    found = s.parentNode.innerText
    BBcreamres = BBcream
    if (eid == "left101") {
        BBcream.forEach(ele => {
            s = ele.name.split(" ")
            s.forEach(e => {
                if (e == found) {
                    leftitemsearch.push(ele)
                }
            });
        });
    }
    // if(ei)
    // if(leftitemsearch.length != 0)
    BBcream = leftitemsearch
    document.getElementById("container2").innerHTML = ""
    displayData()
    BBcream = BBcreamres
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


