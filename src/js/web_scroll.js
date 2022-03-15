const web_scroll = document.querySelector('.web_scroll');

const details= document.querySelectorAll('details');

web_scroll.setAttribute('max', document.body.clientHeight-window.innerHeight);
document.addEventListener('scroll', () =>{
    // web_scroll.setAttribute('value', document.documentElement.scrollTop); 
    web_scroll.setAttribute('value', window.pageYOffset); 
});

document.addEventListener('load', ()=>{
    console.log('load');
    web_scroll.setAttribute('max', document.body.clientHeight-window.innerHeight);
});
for(var i=0; i<details.length;i++){
    details[i].addEventListener('toggle', ()=>{
        web_scroll.setAttribute('max', document.body.clientHeight-window.innerHeight);
    });
}
