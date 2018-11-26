(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


function walidacja() {
    let imie,nazwisko;
    let number;

    imie = document.getElementById("imie").value;
    nazwisko =	document.getElementById("nazwisko").value;
    number = document.getElementById("number").value;

    let q_imie = document.querySelector("#imie");
    let q_nazwisko = document.querySelector("#nazwisko");
    let q_number = document.querySelector("#number");

    if(imie === '' ) {
        text_imie = "Nie moze zostac puste";
        addClass(q_imie, 'is-invalid');
    }
    else if(parseInt(imie) ) {
        text_imie = "Musi byc literowe";
        addClass(q_imie, 'is-invalid');
    }
    else {
        text_imie = "Poprawnie";
        removeClass(q_imie, 'is-invalid');
    }


    if(nazwisko === '' ) {
        text_nazwisko = "Nie moze zostac puste";
        addClass(q_nazwisko, 'is-invalid');
    }
    else if(parseInt(nazwisko) ) {
        text_nazwisko = "Musi byc literowe";
        addClass(q_nazwisko, 'is-invalid');
    }
    else {
        text_nazwisko = "Poprawnie";
        removeClass(q_nazwisko, 'is-invalid');
    }


    if(number === '' ) {
        text_number ="Nie moze zostac puste";
        addClass(q_number, 'is-invalid');
    }
    else {
        text_number ="Poprawnie";
        removeClass(q_number, 'is-invalid');
    }

    document.getElementById("napis_wyswietl").innerHTML = text_imie;
    document.getElementById("napis_wyswietl2").innerHTML = text_nazwisko;
    document.getElementById("napis_wyswietl3").innerHTML = text_number;
}
