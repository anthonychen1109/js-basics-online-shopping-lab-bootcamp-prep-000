var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random() * 100) + 1
 let newItem = new Object({ itemName: item, itemPrice: price})
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let list = ''
  let myCart = getCart()
  if (myCart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  else {
    for (let x=0; x<myCart.length; x++) {
      list += `you have ${x[itemName]} at ${price}`
    }
    return `In your cart, ${list}.`
  }
}

function total() {
  // write your code here
  let myCart = getCart()
  let total = 0
  for (let x=0; i<myCart.length; i++) {
    total += parseFloat(x['price'])
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
