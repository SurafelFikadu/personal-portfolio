function getYear() {
  const year = document.getElementById("year");
  const yearNow = new Date().getFullYear();
  year.textContent = yearNow;
}

getYear();


function openMenu() {
  const ul = document.getElementById("ul");
  ul.style.right = 0;
}

function closeMenu() {
  const ul = document.getElementById("ul");
  ul.style.right = "-250px";
}