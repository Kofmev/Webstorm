function validateForm() {
    const x = document.forms["myForm"]["firstname"].value;
    const y = document.forms["myForm"]["lastname"].value;
    const z = document.forms["myForm"]["email"].value;
    if (x === "") {
        alert("Je moet je voornaam nog invullen");
        return false;
    }
    if (y === "") {
        alert("Je moet je achternaam nog invullen");
        return false;
    }
    if (z === "") {
        alert("Je moet je email adres nog invullen");
        return false;
    }
}