// game_link.js
document.addEventListener('DOMContentLoaded', function() {  // Wait for the DOM to be fully loaded

    const gameLinks = document.querySelectorAll('.game-link'); // Select all elements with the class "game-link"
  
    gameLinks.forEach(link => {   // Loop through each of the links
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        const targetURL = this.getAttribute('href'); // Get the URL from the href attribute
        var win = window.open(); // Open a blank window
        if (win) { //check if popup is blocked
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = targetURL;
          win.document.body.appendChild(iframe);
        } else {
          alert("Popup is blocked!");
        }
  
        this.style.background = '#00000'; // Change the clicked link's appearance
        this.innerHTML = "Page Opened!";
  
      });
    });
  });