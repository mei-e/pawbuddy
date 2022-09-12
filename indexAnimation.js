//animation for landing page 

gsap.to("#hero .text-reveal",
{
    y:'0%',
    duration:1,
    stagger:0.2,
    ease:"back.out(0.75)",
    scrollTrigger:"#hero h1"
})

gsap.to("#hero .img-container img",
{
    y:'0%',
    duration:2,
    ease:"power1.out",
    delay:1
})

gsap.to("#about .text-reveal",
{
    y:'0%',
    duration:1,
    stagger:0.2,
    ease:"back.out(0.75)",
    scrollTrigger:"#about h1"
})

gsap.to("#asset",
{
    yPercent: -5,
    rotation: 90,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#about",
        scrub: 1
    }
})

gsap.to("#services .text-reveal",
{
    y:'0%',
    duration:1,
    stagger:0.2,
    ease:"back.out(0.75)",
    scrollTrigger:"#services h1"
})

gsap.to("#adopt .text-reveal",
{
    y:'0%',
    duration:1,
    ease:"back.out(0.75)",
    scrollTrigger:"#adopt h2"
})

gsap.to("#animal-rescue .text-reveal",
{
    y:'0%',
    duration:1,
    ease:"back.out(0.75)",
    scrollTrigger:"#animal-rescue h2"
})

gsap.to("#vet .text-reveal",
{
    y:'0%',
    duration:1,
    ease:"back.out(0.75)",
    scrollTrigger:"#vet h2"
})

gsap.to("footer .text-reveal",
{
    y:'0%',
    duration:1,
    ease:"back.out(0.75)",
    scrollTrigger:"footer h1"
})