let totalOrders = 0;
let discount = 0;
const serviceFee = 1200;

document.querySelectorAll('.menu-item').forEach(item => {
    const price = parseInt(item.dataset.price);
    item.querySelector('.plus').addEventListener('click', () => {
        const countElement = item.querySelector('.count');
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
        updateTotal(price);
    });

    item.querySelector('.minus').addEventListener('click', () => {
        const countElement = item.querySelector('.count');
        let count = parseInt(countElement.textContent);
        if (count > 0) {
            count--;
            countElement.textContent = count;
            updateTotal(-price);
        }
    });
});

document.getElementById('apply-discount').addEventListener('click', () => {
    const discountCode = document.getElementById('discount-code').value;
    if (discountCode.toLowerCase() === 'gold') {
        discount = 6000;
    } 
    else if (discountCode.toLowerCase() === 'bronze') {
        discount = 3000;
    }
    else {
        discount = 0;
    }
    document.getElementById('discount').textContent = discount + ' تومان';
    updatePayableAmount();
});

function updateTotal(amount) {
    totalOrders += amount;
    document.getElementById('total-orders').textContent = totalOrders + ' تومان';
    updatePayableAmount();
}

function updatePayableAmount() {
    const payableAmount = totalOrders + serviceFee - discount;
    document.getElementById('payable-amount').textContent = payableAmount + ' تومان';
}

document.getElementById('place-order').addEventListener('click', () => {
    alert('سفارش شما ثبت شد!');
    // Add further order placement logic here
});
