document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Latest GitHub commit
  const lastUpdated = document.getElementById("lastUpdated");

  if (lastUpdated) {
    fetch("https://api.github.com/repos/YashKSahu/yashksahu.github.io/commits?per_page=1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch latest commit");
        }
        return response.json();
      })
      .then(data => {
        const date = new Date(data[0].commit.author.date);

        lastUpdated.textContent = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      })
      .catch(() => {
        lastUpdated.textContent = "";
      });
  }
});