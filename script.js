console.log("JS is connected! ✅");

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalDisplay = document.getElementById("total");

let total = 0;

// Check if button is found
if (!addBtn) {
  console.error("Add button not found!");
} else {
  addBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (!name || !amount) {
      alert("Please enter both name and amount!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} — ₹${amount}`;
    list.appendChild(li);

    total += amount;
    totalDisplay.textContent = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
  });
}
