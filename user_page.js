let orders = document.querySelector('.history_orders');
let information = document.querySelector('.personal_information');
let personalInfomation = document.querySelector('.personal_information_btn');
let historyOrder = document.querySelector('.history_order_btn')
personalInfomation.addEventListener('click', changePersonal);
historyOrder.addEventListener('click', changeOrder)

function changeOrder() {
    if (orders.style.display === "none") {
        orders.style.display = "block";
        information.style.display = 'none'
    }
}

function changePersonal() {
    if (information.style.display == 'none') {
        information.style.display = 'block'
        orders.style.display = "none";
    }
}




