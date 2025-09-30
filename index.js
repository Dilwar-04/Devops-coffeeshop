document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const menuSection = document.getElementById('menu');

    if (orderButton && menuSection) {
        orderButton.addEventListener('click', (e) => {
            e.preventDefault();
            menuSection.scrollIntoView({
                behavior: 'smooth'
            });
            console.log('Scrolling to Menu section.');
        });
    } else {
        console.error('Order button or Menu section element not found.');
    }
});
