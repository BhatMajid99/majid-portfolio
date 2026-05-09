const form = document.getElementById("contactForm");
const navLinks = document.querySelectorAll("#navLinks li");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const msg = document.getElementById("msg").value;

  if (name === "" || msg === "") {
    alert("Please fill all fields");
  } else {
    alert("Message submitted successfully!");

    form.reset();
  }
});

navLinks.forEach((li) => {
  li.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach((item) => item.classList.remove("active"));

    // add active to clicked one
    li.classList.add("active");
  });
});
