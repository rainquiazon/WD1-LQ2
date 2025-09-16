// Dropdown toggle
document.getElementById("settingsBtn").addEventListener("click", function() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.addEventListener("click", function(e) {
  if (!e.target.matches("#settingsBtn")) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});
