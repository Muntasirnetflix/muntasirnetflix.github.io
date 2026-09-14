function toggleSearch() {
  const box = document.getElementById("searchBox");
  box.classList.toggle("show");

  if (box.classList.contains("show")) {
    document.getElementById("searchInput").focus();
  }
}

function searchMovies() {
  const input = document.getElementById("searchInput")
    .value
    .toLowerCase();

  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();

    if (title.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function movieInfo(title) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  modalTitle.textContent = title;

  modalText.textContent =
    "This is a demo movie page for Muntasirnetlix. " +
    "You can replace this information with your own licensed content.";

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

function showInfo() {
  movieInfo("Welcome to Muntasirnetlix");
}

function playDemo() {
  alert(
    "Welcome to Muntasirnetlix! Add your own or authorized video link here."
  );
}

/* Close popup when clicking outside */
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
});
