///la date de footer///
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/// pour scroll de les photo header///
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})

let span=document.querySelector( ".up")
        window.onscroll=function(){
          // console.log(this.scrollY);
          if (this.scrollY >=1000){
            span.classList.add("show")
          }else {
            span.classList.remove("show")

          }
        }
       span.onclick = function(){
        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
       }



$(document).ready(function () {
  $("#sendButton").click(function () {
    $("#contactContent").html(`
            <div class="container" id="message" >
                <div class="heading_container ">
                </div>
                <div class="row">
                    <div class="row justify-content-center">
                        <img src="images/message_envoyé.png" alt="Nouvelle image" style="width: 50%;">
                    </div>
                </div>
            </div>
        `);
  });
});


$(document).ready(function () {
  function addToCart(name, price) {
    const cart = $("#cart-items");
    const item = $("<li>").text(`${name} - ${price} MAD`);
    const removeButton = $("<button>").text("Remove").click(function () {
      $(this).parent().remove();
    });
    item.append(removeButton);
    cart.append(item);
  }

  const products = [
    { name: "Huille d'argane", price: "200MAD", imgSrc: "images/p1.png", desc: " pure et 100% naturelle" },
    { name: "Huille de lédon", price: "300MAD", imgSrc: "images/p2.png", desc: " pure et 100% naturelle" },
    { name: "Huille de Encens", price: "110MAD", imgSrc: "images/p4.png", desc: " pure et 100% naturelle" },
    { name: "Huille de Rhodo", price: "45MAD", imgSrc: "images/p5.png", desc: " pure et 100% naturelle" },
    { name: "Huille aloevera", price: "95MAD", imgSrc: "images/img77.jpg", desc: " pure et 100% naturelle" },
    { name: "Huille Avocat", price: "70MAD", imgSrc: "images/img60.jpg", desc: " pure et 100% naturelle" },
    { name: "Huille chanvre", price: "400MAD", imgSrc: "images/img82.jpg", desc: " pure et 100% naturelle" },
    { name: "Huille néroli", price: "450MAD", imgSrc: "images/img50.jpg", desc: " pure et 100% naturelle" }
  ];

  $.each(products, function (index, product) {
    const productItem = $("<div>").addClass("col-sm-6 col-md-4 col-lg-3");
    productItem.html(`
      <div class="box">
        <div class="img-box">
          <img src="${product.imgSrc}" alt="${product.name}">
        </div>
        <div class="detail-box">
          <h6>${product.name}</h6>
          <h6>Price <span>${product.price}</span></h6>
        </div>
        <div class="description">
          <p>${product.name},${product.desc} </p>
        </div>
        <div class="new">
          <span>New</span>
        </div>
        
      </div>
    `);

    productItem.find(".add-to-cart").click(function (e) {
      e.preventDefault();
      addToCart(product.name, product.price,);
    });

    $("#product-list").append(productItem);
  });

  $("#shopping-cart-toggle").click(function () {
    $("#shopping-cart").toggle();
  });

  // Clear cart
  $("#clear-cart").click(function () {
    $("#cart-items").empty();
  });
});


ScrollReveal().reveal('.gift_section .detail-box', {
  delay: 100,
  duration: 2000,
  origin: 'left',
  distance: '80px'

});
ScrollReveal().reveal('.gift_section .detail-box');

ScrollReveal().reveal('.gift_section .img-box', {
  delay: 100,
  duration: 2000,
  origin: 'right',
  distance: '80px'

});
ScrollReveal().reveal('.gift_section .img-box');



// document.querySelectorAll('.img-box').forEach(image =>{
//   image.onclick = () =>{
//     document.querySelector('.popup-image').style.display = 'block';
//     document.querySelector('.popup-image img').src = image.getAttribute('src');
//   }
// });

// document.querySelector('.popup-image span').onclick = () =>{
//   document.querySelector('.popup-image').style.display = 'none';
// }



