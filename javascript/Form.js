function validateForm() {
    const x = document.forms["form"]["firstname"].value;
    const y = document.forms["form"]["lastname"].value;
    const z = document.forms["form"]["email"].value;
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

function writeName() {

    var welcome = document.getElementById('welcome');
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var email = document.getElementById('email');
    var formContent = document.getElementById('form');

    welcome.innerHTML = "Hey, bedankt voor het invullen van je gegevens " + firstName.value + ".<br>"
        + "je ingevulde gegevens zijn:<br><br>" + "Voornaam:<br>" + firstName.value + "<br>" + "Achternaam:<br>"
        + lastName.value + "<br>" + "E-mail adres: <br>" + email.value + "<br>";

    formContent.innerHTML = "";
}