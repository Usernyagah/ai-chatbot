
(function() {
  const bubble = document.createElement("div");
  bubble.id = "chatbot-launcher";
  bubble.innerText = "💬";
  Object.assign(bubble.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    fontSize: "30px",
    cursor: "pointer",
    zIndex: "9999"
  });
  document.body.appendChild(bubble);

  bubble.addEventListener("click", () => {
    if (document.getElementById("chatbot-iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = "https://yourdomain.com/chat.html";
    iframe.id = "chatbot-iframe";
    Object.assign(iframe.style, {
      position: "fixed",
      bottom: "70px",
      right: "20px",
      width: "350px",
      height: "500px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      zIndex: "10000"
    });
    document.body.appendChild(iframe);
  });
})();
