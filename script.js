// Fetch the quote from the FavQs API and display it
async function fetchQuote() {
    const apiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://favqs.com/api/qotd");
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const quoteData = JSON.parse(data.contents); // Parse the inner JSON string
      const quote = quoteData.quote.body; // Extract the quote text
  
      // Update the quote text in the HTML
      document.getElementById("quote").textContent = `"${quote}"`;
    } catch (error) {
      console.error("Error fetching the quote:", error);
      document.getElementById("quote").textContent = "Failed to load a quote. Please try refreshing the page.";
    }
  }
  
  // Automatically fetch a quote when the page loads
  window.onload = fetchQuote;
  