document.getElementById('left').addEventListener('click', function () {
    toggleOfferCards();
});

document.getElementById('right').addEventListener('click', function () {
    toggleOfferCards();
});

function toggleOfferCards() {
    var offer1 = document.getElementById('offer-1');
    var offer2 = document.getElementById('offer-2');

    if (offer1.style.display === 'flex') {
        offer1.style.display = 'none';
        offer2.style.display = 'flex';
    } else {
        offer1.style.display = 'flex';
        offer2.style.display = 'none';
    }
}
