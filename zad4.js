class Ksiazka{
    constructor(autor, tytul, rokWydania) {
    this.autor = autor;
    this.tytul = tytul;
    this.rokWydania = rokWydania;
    }
    tytulKsiazki = function() {
    return this.tytul + " - " + this.autor+" ("+this.rokWydania+")";
    };
   }

const book= new Ksiazka("Autor", "Tytul", 1984)
console.log(book.tytulKsiazki())

class Student{
    constructor(imie, nazwisko, album, ocena1, ocena2, ocena3){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.album=album;
        this.ocena1=ocena1;
        this.ocena2=ocena2;
        this.ocena3=ocena3;
    }
    srednia=function(){
        return "Srednia= "+ (this.ocena1+this.ocena2+this.ocena3)/3
    }
}

const student1=new Student("Imie", "Nazwisko", 12345, 3, 4, 5)
console.log(student1.srednia())

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
}

const auto1=new Auto("Marka","Model",1984,"czerwony",200)
auto1.zmniejszPredkosc(5)
console.log(auto1.toString() + auto1.pokazWiek())

class Prostokat{
    constructor(a,b){
        this.a=prompt("Podaj a");
        this.b=prompt("Podaj b");
        return "Pole "+this.pole
    }
    
    // static nowy(a,b){
        // this.a=prompt("Podaj a");
        // this.b=prompt("Podaj b");
    //    return new Prostokat(a.b)
    // }
    pole=function(){
        return "Pole: "+this.a*this.b
    }
    obwod=function(){
        return " Obwod: "+parseInt(this.a)+parseInt(this.a)+parseInt(this.b)+parseInt(this.b)
    }
    czyKwadrat=function(){
        if(this.a==this.b){
            return " Jest kwadratem "
        }
        else {return " Nie jest kwadratem "}
    }    
}
const prostokat=new Prostokat()
console.log(prostokat.pole()+prostokat.obwod()+prostokat.czyKwadrat())
