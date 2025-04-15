$(document).ready(function () {
    const thumbnails = $(".thumb");
    let currentIndex = 0;

    function showImage(index) {
        const selectedThumb = thumbnails.eq(index);
        const newSrc = selectedThumb.attr("src");
        const newAlt = selectedThumb.attr("alt");

        $("#mainImage").attr("src", newSrc);
        $("#mainImage").attr("alt", newAlt);
        $("#caption").text(newAlt);
        currentIndex = index;
    }

    // Thumbnail click
    thumbnails.click(function () {
        currentIndex = thumbnails.index(this);
        showImage(currentIndex);
    });

    // Next button
    $("#nextBtn").click(function () {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    });

    // Prev button
    $("#prevBtn").click(function () {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    });
});
