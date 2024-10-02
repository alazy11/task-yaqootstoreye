const menuBtn = document.querySelectorAll('.dropdown__btn');
const dropMenu = document.querySelector('#dropdown__menu-main');
const offers = document.querySelectorAll('.offer-slide-container__item');
const offerSlideBtnRight = document.querySelector('.offer-slide-btn.right');
const offerSlideBtnLeft = document.querySelector('.offer-slide-btn.left');
const dropdownBtnMobile = document.querySelector('#dropdown__btn-mobile');
const mainMobileNav = document.querySelector('#main-mobile-nav');
const skinMobileNav = document.querySelector('#skin-menu');
const mobileMainNavCloseBtn = document.querySelectorAll('.mobile-main-nav__close-btn');
const skinShowBtn = document.querySelector('#skin-show-btn');
const returnBtn = document.querySelectorAll('.return-btn');


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

// ? /////////////////////////////////////////////////////////

function showMenu(menu) {
    mainMobileNav.classList.remove('show');
    menu.style.visibility = "visible";
    menu.classList.add('show');
    setTimeout(()=>{
        mainMobileNav.style.visibility = "hidden";
    },500)
}


function returnMenu(hideMenu,menu) {
    hideMenu.classList.remove('show');
    menu.style.visibility = "visible";
    menu.classList.add('show');
    setTimeout(()=>{
        hideMenu.style.visibility = "hidden";
    },500)
}


dropdownBtnMobile.onclick = ()=> {
    mainMobileNav.style.visibility = "visible";
    mainMobileNav.classList.add('show');
}
// dropdownBtnMobile.closest
mobileMainNavCloseBtn.forEach(item=>{
    item.addEventListener('click',e=>{
        e.currentTarget.closest('.offcanvas').classList.remove('show');

        setTimeout(()=>{
            e.currentTarget.closest('.offcanvas').style.visibility ='hidden';
        },500)
    })
})
mobileMainNavCloseBtn.onclick = ()=> {
    mainMobileNav.style.visibility = "visible";
    mainMobileNav.classList.add('show');
}

skinShowBtn.onclick = ()=> {
    console.log('jhakjsdf')
    showMenu(skinMobileNav);
}

returnBtn.forEach(item=>{
    item.addEventListener('click',(e)=>{
        // hideMenu 

        let hideMenu = e.currentTarget.closest('.offcanvas');
        console.log('hideMenu',hideMenu)
        let level = hideMenu.dataset.level;
        let menu = document.getElementById(level);

        // console.log('hideMenu',hideMenu)
        console.log('hideMenu',level)

        console.log('menu',menu)

        returnMenu(hideMenu,menu)
    })
})