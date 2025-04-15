$(document).ready(function () {
    $(".thumb").click(function () {
        const newSrc = $(this).attr("src");
        const newAlt = $(this).attr("alt");

        $("#mainImage").attr("src", newSrc);
        $("#mainImage").attr("alt", newAlt);
        $("#caption").text(newAlt);
    });
});
