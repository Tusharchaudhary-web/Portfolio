let words = new Typed(".role", {
  strings: ["Front-End Developer",
    "Back-End Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Web Developer",
    "JS Developer",
    "React Developer",
    "Coder"],
  typeSpeed: 50,
  backSpeed: 60,
  backDelay: 1500,
  loop: true

})



document.querySelector(".hamburger").addEventListener("click", () => {
  const navItems = document.querySelector(".nav-items");
  const container = document.querySelector(".container");

  let home = document.querySelector('#home');
  let skill = document.querySelector('#skill');
  let about = document.querySelector('#about');
  let contact = document.querySelector('#contact');
    let project = document.querySelector('#project');

  navItems.classList.toggle("active");

  if (navItems.classList.contains("active")) {
    container.style.marginTop = "320px";
    home.style.scrollMarginTop = '320px';
    skill.style.scrollMarginTop = '320px';
    about.style.scrollMarginTop = '320px';
    contact.style.scrollMarginTop = '320px';
    project.style.scrollMarginTop = '320px';
  } else {
    container.style.marginTop = "110px";
    home.style.scrollMarginTop = '110px';
    skill.style.scrollMarginTop = '110px';
    about.style.scrollMarginTop = '110px';
    contact.style.scrollMarginTop = '110px';
    project.style.scrollMarginTop = '110px';
  }
});




// -------------------------------

let hireme = document.querySelector('.hireme');
let leftpanel = document.querySelector('.leftpanel');
let closebtn = document.querySelector('.closebtn');

hireme.addEventListener('click', () => {
  leftpanel.classList.add('open');
})

closebtn.addEventListener('click', () => {
  leftpanel.classList.remove('open');
})

