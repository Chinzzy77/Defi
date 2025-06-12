
function showWalletAlert() {
    alert("Metamask not detected..");
}

function signup() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!firstName || !lastName || !email) {
        alert("Please fill all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ firstName, lastName, email });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Your response has been submitted. An email will be sent to you. Click OK to proceed.");
    window.location.href = "page.html";
}
