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
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: msg })
    });

    const data = await response.json();
    resBox.textContent = data.reply;
  } catch (e) {
    resBox.textContent = "Error: " + e;
  }
}
