function zmienTekst() {
document.getElementById("tekst").innerHTML = alert("Witaj na mojej stronie!");
}
function lparzyste(){
    let x=0
    while(x<=100){
        console.log(x)
        x=x+2
    }
}
function dodaj(){
    let a=prompt("Podaj pierwsza liczba")
    let b=prompt("Podaj druga liczba")
    let c=parseInt(a)+parseInt(b)
    document.write(c)
}
{setInterval(time,1000);
    function time(){
    var date = new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
	document.getElementById("p1").innerHTML = `${hour}:${minute}:${second}`
}
document.write(time())
}

function game(){
    alert("Zgadnij liczbe")
    var number=Math.floor(Math.random()*100)
    var shot=-1;
    var count=0;
    while (number != shot){
        shot = prompt(" ");
        count++;
        if(number<shot){
            alert("Za mala");
        }
        else if(number>shot){
            alert("Za duza");
        }
        else{
            alert(`Zgadles ${count}`)
        }
        
    }
}

