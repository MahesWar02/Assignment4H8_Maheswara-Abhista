document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang akan dimanipulasi
  const sendBtn = document.getElementById("sendBtn");
  const editBtn = document.getElementById("editBtn");
  const formSection = document.getElementById("formSection");

  const profileName = document.getElementById("profileName");
  const profileRole = document.getElementById("profileRole");
  const profileAvailability = document.getElementById("profileAvailability");
  const profileAge = document.getElementById("profileAge");
  const profileLocation = document.getElementById("profileLocation");
  const profileExperience = document.getElementById("profileExperience");
  const profileEmail = document.getElementById("profileEmail");

  const nameInput = document.getElementById("name");
  const roleInput = document.getElementById("role");
  const availabilityInput = document.getElementById("availability");
  const ageInput = document.getElementById("usia");
  const locationInput = document.getElementById("lokasi");
  const experienceInput = document.getElementById("yoe");
  const emailInput = document.getElementById("email");

  // Fungsi untuk menampilkan data dari localStorage
  function tampilkanData() {
    profileName.textContent = localStorage.getItem("name") || "Nama Anda";
    profileRole.textContent =
      localStorage.getItem("role") || "Front End Designer";
    profileAvailability.textContent =
      localStorage.getItem("availability") || "Full Time";
    profileAge.textContent = localStorage.getItem("age") || "19";
    profileLocation.textContent = localStorage.getItem("location") || "Jakarta";
    profileExperience.textContent = localStorage.getItem("experience") || "1";
    profileEmail.textContent =
      localStorage.getItem("email") || "email@gmail.com";
  }

  // Event listener untuk tombol "Edit"
  editBtn.addEventListener("click", function () {
    // Isi form dengan data dari localStorage
    nameInput.value = localStorage.getItem("name") || "";
    roleInput.value = localStorage.getItem("role") || "";
    availabilityInput.value = localStorage.getItem("availability") || "";
    ageInput.value = localStorage.getItem("age") || "";
    locationInput.value = localStorage.getItem("location") || "";
    experienceInput.value = localStorage.getItem("experience") || "";
    emailInput.value = localStorage.getItem("email") || "";

    // Tampilkan form untuk edit
    formSection.classList.remove("hidden");
  });

  // Event listener untuk tombol "Send"
  sendBtn.addEventListener("click", function () {
    // Simpan data ke localStorage
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("role", roleInput.value);
    localStorage.setItem("availability", availabilityInput.value);
    localStorage.setItem("age", ageInput.value);
    localStorage.setItem("location", locationInput.value);
    localStorage.setItem("experience", experienceInput.value);
    localStorage.setItem("email", emailInput.value);

    // Tampilkan data di profil
    tampilkanData();

    // Sembunyikan form setelah di-submit
    formSection.classList.add("hidden");
  });

  // Tampilkan data saat halaman dimuat pertama kali
  tampilkanData();
});
