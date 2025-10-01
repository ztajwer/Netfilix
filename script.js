// Slider
const slider = document.getElementById('slider');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');

rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

// Faqs
const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });


// modal 
    function openModal() {
      document.getElementById("myModal").style.display = "flex";
    }
    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }

    // Close when clicking outside modal
    window.onclick = function(event) {
      let modal = document.getElementById("myModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }