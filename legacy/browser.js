(function(kotoba, producer) {
    'use strict';

    $(document).ready(function () {
        var $yukimi = $("<img src='https://pbs.twimg.com/media/C_-L86bVwAADGuu.png' />")
            .css({
                position: "fixed",
                right: 0,
                bottom: 0,
                "z-index": 999
            })
            .click(function () {
                $yukimi.hide();
                $kotoba.hide();
            });

        var $kotoba = $("<div></div>")
            .html(kotoba.replace(/○○/g, producer))
            .css({
                position: "fixed",
                right: 0,
                bottom: 300,
                "background-color":"#f3f3f3",
                width: 250,
                border: "1px solid gray",
                "border-radius": "1em",
                padding: 10,
                "z-index": 999
            });

        $("body").append($yukimi)
            .append($kotoba);
    });
})("……○○…また…えっちな…こと…見てる……私のことも…見て……ふふっ……………", // 雪美ちゃんが喋って欲しいセリフ
    "お兄ちゃん"); // お兄ちゃん