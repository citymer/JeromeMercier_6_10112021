const btnvisible = document.querySelector('.btnVisible');

btnvisible.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})

function appearbutton() {
    window.addEventListener('scroll', () => {
    const main = document.querySelector('main').getBoundingClientRect();
    if (main.top <= 60) {
        btnvisible.style.display = "block";
        console.log('yess');
    }if (main.top > 60) {
        btnvisible.style.display = "none";
        console.log('none');
    }
    
 })
}
appearbutton();