
function dlugoscLiczby(liczba, dlugosc) {
    var wynik = "" + liczba;
    while (wynik.length < dlugosc)
        wynik = "0" + wynik;
    return wynik;
}


const slownikMiesiecy = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const slownikDniTygodnia = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

function aktualizujDate(){
    var date = new Date();
    var rok = date.getFullYear();
    var miesiac = date.getMonth(); // zwraca 0-11
    var nazwaMiesiaca = slownikMiesiecy[miesiac];
    var dzien = date.getDate();
    var dzienTygodnia = date.getDay(); // zwraca 1-7
    var nazwaDnia = slownikDniTygodnia[dzienTygodnia-1];
    var godzina = date.getHours();
    var minuta = date.getMinutes();
    var sekunda = date.getSeconds();
    var milisekunda = date.getMilliseconds();

    document.getElementById("date").innerText = `${nazwaDnia}, ${dlugoscLiczby(dzien, 2)} ${nazwaMiesiaca} ${dlugoscLiczby(rok, 4)} ${dlugoscLiczby(godzina, 2)}:${dlugoscLiczby(minuta, 2)}:${dlugoscLiczby(sekunda, 2)}:${dlugoscLiczby(milisekunda, 3)}`;
}

setInterval(() => {
    aktualizujDate();
}, 1);