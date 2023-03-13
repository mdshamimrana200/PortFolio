// ========toggol navbar
var menuBtn= document.querySelector("#menuButon")
var navbar= document.querySelector("nav");

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("bx-x")
    navbar.classList.toggle("active")
    console.log("shamimrana is rungi")
})



var section = document.querySelectorAll("section");
var nablinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach(sec => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      nablinks.forEach(links => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add('active');
      });
    }
  });
  // sticy navbar
  var header = document.querySelector("header");
  
  header.classList.toggle('sticky', window.scrollY > 100);

     menuBtn.classList.remove("bx-x")
    navbar.classList.remove("active")
};


