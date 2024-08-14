$(document).ready(function () {
    function showLightBox() {
        // 라이트박스를 보이게 함
        $("#darken-background").show();
        $("#darken-background").css("top", $(window).scrollTop());
        // 스크롤 제한
        $("body").css("overflow", "hidden");
    }

    function hideLightBox() {
        // 라이트박스를 감춤
        $("#darken-background").hide();
        // 스크롤 제한 해제
        $("body").css("overflow", "");
    }

    // 라이트박스 제거 이벤트
    $("#darken-background").click(function () {
        hideLightBox();
    });

    // 클릭 이벤트 연결
    $(".paper").click(function () {
        showLightBox();
    });

    // 라이트박스 제거 이벤트 보조
    $("#lightbox").click(function (event) {
        event.stopPropagation();
    });
});
