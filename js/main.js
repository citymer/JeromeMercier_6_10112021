const btnvisible = document.querySelector('.btnVisible');

btnvisible.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})



    window.addEventListener("scroll", () => {
        let y = window.scrollY;

        if (y >= 80) {
            btnvisible.style.display = "block";
        } else {
            btnvisible.style.display = "none";
        }
    });


