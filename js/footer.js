document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu a");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove("active"));
  
        // Add 'active' class to the clicked link
        event.currentTarget.classList.add("active");
      });
    });
  });
  