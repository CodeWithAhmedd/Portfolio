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
  
  // Scroll to the top when the button is clicked
  document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };