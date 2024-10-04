const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
document.querySelector("")
// gsap.registerPlugin(ScrollTrigger)
gsap.to("img", { x: 100, duration: 2 });
document.querySelectorAll('.elem').forEach(elem => {
  let image = elem.querySelector('img')
  let tl = gsap.timeline()

  let xTransform = gsap.utils.random(-100, 100);

  tl
    .set(image, {
      transformOrigin: `${xTransform <0 ? 0 :'100%'}`,
    },"start")
    .to(image, {
        scale:0,
        ease:"none",
        scrollTrigger:{
          trigger:elem,
          durartion:3,
          start:"top top",
          end:"bottom top",
          scrub:true
        }
    },"start")
})
