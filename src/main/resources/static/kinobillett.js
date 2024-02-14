const billettRegistering = [];
function  kjopBillett() {

    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;
    const billett = {
        film,antall,fornavn,etternavn,telefon,epost
    };
    billettRegistering.push(billett);
    visBillett(billettRegistering);
    document.getElementById("billettForm").reset();
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
function slettBilletter () {
    billettRegistering.length = 0
    document.getElementById("billettRegister").innerHTML = "";
}