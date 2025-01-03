const carouselTrack = document.querySelector('.carousel-track');
let currentIndex = 0;

let startX = 0;

let isDragging = false;


function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
}

carouselTrack.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
});

carouselTrack.addEventListener ('mouseup' , (event) => {
   if  (!isDragging) return;
   const endX = event.clientX;
   const deltaX = startX - endX;

   if (deltaX > 50) {
    currentIndex=Math.min(currentIndex + 1, 3);
} else if (deltaX < -50) {
    currentIndex = Math.max(currentIndex - 1, 0);
}

 updateCarousel();
isDragging = false;

});

carouselTrack.addEventListener('mousemove', (event) => {
    if (isDragging)
        event.preventDefault();
});


carouselTrack.addEventListener('mouseleave', () => {
    isDragging = false;
})

// for navbar

// const toggleButton = document.querySelector('.menu-toggle');
//     const navMenu = document.querySelector('.nav');

//     toggleButton.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//         toggleButton.classList.toggle('active');
//     });


const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.sidebar');

    function showSidebar() {
        navMenu.classList.add('active');  // Add 'active' class to show the sidebar
    }

    function hideSidebar() {
        navMenu.classList.remove('active');  // Remove 'active' class to hide the sidebar
    }

    // You can also toggle it using the same button
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });