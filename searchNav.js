const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performSearch();
  }
});

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();

  // Pindah ke halaman hasil
  if (query !== "") {
    showResults(query);
  }
}

function showResults(query) {
  window.location.href = "product.html?q=" + encodeURIComponent(query);
}
