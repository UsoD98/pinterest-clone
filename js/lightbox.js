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
        // 클릭된 .paper 자손의 .paper-content 요소의 자손의 a 태그의 자손의 img 요소의 src 속성값을 가져옴
        let userImgSrc = $(this).find(".paper-content a img").attr("src");
        // #lightbox의 .user-information의 a 태그의 img 요소의 src 속성값을 userImgSrc로 설정
        $("#lightbox .user-information a img")
            .attr("src", userImgSrc)
            .css({ width: 70, height: 70 });

        let userContent = $(this).find(".paper-description").html();
        $("#lightbox .user-information-text p").html(userContent);

        let mainImgSrc = $(this).find(".paper-holder a img").attr("src");
        $("#lightbox > img")
            .attr("src", mainImgSrc)
            .css({ width: 600, height: 750 });

        showLightBox();
    });

    // 라이트박스 제거 이벤트 보조
    $("#lightbox").click(function (event) {
        event.stopPropagation();
    });
});
