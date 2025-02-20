// Ex1
function degreC(TempInput){
var TempCelsius = (parseFloat(TempInput)-32)*5/9
return "Cette température équivaut à " + TempCelsius + " degrés Celsius "}
console.log(degreC(prompt("Entrer une temperature : ")))
// Ex2
function hjms(Input) {
    let Days = parseInt(Input / (24 * 3600));
    let RestDays = Input % (24 * 3600);

    let hours = parseInt(RestDays / 3600);
    let RestHours = RestDays % 3600;

    let mins = parseInt(RestHours / 60);
    let seconds = RestHours % 60;
    let Chaine="cette durée équivaut à "
    if(Days!=0){
        Chaine+=Days + " jours "
    }
    if(hours!=0){
        Chaine+=hours + " heures "
    }
    if(mins!=0){
        Chaine+= mins + " minutes "
    }
    if(seconds!=0){
        Chaine+=seconds + " secondes "
    }
    return  Chaine;
}
console.log(hjms(prompt("Entrer une duree en sec : ")))
// Ex3
function troisNombres(N1,N2,N3){
    Numbers = new Array(N1,N2,N3);
    Numbers.sort();
    console.log("les nombres dans l'ordre croissant : " + Numbers);
}
N1=prompt("Entrer le 1 er nombre : ")
N2=prompt("Entrer le 2 eme nombre : ")
N3=prompt("Entrer le 3 eme nombre : ")
troisNombres(N1,N2,N3)
// Ex4
function triangle1(taille){
    var c='*'
    while (c.length<=taille){
        console.log(c)
        c+='*'
    }
}
let taille1 = parseInt(prompt("Donnez la taille du motif triangle1 :"));
triangle1(taille1);
function triangle2(taille) {
    for (let i = 0; i < taille; i++) {
        let espaces = " ".repeat(taille - i - 1);
        let etoiles = "*".repeat(2 * i + 1);
        console.log(espaces + etoiles);
    }
}
let taille = parseInt(prompt("Donnez la taille du motif triangle2 :"));
triangle2(taille);
// Ex5
function Premier(N){
    for(let i =2;i<=parseInt(N/2);i++){
        if(N%i===0){
            return N +" n'est pas un nombre premier, il est divisible par "+ i ;
        }
    }
    return N +" est un nombre premier"
}
console.log(Premier(parseInt(prompt("Entrer un nombre : "))))
// Ex6
function Fibo1(n){
    U=0
    V=1
    for(let i =2;i<=n;i++){
        V=V+U
        U=V-U
    }
    console.log(V)
}
Fibo1(parseInt(prompt("Entrer un nombre Fibo1 : ")));
function Fibo2(n){
    U=0
    V=1
    Rang=1
    while(V<=n){
        V=V+U
        U=V-U
        Rang+=1
    }
    console.log(V,Rang)
}
Fibo2(parseInt(prompt("Entrer un nombre Fibo2 : ")));
// Ex7
function raca1(A){
    if(100<A || A<0){
    return A + " n'est pas entre 0 et 100 "}
    U=A/2;
    while(Math.abs(U**2-A)>10**-5){
        U=(U+A/U)*1/2
    }
    return U
}
console.log(raca1(parseFloat(prompt("Entrer un nombre entre 0 et 100 : "))));