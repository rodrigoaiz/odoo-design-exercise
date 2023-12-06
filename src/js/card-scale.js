var cards = document.querySelectorAll('.card-animation');
var originalTransforms = [];
cards.forEach(function(card, index) {
    originalTransforms[index] = card.style.transform;

    card.addEventListener('mouseover', function() {
        growCard(this);
    });

    card.addEventListener('mouseout', function() {
        shrinkCard(this, index);
    });
});

function growCard(card) {
    card.style.transform = "scale(1.05) translateY(-5px)";
}

function shrinkCard(card, index) {
    card.style.transform = originalTransforms[index];
}
