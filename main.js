fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const ideas = data;

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * ideas.length);
      return ideas[randomIndex];
    };

    const displayQuote = () => {
      const titleContainer = document.getElementById("textTitle");
      const descriptionContainer = document.getElementById("textDescription");
      const subjectContainer = document.getElementById("textSubject");

      // Get a random quote object
      const randomQuote = getRandomQuote();

      // Update the HTML content with the title, description and subject
      titleContainer.textContent = randomQuote.Title;
      descriptionContainer.textContent = randomQuote.Description;
      subjectContainer.textContent = randomQuote.Subject;
    };

    displayQuote();

    const randomButton = document.getElementById("randomButton");
    randomButton.addEventListener("click", displayQuote);

    // Dark mode
    const icon = document.getElementById("icon");

    icon.addEventListener("click", () => {
      console.log("I was clicked");
      document.body.classList.toggle("darkMode");
      if (document.body.classList.contains("darkMode")) {
        icon.className = "bi bi-brightness-high-fill";
      } else {
        icon.className = "bi bi-moon-fill";
      }
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
