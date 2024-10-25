document.body.innerHTML += "<a href='#' id='back-to-top' title=''></a>";
const getBTTElm = document.getElementById('back-to-top');
document.addEventListener('scroll', ev => {
    if (window.scrollY > 150) {
        getBTTElm.classList.add('visible');
    } else {
        getBTTElm.classList.remove('visible');
    }
});
getBTTElm.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})








// menu function

const getBtn = document.querySelector('.mob-btn');
// console.log(getBtn);
getBtn.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');
})


const getDropDown = document.getElementsByClassName('main-nav');
for ( div of getDropDown){
    var selectLi = div.getElementsByTagName('li');
    for ( li of selectLi){
       if (li.contains(li.querySelector('ul'))) {
        li.classList.add('submenu');
        li.innerHTML += "<i></i>";
        }
    }
}

const getDropDownClick = document.querySelectorAll('.main-nav i');
getDropDownClick.forEach((item) => {
    item.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('open');
    })
})


//animation
// just "anim" in your element
window.addEventListener("load", () => {
    function isInViewport(el, gap) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let height = el.offsetHeight;
        console.log(el.offsetParent);
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (
            (window.pageYOffset + window.innerHeight - gap) >= (top) &&
            (window.pageYOffset) <= (height + top)
        );
    }
    let getElem = document.querySelectorAll('.anim');
    //please change as per the design
    const breakPoints = {
        desktop: 250,
        laptop: 80,
        tab: 50,
        mobile: 30
    };
    let targetGap;
    window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
        window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
        window.innerWidth >= 768 ? targetGap = breakPoints.tab :
        targetGap = breakPoints.mobile;

    function anim() {
        getElem.forEach(element => {
            isInViewport(element, targetGap) ? element.classList.add("visible") : null;
        })
    }
    getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
    getElem.length > 0 ? anim() : null;
}, false);





