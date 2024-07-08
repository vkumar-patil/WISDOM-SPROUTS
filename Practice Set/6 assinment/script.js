const Logo = document.querySelectorAll(".Sociallogos"); // आपके तत्व का सेलेक्टर यहां डालें
Logo.forEach((Logo) => {
  Logo.addEventListener("mouseover", () => {
    Logo.style.boxShadow = "1px 1px  5px red";
    Logo.style.borderColor = "red 5px";
  });
  Logo.addEventListener("mouseleave", () => {
    Logo.style.boxShadow = "none";
  });
});
