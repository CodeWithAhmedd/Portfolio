// document.getElementById('nav-toggle').addEventListener('click', function() {
//     var navList = document.getElementById('nav-list');
//     navList.classList.toggle('active');
//   });
// Show the button when the user scrolls down 100px
window.onscroll = function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  // Show the "Back to Top" button when the user scrolls down 100px
window.onscroll = function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top when the "Back to Top" button is clicked
document.getElementById("back-to-top").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// Trigger slide-in animation when the page loads
window.addEventListener("load", function () {
  document.body.style.opacity = "1"; // Ensure the body is visible after the animation
});
// Add smooth scrolling to all navbar links
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the target
    }
  });
});