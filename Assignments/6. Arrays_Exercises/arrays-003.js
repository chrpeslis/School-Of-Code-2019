const products = [
    { price: 200, name: "iPhone" },
    { price: 300, name: "Nokia" },
    { price: 250, name: "Samsung" },
    { price: 150, name: "Xiaomi" },
    { price: 400, name: "Nexus" },
    { price: 500, name: "Sony" },
    { price: 500, name: "Huawei" },
    { price: 270, name: "Motorola" }
];

const productsTotal = products.map( handleProduct );
function handleProduct( product ) {
    return {
        price: product.price, 
        name: product.name,
        total: product.price * 1.23
    };
}
// console.log(productsTotal);

// 1) Loop over the array and for each element display an HTML element, which contains the price, total price and product name
const list = document.querySelector("#products");

productsTotal.map ( displayProduct );

function displayProduct (product){
    list.innerHTML += `<li>${product.name} / &euro; ${product.total}</li>`;
}


// 2) Create 2 buttons with text "Display ASC", "Display DESC". When the user clicks on the 'Display ASC' button, the list is sorted based on the price in ascending order and displayed in the screen. When the user clicks on the Display DESC, the list of products is displayed according to price in descending order.
const NewProducts = [
    { price: 246, name: "iPhone" },
    { price: 369, name: "Nokia" },
    { price: 307.5, name: "Samsung" },
    { price: 184.5, name: "Xiaomi" },
    { price: 492, name: "Nexus" },
    { price: 615, name: "Sony" },
    { price: 615, name: "Huawei" },
    { price: 332.1, name: "Motorola" }
];
function Desc() {
    function compare (a, b) {
        if (a.price < b.price)
              return -1;
        if (a.price > b.price)
              return 0;
    }
    let sorted_Desc = NewProducts.sort(compare);
    // console.log(sorted);
    const list2 = document.querySelector("#products");
    
    sorted_Desc.map (displayDesc);

    function displayDesc (product) {
        list.innerHTML += `<li>${product.name} / &euro; ${product.price}</li>`;
    }
}
function Asc() {
    function compare (a, b) {
        if (a.price < b.price)
              return 0;
        if (a.price > b.price)
              return -1;
    }
    let sorted_Asc = NewProducts.sort(compare);
    // console.log(sorted);
    const list3 = document.querySelector("#products");
    
    sorted_Asc.map (displayAsc);

    function displayAsc (product) {
        list.innerHTML += `<li>${product.name} / &euro; ${product.price}</li>`;
    }
}

// 3) Filter the products array, create a new array which contains only products that are cheaper than 500 and display the list in the console
function isCheaper(product) {
    return (product.price < 500);
}
let passed = NewProducts.filter(isCheaper);
console.log(passed);