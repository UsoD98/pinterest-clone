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
});
