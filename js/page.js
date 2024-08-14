$(document).ready(function () {
    // 이미지 로드 확인
    $("#main-section").imagesLoaded(function () {
        // jQuery Masonry 플러그인 적용
        $("#main-section").masonry({
            itemSelector: ".paper",
            columnWidth: 230,
            isAnimated: true,
        });
    });

    // 이미지 랜덤 생성
    $(".paper-holder > a > img").each(function () {
        $(this)
            .attr({
                src:
                    "http://placedog.net/" +
                    Math.floor(Math.random() * 50 + 550),
            })
            .css({
                width: 190,
                // height의 길이는 150~250 사이의 랜덤값
                height: Math.floor(Math.random() * 100 + 150),
            });
    });
    $(".paper-content > a > img").each(function () {
        $(this)
            .attr({
                src:
                    "http://placedog.net/" +
                    Math.floor(Math.random() * 20 + 60),
            })
            .css({
                width: 30,
                height: 30,
            });
    });
});
