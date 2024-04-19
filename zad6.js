function silnia(n){
    n=prompt("Podaj n")
    if (n<=0){
        console.log(1);
    }
    else if(n==1){
        console.log(1);
    }
    else{
        let x=1
        for(let i=1; i<parseInt(n)+1; i++){
            x=x*i
        }
        console.log(x)
    }
    }
    

function zmianaKoloru(buttonId){
    document.getElementById('button1').style.backgroundColor='white';
    document.getElementById('button2').style.backgroundColor='white';
    document.getElementById('button3').style.backgroundColor='white';
    document.getElementById(buttonId).style.backgroundColor='blue';
}

function zmienWidocznosc(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === 'none') ? '' : 'none';
}

function dodajDoListy(n){
    var text = document.getElementById('textInput').value;
    var list = document.getElementById('list');
    var elementListy = document.createElement('li');
    elementListy.textContent = text;
    list.appendChild(elementListy);
    document.getElementById('textInput').value = '';

}
function dodaj() {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = imie;
    cell2.textContent = nazwisko;
    document.getElementById('imie').value = '';
    document.getElementById('nazwisko').value = '';
}
