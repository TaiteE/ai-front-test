document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("queryForm");
  const input = document.getElementById("queryInput");
  const output = document.getElementById("responseOutput");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userQuery = input.value.trim();

    if (!userQuery) {
      output.textContent = "Please enter a question.";
      return;
    }

    // Optional: show loading message
    output.textContent = "Thinking...";

    try {
      const response = await fetch("https://your-langchain-api.com/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: userQuery })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      output.textContent = data.answer || "No answer returned.";
    } catch (error) {
      console.error("Fetch error:", error);
      output.textContent = "Sorry, something went wrong. Try again later.";
    }
  });
});
