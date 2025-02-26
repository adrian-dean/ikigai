// game_link.js
document.addEventListener('DOMContentLoaded', function() {

  const gameLinks = document.querySelectorAll('.game-link');

  gameLinks.forEach(link => {
    const originalHTML = link.innerHTML; // Store the original HTML content

    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetURL = this.getAttribute('href');
      var win = window.open();
      if (win) {
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

      // Remove the "Page Opened!" change and restore original appearance:
      //this.style.background = '#00000'; // Remove this line
      link.innerHTML = originalHTML; // Restore original HTML content
    });
  });
});
