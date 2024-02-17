let count = 1;
let totalPriceCount = 0;

const cards = document.querySelectorAll('.card');

for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('click', function() {
        
        const title = card.querySelector('h2').innerText;
        const productPrice = card.querySelector('p').innerText;
        const productTitle = document.getElementById('product-title');
        const p = document.createElement('p');
        p.innerText = count + '. ' +  title;
        productTitle.appendChild(p);
        count++;
        
        const priceArray = productPrice.split(' ');
        const price = parseFloat(priceArray[0]);
        console.log(price)
        totalPriceCount += price;
        const totalPrice = document.getElementById("total-price");
        totalPrice.innerText = totalPriceCount.toFixed(2);
    })
}

const couponButton = document.getElementById('coupon-button');
couponButton.addEventListener('click', function(){
    const couponText = document.getElementById('coupon-code').value;
    const couponCode = couponText.split(' ').join('').toUpperCase();
    console.log(couponCode);
    
    if(couponCode === 'SELL200'){
        if(totalPriceCount  >= 200){
            let discount = (totalPriceCount * 0.2).toFixed(2);
            document.getElementById('discount').innerText = discount;

            let total = (totalPriceCount - discount).toFixed(2);
            document.getElementById('total').innerText = total;
        }else{
            alert('200 takar beshi khoroch koro bhai!')
        }
    }else{
        alert('Invalid Coupon Code');
    }
    document.getElementById('coupon-code').value = '';
})

const makePurchase = document.getElementById('make-purchase');
makePurchase.addEventListener('click', function (){
    const totalPrice = document.getElementById('total-price').innerText;
    console.log(total);
    if(totalPrice === ''){
        alert('please choose your item');
    }
    else{
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
    }
})