document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(
    ".scrollcontainer a, .navbar a"
  );

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more');
  const fullText = document.querySelector('.full-text');
  
  readMoreBtn.addEventListener('click', function() {
      readMoreBtn.style.display = 'none'; 
      fullText.style.display = 'block';   
  });
});

