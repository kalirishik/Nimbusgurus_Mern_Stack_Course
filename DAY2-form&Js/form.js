function Validate() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("depart").value;
    const sports = document.querySelector('input[type="radio"]:checked');
    const lang = document.querySelectorAll('input[type="checkbox"]:checked');

    if (!name || !department || !sports || !lang) {
        alert("Warning : Please fill out all the required fields.");
    } else {
        alert("Successfully Submitted.");
    }
}
