function filterByCategory(product){
    return function(category){
        let arr = product.filter(element => {
            return element.Category===category
                 
        });
       // console.log(arr)
        return arr;
    }
}
var products = [
    {name: "Shirt", Category : "Clothing"},
    {name: "Pant", Category : "Clothing"},
    {name: "Hat", Category : "Accessories"},
    {name: "Sunglasses", Category : "Accessories"},
];

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);