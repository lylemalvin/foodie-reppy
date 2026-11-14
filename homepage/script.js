
const track = document.getElementById('sliderTrack');
const originalCards = Array.from(track.children);
const originalCount = originalCards.length;

let visibleCards = 4;
let index = originalCount;
let cardWidth = 0;
let sliding = false;
const gap = 25;

function getVisibleCards() {
    if (window.innerWidth <= 800) return 2;
    return 4;
}

function buildLoopClones() {
    track.innerHTML = '';

    const cloneSetBefore = originalCards.map(c => c.cloneNode(true));
    const cloneSetAfter = originalCards.map(c => c.cloneNode(true));

    cloneSetBefore.forEach(c => track.appendChild(c));
    originalCards.forEach(c => track.appendChild(c));
    cloneSetAfter.forEach(c => track.appendChild(c));
}

function jumpTo(newIndex, animate) {
    index = newIndex;
    cardWidth = track.children[0].getBoundingClientRect().width;

    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
}

function updateSlider(animate) {
    visibleCards = getVisibleCards();
    cardWidth = track.children[0].getBoundingClientRect().width;

    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
}

function slide(direction) {
    if (sliding) return;

    sliding = true;
    index += direction;

    updateSlider(true);
}

track.addEventListener('transitionend', () => {
    if (index >= originalCount * 2) {
        jumpTo(index - originalCount, false);
    } else if (index < originalCount) {
        jumpTo(index + originalCount, false);
    }

    sliding = false;
});

window.addEventListener('resize', () => updateSlider(false));

document.addEventListener('DOMContentLoaded', () => {
    buildLoopClones();
    jumpTo(originalCount, false);
});

const menuToggle = document.getElementById('menuToggle');
const headerButtons = document.getElementById('headerButtons');

if (menuToggle && headerButtons) {
    menuToggle.addEventListener('click', () => {
        const isOpen = headerButtons.classList.toggle('active');

        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });

    headerButtons.addEventListener('click', event => {
        if (event.target.closest('a')) {
            headerButtons.classList.remove('active');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });

    document.addEventListener('click', event => {
        if (
            !headerButtons.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            headerButtons.classList.remove('active');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            headerButtons.classList.remove('active');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });
}
