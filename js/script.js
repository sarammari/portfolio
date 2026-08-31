const statement = document.getElementById("statement");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const pageState = new URLSearchParams(window.location.search);
const view = pageState.get("view") || "sara";

if (view === "work") {
    work.style.display = "block";
} else if (view === "contact") {
    contact.style.display = "block";
} else {
    statement.style.display = "block";
}
