//
//zad2
class Auto{
    constructor(marka, model, rokProdukcji, kolor, predkosc){
        this.marka=marka;
        this.model=model;
        this.rokProdukcji=rokProdukcji;
        this.kolor=kolor;
        this.predkosc=predkosc;
    }
    zwiekszPredkosc=function(a){
        this.predkosc+=a
    }
    zmniejszPredkosc=function(a){
        this.predkosc-=a
    }
    toString=function(){
        return this.marka+" "+this.model+" ("+this.rokProdukcji+"), "+"Kolor: "+this.kolor+", Predkosc: "+this.predkosc
    }
    pokazWiek=function(){
        const d=new Date().getFullYear();
        return " Wiek: "+(d-this.rokProdukcji)
    }

    rok=function(x){
        if(x==this.rokProdukcji){
            return this.marka+" "+this.model
        }
    }
}

const auto1=new Auto("t","Model",1984,"czerwony",200)
const auto3=new Auto("n","Model",1985,"czerwony",200)
const auto2=new Auto("t","Model",1984,"czerwony",100)
auto1.zmniejszPredkosc(0)
console.log(auto1.toString() + auto1.pokazWiek())

//zad3
tab=[]
tab.push(auto1)
tab.push(auto2)
console.log("Srednia predkosc: "+(auto1.predkosc+auto2.predkosc)/tab.length)

for(let i=0;i<tab.length;i++){
    console.log(tab[i].rok(1985))
}


//zad4
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