
const nav = ["HOME", "ABOUT US", "COFFEE BASICS", "SHOPS", "CONTACT"];
const links =["index.html", "about.html", "coffeebasics.html", "shops.html", "contact.html"];
let navl = nav.length;
let navtxt = "<ul>";

for(let i=0; i<navl; i++){
    navtxt += '<li><a href='+ links[i] +'>' + nav[i] + "</a></li>";
}
navtxt += "</ul>";
document.getElementById("nav").innerHTML = navtxt;

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
