function showImage(src) {
    console.log("showImage called with src:", src);
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    console.log("lightbox:", lightbox, "lightboxImg:", lightboxImg);
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    console.log("closeLightbox called");
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
