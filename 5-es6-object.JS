const name = 'Sachin'
const userAge = 25

const  user =  {
    name: name,
    age: userAge,
    location: 'Hamilton'
}
console.log(user)

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.5
}


// const label =  product.label
// const stock = product.stock

// const {label, stock, rating = 5} = product
// console.log(label)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {

    console.log(type, label, stock)

}

transaction('order', product)