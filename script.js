let heartCount = 0;
let coinCount = 100;
let copyCount = 2;
let heartStates = {};

 
document.querySelectorAll(".heartBtn").forEach((btn, index) => {
    heartStates[index] = false;
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const name = card.querySelector("h3").innerText;
        
        if (!heartStates[index]) {
            heartCount++;
            btn.textContent = "❤️";
            heartStates[index] = true;
        } else {
            heartCount--;
            btn.textContent = "🤍";
            heartStates[index] = false;
        }
        
        document.querySelector("#heartCount span").innerText = heartCount;
    });
});

// ✅ Copy buttons functionality with alert
document.querySelectorAll(".copyBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const number = card.querySelector("p.font-semibold").innerText;
        
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            document.querySelector("#copyCount span").innerText = copyCount;

            // ---- Alert show করবে এখানে ----
            alert(`Copied: ${number}`);

            // Optional: notification div (যদি রাখতে চাও)
            const notification = document.createElement("div");
            notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg";
            notification.textContent = `Copied: ${number}`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 2000);
        });
    });
});

// ✅ Call buttons functionality with alert
document.querySelectorAll(".callBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const number = card.querySelector("p.font-semibold").innerText;
        const name = card.querySelector("h3").innerText;

        
        if (coinCount < 20) {
            // ---- Alert show করবে এখানে ----
            alert("❌ You don't have enough coins. You need 20 coins to make a call");

            // Optional: notification div
            const notification = document.createElement("div");
            notification.className = "fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg";
            notification.textContent = "Not enough coins to make a call!";
            document.body.appendChild(notification);
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 2000);
            return;
        }
        
        coinCount -= 20;
        document.querySelector("#coinCount span").innerText = coinCount;

        // ---- Alert show করবে এখানে ----
        alert(`📞 Calling ${name} ${number}...`);

        // Optional: notification div
        const notification = document.createElement("div");
        notification.className = "fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg";
        notification.textContent = `Calling ${name} at ${number}...`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 2000);

        // Add to call history
        const historyList = document.querySelector("#historyList");
        if (historyList.innerHTML.includes("No call history yet")) {
            historyList.innerHTML = "";
        }
        
        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.className = "bg-gray-100 p-2 rounded text-sm";
        li.innerHTML = `<span class="font-medium">${name}</span><br><span class="text-gray-700">${number}</span><br><span class="text-gray-500 text-xs">${time}</span>`;
        historyList.prepend(li);
    });
});

// Clear history button
document.querySelector("#clearHistory").addEventListener("click", () => {
    const historyList = document.querySelector("#historyList");
    historyList.innerHTML = '<li class="text-sm text-gray-500 italic">No call history yet</li>';
});
