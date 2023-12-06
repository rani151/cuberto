//  loading animation for h1-in headings
 function loadingAnimation(){
    gsap.from(".headings h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
        
    })
 }
 loadingAnimation();
//  close

 function maindivAnimation() {
   var maindiv = document.querySelector(".main");
   var crsrbtn = document.querySelector("#cursor");
     maindiv.addEventListener("mouseenter", function () {
     gsap.to(crsrbtn, {
       scale: 1,
       opacity: 1,
     });
   });
    
   document.addEventListener("mousemove", function (dets) {
     gsap.to(crsrbtn, {
       left: dets.x -0,
       top: dets.y -40,
     });
   });
 
    
 }
 maindivAnimation();
//  end
var nav = document.querySelector(".nav");
var crsrbtn = document.querySelector("#cursor");
 nav.addEventListener("mouseenter", function () {
  gsap.to(crsrbtn, {
    padding :'20px 20px ',
    // duration:0.5,
    // backgroundColor:'pink',
    // color:'white',
  });
});

nav.addEventListener("mouseleave", function () {
  gsap.to(crsrbtn, {
    padding :'6px 6px ',
    
  });
});
// f-img

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: ".fimg",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});
 