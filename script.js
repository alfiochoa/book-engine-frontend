const API_URL = "https://book-engine-5zaw.onrender.com/chat";
const PASSWORD = "letmein"; // You can change this to anything

function checkPassword() {
  const input = document.getElementById("login").value;
  if (input === PASSWORD) {
    document.getElementById("chat-ui").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}

async function sendMessage() {
    const msg = document.getElementById("message").value;
    const resBox = document.getElementById("response");
    resBox.textContent = "Thinking...";
  
    try {
      console.log("Sending request to:", API_URL);
      console.log("With payload:", JSON.stringify({ message: msg }));
      
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
      });
      
      console.log("Response received:", response);
      
      const data = await response.json();
      console.log("Response data:", data);
      resBox.textContent = data.reply;
    } catch (e) {
      console.error("Full error object:", e);
      resBox.textContent = `Error: ${e.message}. Check console for details.`;
    }
  }
