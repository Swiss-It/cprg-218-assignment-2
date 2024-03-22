window.onload = () => {
    document.getElementById('currentYear').innerText = new Date().getFullYear();
};
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        const accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
      });
    });
  });