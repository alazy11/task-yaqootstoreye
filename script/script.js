const menuBtn = document.querySelectorAll('.dropdown__btn');
const dropMenu = document.querySelector('#dropdown__menu-main');
const offers = document.querySelectorAll('.offer-slide-container__item');
const offerSlideBtnRight = document.querySelector('.offer-slide-btn.right');
const offerSlideBtnLeft = document.querySelector('.offer-slide-btn.left');

// getComputedStyle(offerSlideBtnLeft).
// offerSlideBtnLeft
const sectionSlideBtnRight = document.querySelectorAll('.shop-base-class-section__btn.right');
const sectionSlideBtnLeft = document.querySelectorAll('.shop-base-class-section__btn.left');

const offerSlideTime = 3000;
let offerSlideAnimation;


/**
 *  function to make slide animation
 * @param {offersElements} // the offer slide elements
*/
function animationSlideOffer(offersElements) {
    
    let activeElement = document.querySelector('.offer-slide-container__item.active');


    if(activeElement && !activeElement.isSameNode(offersElements[offersElements.length - 1])) {
        // activeElement.classList.add('hide');
        // activeElement.classList.add('-translate-x-100');
        // activeElement.nextElementSibling.classList.add('active');
        // activeElement.nextElementSibling.classList.add('translate-x-0');
        // setTimeout(() => {
        //     // activeElement.nextElementSibling.classList.remove('translate-x-0');
        //     activeElement.classList.remove('active','-translate-x-100');
        // }, 1000);

        activeElement.classList.add('hide');
        activeElement.nextElementSibling.classList.add('active');
        setTimeout(() => {
            activeElement.classList.remove('active','hide');
        }, 1000);

    } else {
        activeElement?.classList.add('hide');
        offersElements[0].classList.add('active');
        setTimeout(() => {
            activeElement?.classList.remove('active','hide');
        }, 1000);

        // activeElement.classList.add('-translate-x-100');
        // offersElements[0].classList.add('active');
        // offersElements[0].classList.add('translate-x-0');
        // setTimeout(() => {
        //     // offersElements[0].classList.remove('translate-x-0');
        //     activeElement.classList.remove('active','-translate-x-100');
        // }, 1000);

    }

}

function animationSlideSection(offersElements) {

    let activeElement ;

    offersElements.forEach(item=>{
        // console.log(item.classList)
        activeElement = item.classList.contains('active') ? item : activeElement ;
    })


    // console.log(activeElement)
    // console.log(offersElements[offersElements.length - 1])
    // console.log(activeElement.isSameNode(offersElements[offersElements.length - 1]))

    if(activeElement && !activeElement.isSameNode(offersElements[offersElements.length - 1])) {
        activeElement.classList.add('hide');
        activeElement.nextElementSibling.classList.add('active');
        setTimeout(() => {
            activeElement.classList.remove('active','hide');
        }, 1000);

    } else {
        activeElement?.classList.add('hide');
        offersElements[0].classList.add('active');
        setTimeout(() => {
            activeElement?.classList.remove('active','hide');
        }, 1000);
    }

}


function animationSlideSectionLeft(offersElements) {

    let activeElement ;

    offersElements.forEach(item=>{
        // console.log(item.classList)
        activeElement = item.classList.contains('active') ? item : activeElement ;
    })


    // activeElement.style.animationDirection = 'alternate-reverse';

    // console.log(activeElement)
    // console.log(offersElements[offersElements.length - 1])
    // console.log(activeElement.isSameNode(offersElements[offersElements.length - 1]))



    if(activeElement && !activeElement.isSameNode(offersElements[offersElements.length - 1])) {
        activeElement.classList.add('hide-revers');
        activeElement.nextElementSibling.classList.add('active','reverse');
        setTimeout(() => {
            activeElement.classList.remove('active','hide-revers','reverse');
        }, 1000);

    } else {
        activeElement?.classList.add('hide-revers');
        offersElements[0].classList.add('active','reverse');
        setTimeout(() => {
            activeElement?.classList.remove('active','hide-revers','reverse');
        }, 1000);
    }

}




function moveAnimationSlideOfferToRight(offersElements) {

    let activeElement = document.querySelector('.offer-slide-container__item.active');

    if(activeElement && !activeElement.isSameNode(offersElements[0])) {
        activeElement.classList.add('hide');
        activeElement.nextElementSibling.classList.add('active');
        setTimeout(() => {
            activeElement.classList.remove('active','hide');
        }, 1000);
    } else {
        activeElement.classList.add('hide');
        offersElements[0].classList.add('active');
        setTimeout(() => {
            activeElement.classList.remove('active','hide');
        }, 1000);
    }

}



menuBtn.forEach(item=> {
    item.addEventListener('click',(e)=>{
        dropMenu.classList.toggle('show');
    });
});


/**
 * function for start offer animation slide
 */
function setOfferAnimation() {
    offerSlideAnimation = setInterval(() => {
        animationSlideOffer(offers);
        console.log('aoaoa')
    }, offerSlideTime);
}
setOfferAnimation();


offerSlideBtnRight.addEventListener('click',e=>{
    clearInterval(offerSlideAnimation);
    animationSlideOffer(offers);
    setOfferAnimation()
});

sectionSlideBtnRight.forEach(item=>{
    item.addEventListener('click',e=>{
        // clearInterval(offerSlideAnimation);
        let offers = e.currentTarget.parentElement.querySelectorAll('.shop-base-class-section__class-group');

        console.log(offers.length)

        if(offers.length > 1)
            animationSlideSection(offers);

        // setOfferAnimation()
    });
})

sectionSlideBtnLeft.forEach(item=>{
    item.addEventListener('click',e=>{
        // clearInterval(offerSlideAnimation);
        let offers = e.currentTarget.parentElement.querySelectorAll('.shop-base-class-section__class-group');

        console.log(offers.length)

        if(offers.length > 1)
            animationSlideSectionLeft(offers);
        // setOfferAnimation()
    });
})


