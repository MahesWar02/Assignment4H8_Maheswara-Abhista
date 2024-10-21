const editBtn = document.getElementById("editBtn");
const formSection = document.getElementById("formSection");

editBtn.addEventListener("click", function () {
  formSection.classList.toggle("hidden");
});
