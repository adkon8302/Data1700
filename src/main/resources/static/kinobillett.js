const billettRegistering = [];
function  kjopBillett() {

    const filmSelect = document.getElementById("film");
    const film = filmSelect.options[filmSelect.selectedIndex].text;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;
    if (validerFilm(filmSelect)&&
        validerAntall(antall)&&
        validerforNavn(fornavn) &&
        valideretterNavn(etternavn)&&
        validerTelefon(telefon)&&
        validerEpost(epost)) {
        const billett = {
            film, antall, fornavn, etternavn, telefon, epost

        };
        billettRegistering.push(billett);
        visBillett(billettRegistering);

        document.getElementById("billettForm").reset();
    }

}
function visBillett(){

    console.log("ajunge aici")
    let html = "<ol>";
    console.log(billettRegistering)
    for(let i in billettRegistering){
        console.log(billettRegistering[i].film)
        html += "<li>" + billettRegistering[i].film +"<br>"+
            billettRegistering[i].antall +"<br>"+
            billettRegistering[i].fornavn+ " " +
            billettRegistering[i].etternavn +"<br>"+
            billettRegistering[i].telefon +"<br>"+
            billettRegistering[i].epost +"<br>"+"</li>"
        html+="</ol>"
        document.getElementById("billettRegister").innerHTML = html;
        console.log(html)

    }

}
function validerFilm(filmSelect) {
    const filmInfo = document.getElementById("filmInfo");
    if (filmSelect.selectedIndex === 0) {
        filmInfo.innerText = "Du må velge en film.";
        return false;
    } else {
        filmInfo.innerText = "";
        return true;
    }
}
function validerAntall(antall) {
    const antallInfo = document.getElementById("antallInfo");
    if (antall < 1) {
        antallInfo.innerText = "Antall må være minst 1.";
        return false;
    } else {
        antallInfo.innerText = "";
        return true;
    }
}

function validerforNavn(fornavn) {
    const fornavnInfo = document.getElementById("fornavnInfo");
    if (!/^[a-zA-Z]+$/.test(fornavn)) {
        fornavnInfo.innerText = "Navnet kan bare inneholde bokstaver.";
        return false;
    } else {
        fornavnInfo.innerText = "";
        return true;
    }
}

function valideretterNavn(etternavn) {
    const etternavnInfo = document.getElementById("etternavnInfo");
    if (!/^[a-zA-Z]+$/.test(etternavn)) {
        etternavnInfo.innerText = "Navnet kan bare inneholde bokstaver.";
        return false;
    } else {
        etternavnInfo.innerText = "";
        return true;
    }
}

function validerTelefon(telefon) {
    const telefonInfo = document.getElementById("telefonInfo");
    if (!/^[0-9]{8}$/.test(telefon)) {
        telefonInfo.innerText = "Ugyldig telefonnummer. Skal bestå av 8 siffer.";
        return false;
    } else {
        telefonInfo.innerText = "";
        return true;
    }
}

function validerEpost(epost) {
    const epostInfo = document.getElementById("epostInfo");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(epost)) {
        epostInfo.innerText = "Ugyldig e-postadresse.";
        return false;
    } else {
        epostInfo.innerText = "";
        return true;
    }
}
function slettBilletter () {
    billettRegistering.length = 0
    document.getElementById("billettRegister").innerHTML = "";
}
