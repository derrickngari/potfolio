// Toggle sidebar
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");

  const icon = toggleBtn.querySelector("i");
  if (sidebar.classList.contains("expanded")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Scroll animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all sections
    const sections = document.querySelectorAll('section');
  
    // Function to check if a section is in the viewport
    function checkVisibility() {
      sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
  
        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }
  
    // Call function initially and on scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
  });
  