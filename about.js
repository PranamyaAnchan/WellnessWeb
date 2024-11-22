document.querySelector('a[href="#aboutSection"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    const target = document.getElementById("aboutSection");

    target.scrollIntoView({
        behavior: "smooth",
        block: "start" 
    });
});
