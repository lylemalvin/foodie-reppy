const track = document.getElementById('sliderTrack');
        const originalCards = Array.from(track.children);
        const originalCount = originalCards.length;

        let visibleCards = 4;
        let index = originalCount;
        let cardWidth = 0;
        let sliding = false;
        const gap = 25;

        function getVisibleCards(){
            if (window.innerWidth <= 800) return 2;
            return 4;
        }
        function buildLoopClones(){
            track.innerHTML = '';
            const cloneSetBefore = originalCards.map(c => c.cloneNode(true));
            const cloneSetAfter = originalCards.map(c => c.cloneNode(true));
            cloneSetBefore.forEach(c => track.appendChild(c));
            originalCards.forEach(c => track.appendChild(c));
            cloneSetAfter.forEach(c => track.appendChild(c));
        }

        function jumpTo(newIndex, animate){
            index = newIndex;
            cardWidth = track.children[0].getBoundingClientRect().width;
            track.style.transition = animate ? 'transform 0.4s ease' : 'none';
            track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
        }

        function updateSlider(animate){
            visibleCards = getVisibleCards();
            cardWidth = track.children[0].getBoundingClientRect().width;
            track.style.transition = animate ? 'transform 0.4s ease' : 'none';
            track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
        }

        function slide(direction){
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