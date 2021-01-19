import Product from "./Product";

let prodsElems = [];

const productsAPI = {
    product1: {
        prod_img: "/assets/prod1.jpg",
        prod_name: "Adaline Shirt Dress",
        vendor: "RUE STIIC",
        price: "209.00",
        sold_out: true
    },
    product2: {
        prod_img: "/assets/prod2.jpg",
        prod_name: "Anya Ribbed Tee // Powder Blue",
        vendor: "REMAIN",
        price: "89.00",
        sold_out: true
    },
    product3: {
        prod_img: "/assets/prod3.jpg",
        prod_name: "Bombshell Slip // Black With White Spot",
        vendor: "BLAK",
        price: "179.00",
        sold_out: true
    },
    product4: {
        prod_img: "/assets/prod4.jpg",
        prod_name: "Chain Feature Handle",
        vendor: "SABEN",
        price: "59.99",
        sold_out: true
    },
    product5: {
        prod_img: "/assets/prod5.jpg",
        prod_name: "Dreamer Tee // Black",
        vendor: "MY BOYFRIENDS BACK",
        price: "99.00",
        sold_out: false
    },
    product6: {
        prod_img: "/assets/prod6.jpg",
        prod_name: "Envious Dress",
        vendor: "BLAK",
        price: "229.00",
        sold_out: false
    },
    product7: {
        prod_img: "/assets/prod7.png",
        prod_name: "Fleur Maxi",
        vendor: "TUESDAY",
        price: "249.00",
        sold_out: false
    },
    product8: {
        prod_img: "/assets/prod8.jpg",
        prod_name: "Leather Jacket Keyring",
        vendor: "STOLEN GIRLFRIENDS CLUB",
        price: "89.00",
        sold_out: true
    },
    product9: {
        prod_img: "/assets/prod9.jpg",
        prod_name: "Linen Classic Short Sleeve Tee // White",
        vendor: "COMMONERS ALIKE",
        price: "89.00",
        sold_out: false
    },
    product10: {
        prod_img: "/assets/prod10.jpg",
        prod_name: "Lottie Dress",
        vendor: "BLAK",
        price: "229.00",
        sold_out: false
    },
    product11: {
        prod_img: "/assets/prod11.jpg",
        prod_name: "Noire Long Sleeve Tee // Polar",
        vendor: "MY BOYFRIENDS BACK",
        price: "110.00",
        sold_out: true
    },
    product12: {
        prod_img: "/assets/prod12.jpg",
        prod_name: "Parade Skirt",
        vendor: "KETZ-KE",
        price: "159.00",
        sold_out: false
    },
    product13: {
        prod_img: "/assets/prod13.jpg",
        prod_name: "Portsea Dress // Black",
        vendor: "BETTY BASICS",
        price: "69.99",
        sold_out: false
    },
    product14: {
        prod_img: "/assets/prod14.jpg",
        prod_name: "Press Blazer // Natural",
        vendor: "NYNE",
        price: "469.00",
        sold_out: false
    },
    product15: {
        prod_img: "/assets/prod15.jpg",
        prod_name: "Remain Logo Crew // White",
        vendor: "REMAIN",
        price: "159.00",
        sold_out: false
    },
    product16: {
        prod_img: "/assets/prod16.jpg",
        prod_name: "Rib Knit Cami // White",
        vendor: "COMMONERS ALIKE",
        price: "99.00",
        sold_out: false
    },
    product17: {
        prod_img: "/assets/prod17.jpg",
        prod_name: "Riley Maxi Dress",
        vendor: "RUE STIIC",
        price: "279.00",
        sold_out: true
    },
    product18: {
        prod_img: "/assets/prod18.jpg",
        prod_name: "Rogue Tee // Stone",
        vendor: "REMAIN",
        price: "89.00",
        sold_out: true
    },
    product19: {
        prod_img: "/assets/prod19.jpg",
        prod_name: "Shadow Dress",
        vendor: "NYNE",
        price: "495.00",
        sold_out: false
    },
    product20: {
        prod_img: "/assets/prod20.jpg",
        prod_name: "Snake Hook Box Bag",
        vendor: "STOLEN GIRLFRIENDS CLUB",
        price: "469.00",
        sold_out: false
    },
    product21: {
        prod_img: "/assets/prod21.jpg",
        prod_name: "Swizzle Sticks // Endless Blue",
        vendor: "ZIGGY DENIM",
        price: "129.00",
        sold_out: false
    },
    product22: {
        prod_img: "/assets/prod22.jpg",
        prod_name: "Tammy Ribbed Tank // Black",
        vendor: "REMAIN",
        price: "79.00",
        sold_out: false
    },
    product23: {
        prod_img: "/assets/prod23.jpg",
        prod_name: "Trail of Tiers Dress",
        vendor: "COOP",
        price: "299.00",
        sold_out: true
    },
    product24: {
        prod_img: "/assets/prod24.jpg",
        prod_name: "Western Belt",
        vendor: "STOLEN GIRLFRIENDS CLUB",
        price: "129.00",
        sold_out: false
    },
    product25: {
        prod_img: "/assets/prod25.jpg",
        prod_name: "Yasmin Tiered Maxi Skirt",
        vendor: "REMAIN",
        price: "239.00",
        sold_out: false
    }
}

for (let product in productsAPI) {
    prodsElems.push(<Product key={productsAPI[product].prod_name} product={productsAPI[product]} />)
}


function Gallery() {
    return (
        <div className="gallery">
            <h1 className="gallery-header">Featured Products</h1>
            <div className="gallery-container">
                {prodsElems}
            </div>
        </div>
    )
}

export default Gallery;