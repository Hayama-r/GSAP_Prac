// 読み込み後アニメーション
window.addEventListener("load", function () {
    const LoadMask = document.getElementById('load__mask');

    setTimeout(function () {
        LoadMask.classList.add('reveal');
    }, 600);


    const JsLoader = document.getElementById('js__loader');
    const LoaderImg05 = document.querySelectorAll('.loader__img05');
    const body = document.querySelector('body');

    setTimeout(function () {
        body.classList.remove('over-hidden');
    }, 2000);


    const tl = gsap.timeline();
    const jsFvSpan01 = document.querySelectorAll('.fv-span-01');
    const jsFvSpan02 = document.querySelectorAll('.fv-span-02');
    const jsFvSpan03 = document.querySelectorAll('.fv-span-03');
    const jsHeader = document.getElementById('js-header');

    tl.to(
        jsFvSpan01,
        {
            y: 0,
            opacity: 1,
            ease: Power4.out,
        },
        "-=.5"
    )

        .to(
            jsFvSpan02,
            {
                y: 0,
                opacity: 1,
                ease: Power4.out,
            },
            "-=0.4"
        )

        .to(
            jsFvSpan03,
            {
                y: 0,
                opacity: 1,
                ease: Power4.out,
            },
            "-=0.4"
        )

        .to(
            jsHeader,
            {
                y: 0,
                opacity: 1,
                ease: Circ.out,
            },
            "+=.2"
        )

});




// スクロールに合わせて画像を表示させる
gsap.registerPlugin(ScrollTrigger);

// prjのタイトル
const jsFadeUpTitles = document.querySelectorAll('.fade-up-ttl');

jsFadeUpTitles.forEach((jsFadeUpTitle, index) => {
    gsap.to(
        jsFadeUpTitle,
        {
            scrollTrigger: {
                trigger: jsFadeUpTitle,
                start: 'top-=100 bottom',
                end: 'top top',
                once: true,
                /* markers: true, */
                onEnter: () => jsFadeUpTitle.classList.add("js-fadeUp-ttl"),
            }
        });
});

// セクション間の横線
const jsBorders = document.querySelectorAll('.border');

jsBorders.forEach((jsBorder, index) => {
    gsap.to(
        jsBorder,
        {
            scrollTrigger: {
                trigger: jsBorder,
                start: 'top 90%',
                end: 'top top',
                once: true,
                onEnter: () => jsBorder.classList.add("jsBorder"),
            }
        });
});

const jsPinning = document.querySelectorAll('.pin')

jsPinning.forEach((jsPinning, index) => {
    gsap.to(
        jsPinning,
        {
            scrollTrigger: {
                trigger: ".prj__inner",
                start: "top top",
                end: "bottom bottom",
                pin: ".pin",
                /* markers: true */
            }
        }

    )
});


const jsCv1 = document.querySelectorAll('.cv1');

jsCv1.forEach((jsCv, index) => {
    gsap.to(
        jsCv1,
        {
            scrollTrigger: {
                trigger: jsCv1,
                start: 'top top',
                end: 'bottom bottom',
                onEnter:changeVid1,
                onLeaveBack:changeVid0,
                markers: true
            }
        });
});

const jsCv2 = document.querySelectorAll('.cv2');

jsCv2.forEach((jsCv, index) => {
    gsap.to(
        jsCv2,
        {
            scrollTrigger: {
                trigger: jsCv2,
                start: 'top',
                onEnter:changeVid2,
                onLeaveBack:changeVid1,
                markers: true
            }
        });
});


const myV = document.getElementById("mv");

function changeVid0(){
    myV.src = "video/control4_x4.mp4" 
}

function changeVid1(){
    myV.src = "video/snag-0005nijo_almost_x4.mp4"
}

function changeVid2(){
    myV.src = "video/20030913DV-touch2_x4.mp4"
}