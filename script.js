var a=gsap.timeline();
a.from('#body1 h1',{
          y:-20,
          opacity:0,
          duration:1.3,
          delay:1
})
a.from('#page2 h3',{
          y:-20,
          opacity:0,
          duration:1.2,
          delay:0.5,
          stagger:0.7
})
var darkmod=document.getElementById("dark");
darkmod.addEventListener("click",function(){
          document.body.classList.toggle("dark");
          document.body.classList.toggle("light");
})
gsap.from(".home h2",{
          y:-30,
          opacity:0,
          duration:0.8,
          delay:2
})
gsap.from(".home h1",{
          y:-25,
          opacity:0,
          duration:0.6,
          delay:3
})
gsap.from(".home button",{
          y:-15,
          opacity:0,
          duration:0.4,
          delay:4
})
gsap.from(".box",{
          y:-30,
          opacity:0,
          duration:0.8,
          delay:2,
          stagger:1
})

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
anchor.addEventListener("click",function(e){
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior:'smooth'
          });

});
});