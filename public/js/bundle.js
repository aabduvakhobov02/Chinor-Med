/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
$(document).ready(function () {
  $(".services__inner .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
$(document).ready(function () {
  $(".partners__inner .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});
$(document).ready(function () {
  $(".team__inner .owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});
$(function () {
  $(".user-nav__link").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
$(function () {
  $(".bottom__tabs .bottom__tab").on("click", function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
  });
});
let list = document.querySelectorAll(".service__navigation-list");

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;

    while (j < list.length) {
      list[j++].className = "service__navigation-list";
    }

    list[i].className = "service__navigation-list active";
  };
} // $(function () {
//   $(".service__navigation ul li").on("click", function () {
//     $("html, body").animate(
//       {
//         scrollTop: $($.attr(this, "href")).offset().top,
//       },
//       100
//     );
//   });
// });
//language dropdown


const firstLang = document.querySelectorAll(".preheader__lang-first");
const langDrop = document.querySelectorAll(".preheader__lang-list");
firstLang.forEach(lang => {
  lang.addEventListener("click", e => {
    e.preventDefault();
    langDrop.forEach(drop => {
      drop.classList.toggle("modal__hidden");
    });
  });
}); //Modal

const modal = document.querySelector(".modal");

const toggleModal = () => {
  modal.classList.toggle("modal__hidden");
};

const closeModal = () => {
  toggleModal();
  document.body.style.overflow = "";
};

document.querySelector(".consultation__btn").addEventListener("click", () => {
  toggleModal();
  document.body.style.overflow = "hidden";
});
document.querySelector(".consultation__form").addEventListener("submit", e => {
  e.preventDefault();
  toggleModal();
});
document.querySelector(".modal__close-bar span").addEventListener("click", () => {
  closeModal();
});
modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeModal();
  }
});
document.addEventListener("keydown", e => {
  if (e.code == "Escape" && !modal.classList.contains("modal__hidden")) {
    closeModal();
  }
}); //Counter

const counters = document.querySelectorAll(".exp__item-number");
const speed = 1000;
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
}); // Services Slider

const psLink = document.querySelector('[href="#ps"]');
const gsLink = document.querySelector('[href="#gs"]');
const entLink = document.querySelector('[href="#ent"]');
const uziLink = document.querySelector('[href="#uzi"]');
const content = document.querySelector(".service__content");
let contentu = content.innerHTML;
contentu = `<div class="service__item">
<span class="service__span" id="ps"></span>
<h2 class="service__item-title h2">Pediatric Plastic Surgery</h2>
<img class="service__item-img" src="./images/ps.jpg" alt="Plastic Pediatric Surgery">
<p class="service__text">Pediatric plastic surgery is plastic surgery performed on children. Its procedures are most often conducted for reconstructive or cosmetic purposes. In children, this line is often blurred, as many congenital deformities impair physical function as well as aesthetics.

  Surgery is defined as treating injuries or conditions with operative instrumental treatment. Plastic is a derivative of the Greek word plastikos, which means "to build up" or "to take form". This is a logical prefix, as parts of the body are remade or reformed during most reconstructive and cosmetic surgical procedures. Children make up roughly 3% of all plastic surgery procedures, and the majority of these procedures correct a congenital deformity.[1]
  
  Reconstructive plastic surgery is performed on abnormal structures of the body that are the result of congenital defects, developmental abnormalities, trauma, infection, tumors or disease. While reconstructive surgery is most often undertaken to regain normal motor function or prevent current or future health problems, aesthetics is also considered by the surgical team.[2]
  
  Cosmetic plastic surgery is defined as a surgical procedure undertaken to improve the physical appearance and self-esteem of a patient. These procedures are usually elective.</p>    
</div>`;
const arr = [`<div class="service__item">
<span class="service__span" id="ps"></span>
<h2 class="service__item-title h2">Pediatric Plastic Surgery</h2>
<img class="service__item-img" src="./images/ps.jpg" alt="Plastic Pediatric Surgery">
<p class="service__text">Pediatric plastic surgery is plastic surgery performed on children. Its procedures are most often conducted for reconstructive or cosmetic purposes. In children, this line is often blurred, as many congenital deformities impair physical function as well as aesthetics.

  Surgery is defined as treating injuries or conditions with operative instrumental treatment. Plastic is a derivative of the Greek word plastikos, which means "to build up" or "to take form". This is a logical prefix, as parts of the body are remade or reformed during most reconstructive and cosmetic surgical procedures. Children make up roughly 3% of all plastic surgery procedures, and the majority of these procedures correct a congenital deformity.[1]
  
  Reconstructive plastic surgery is performed on abnormal structures of the body that are the result of congenital defects, developmental abnormalities, trauma, infection, tumors or disease. While reconstructive surgery is most often undertaken to regain normal motor function or prevent current or future health problems, aesthetics is also considered by the surgical team.[2]
  
  Cosmetic plastic surgery is defined as a surgical procedure undertaken to improve the physical appearance and self-esteem of a patient. These procedures are usually elective.</p>    
</div>`, `<div class="service__item">
                      <span class="service__span" id="gs"></span>
                      <h2 class="service__item-title h2" >General Surgery</h2>
                      <p class="service__text">General surgery is a surgical specialty that focuses on abdominal contents including esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland (depending on local referral patterns). They also deal with diseases involving the skin, breast, soft tissue, trauma, Peripheral artery disease and hernias and perform endoscopic procedures such as gastroscopy and colonoscopy.</p>
</div>`, ` <div class="service__item">
<span class="service__span" id="ent"></span>
<h2 class="service__item-title h2" >Otolaryngology (ENT)</h2>
<p class="service__text">Otorhinolaryngology is a surgical subspecialty within medicine that deals with the surgical and medical management of conditions of the head and neck. Doctors who specialize in this area are called otorhinolaryngologists, otolaryngologists, head and neck surgeons, or ENT surgeons or physicians.</p> 
</div>`, `<div class="service__item">
    <span class="service__span"id="uzi"></span>
    <h2 class="service__item-title h2" >Ultrasound Procedure</h2>
</div>`];

function navigate(link, i, arr) {
  link.addEventListener("click", e => {
    e.preventDefault();
    content.innerHTML = "";
    content.innerHTML = arr[i];
  });
}

navigate(psLink, 0, arr);
navigate(gsLink, 1, arr);
navigate(entLink, 2, arr);
navigate(uziLink, 3, arr); // Sending appointment

const forms = document.querySelectorAll("form"),
      statusText = forms.querySelector(".consultation__form-btn");
forms.forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../appointment.php", true);

    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = xhr.response;
        console.log(response);
      }
    };

    let formData = new FormData();
    xhr.send(formData);
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map