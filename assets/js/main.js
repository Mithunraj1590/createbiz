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


// fun fact

document.addEventListener("DOMContentLoaded", function () {
    const timers = document.querySelectorAll(".timer");

    timers.forEach(timer => {
        const targetNumber = parseInt(timer.getAttribute("data-to"));
        const duration = parseInt(timer.getAttribute("data-speed"));
        const increment = targetNumber / (duration / 10);

        let currentNumber = 0;
        const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(interval);
            }
            timer.textContent = Math.floor(currentNumber);
        }, 10);
    });
});


// footer
document.querySelectorAll('.menu-title').forEach((title) => {
    title.addEventListener('click', () => {
      const menuItem = title.parentElement; // Get the parent .menu-items div
  
      // If the clicked menu item is already open, close it
      if (menuItem.classList.contains('open')) {
        menuItem.classList.remove('open');
      } else {
        // Close all other open menu items
        document.querySelectorAll('.footer-menu .menu-items').forEach((item) => {
          item.classList.remove('open');
        });
  
        // Open the clicked menu item
        menuItem.classList.add('open');
      }
    });
  });
  
  const timeline = document.querySelector('.timeline');
  const timelineContainers = document.querySelectorAll('.timeline-container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        timeline.classList.add('show-line');
        timeline.classList.remove('hide-line');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });

  timelineContainers.forEach(container => {
    observer.observe(container);
  });

  window.addEventListener('scroll', () => {
    const timelineRect = timeline.getBoundingClientRect();
    const top = timelineRect.top;
    const bottom = timelineRect.bottom;

    if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
      timeline.classList.remove('show-line');
      timeline.classList.add('hide-line');
    } else {
      timeline.classList.add('show-line');
      timeline.classList.remove('hide-line');
    }
  });
