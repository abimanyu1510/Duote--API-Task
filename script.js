
    // Function to fetch a random quote
    function fetchRandomQuote(){
    fetch ("https://api.quotable.io/random").then(response=>response.json()).then(data=>{
       const quoteElement=document.getElementById("quote");
       quoteElement.innerHTML=`<p style><b> CONTENT:</b><br> ${data.content}</p>
    <p> <b>AUTHOR NAME:</b><br> ${data.author}`;
    })
          .catch(error => {
            console.log("Error fetching random quote:", error);
          });
      }

      // Call the functions to fetch data from APIs when the page loads
    const button=document.getElementById("button").innerText="Click here"
    document.addEventListener("click", () => {
        fetchRandomQuote();
    })

    // function fetchRandomQuote() {
    //     fetch("")
    //       .then(response => response.json())
    //       .then(data => {
    //         const quoteElement = document.getElementById("quote");
    //         quoteElement.textContent = `"${data.content}" - ${data.author}`;
    //       })