var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

const addToCart = (item) => {
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }
  cart.push(newItem)
  return `${newItem['itemName']} has been added to your cart.`
}

const viewCart = () => {
  var list = []
  var counter = 0
  while(counter < cart.length-1) {
    list.push(`${cart[counter]['itemName']} at $${cart[counter]['itemPrice']}, `)
    counter += 1
  }
  return `In your cart, you have ${list}and ${cart[cart.length-1]['itemName']} and at $${cart[cart.length-1]['itemPrice']}.`
}

const total = () => {
  var sum = 0
  for (let i=0; i<cart.length; i++) {
    sum += parseInt(cart[i]['itemPrice'])
  }
  return sum
}

const removeFromCart = (name) => {
  for (let i=0; i<cart.length; i++) {
    if (cart[i]['itemName'] === name) {
      cart.splice(i, 1)
    } else {
      return 'That item is not in your cart.'
    }
  }
}

const placeOrder = (creditCard="") => {
  if (creditCard.length == "") {
    return "Sorry, we don't have a credit card on file for you.."
  } else {
    my_total = total()
    cart = []
    return `Your total cost is $${my_total}, which will be charged to the card ${creditCard}.`
  }
}