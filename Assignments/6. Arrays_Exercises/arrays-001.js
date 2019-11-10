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

function handleProduct( product ){
    // console.log("debug");
    // console.log(product); 

    //>> 1stway (Returns copy)
    // const p = {};
    // p.price = product.price;
    // p.price = product.name;
    // p.total = product.price * 1.23;

    //>> 2stway (Return copy) 
    // return{...product, total: products.price * 1.23};

    //>> 3stway (Return copy)
    // return product; // return identical product object
    return {
        price: product.price, 
        name: product.name,
        total: product.price * 1.23
    };
}
console.log(productsTotal);