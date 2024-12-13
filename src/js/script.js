// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const listThumbnail = document.querySelectorAll("[data-full-img]");
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (evt) => {
        lightbox.classList.add('entrer');
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.showModal();
        
    })
});

lightbox.addEventListener('click', () => {
    lightbox.classList.add('sortie');
    lightbox.addEventListener('animationend', () => {
        lightbox.classList.remove('sortie');
        lightbox.close();
    }, { once: true });
});



