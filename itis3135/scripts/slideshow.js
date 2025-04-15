$(document).ready(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");

    const images = [
        { file: "n_necklace.jpg", caption: "N - Necklace (First letter in my name)" },
        { file: "e_eagle.jpg", caption: "E - Eagle (Second letter in my name)" },
        { file: "e_envelope.jpg", caption: "E - Envelope (Third letter in my name)" },
        { file: "l_lighthouse.jpg", caption: "L - Lighthouse (Fourth letter in my name)" },
        { file: "p_pizza.jpg", caption: "P - Pizza (Fifth letter in my name)" },
        { file: "a_airplane.jpg", caption: "A - Airplane (Sixth letter in my name)" },
        { file: "n_notebook.jpg", caption: "N - Notebook (Seventh letter in my name)" },
        { file: "a_avocado.jpg", caption: "A - Avocado (Eighth letter in my name)" },
        { file: "j_jacket.jpg", caption: "J - Jacket (Ninth letter in my name)" },
        { file: "k_keyboard.jpg", caption: "K - Keyboard (Tenth letter in my name)" },
        { file: "a_anchor.jpg", caption: "A - Anchor (Eleventh letter in my name)" },
        { file: "r_robot.jpg", caption: "R - Robot (Twelfth letter in my name)" }
    ];

    const $gallery = $("#thumbnail-gallery");
    images.forEach((img, idx) => {
        const thumb = $(`<img class='thumb' src='images/${img.file}' alt='${img.caption}' />`);
        thumb.on("click", function () {
            $("#main-image").attr("src", `images/${img.file}`);
            $("#main-image").attr("alt", img.caption);
            $("#caption").text(img.caption);
        });
        $gallery.append(thumb);
    });
});
