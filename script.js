// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});

// Navbar Shadow

window.addEventListener('scroll',()=>{

const header =
document.querySelector('header');

if(!header) return;

if(window.scrollY > 50){

header.style.boxShadow =
'0 5px 20px rgba(0,0,0,.1)';

}else{

header.style.boxShadow =
'none';

}

});

// Counter Animation

const counters =
document.querySelectorAll('.metric h3');

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
parseInt(
counter.innerText.replace(/\D/g,'')
);

let count = 0;

const update = ()=>{

count += Math.ceil(target/100);

if(count < target){

counter.innerText =
count + '+';

requestAnimationFrame(update);

}else{

counter.innerText =
target + '+';

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

// Scroll Progress Bar

const progress =
document.createElement('div');

progress.style.position='fixed';
progress.style.top='0';
progress.style.left='0';
progress.style.height='4px';
progress.style.background='#222';
progress.style.width='0';
progress.style.zIndex='99999';

document.body.appendChild(progress);

window.addEventListener('scroll',()=>{

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(winScroll/height)*100;

progress.style.width =
scrolled + '%';

});

// Reveal Animation

const revealElements =
document.querySelectorAll(
'.agent,.analytics-card,.metric,.price-card,.testimonial-grid div'
);

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';

}

});

});

revealElements.forEach(el=>{

el.style.opacity='0';
el.style.transform='translateY(40px)';
el.style.transition='0.8s ease';

revealObserver.observe(el);

});