const removeCartItemButtons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0]
    const cartRows = cartItemContainer.getElementsByClassName('cart-row')

    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i]
        const priceElement = cartRow.getElementsByClassName('cart-price')[0]
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        const price = parseFloat(priceElement.innerText.replace('$', ''))
    }
}