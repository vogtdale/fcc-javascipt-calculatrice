// afficher les valeaurs numerique dans input 
// m'amuse avec fat arrow functions 
insert = (num) => {
    document.form.textview.value = document.form.textview.value + num

}

//fonction qui permet de calculer les valeurs inserer dans form input et evaluer
equal = () => {
    let icalcul = document.form.textview.value
    document.form.textview.value = eval(icalcul)
}

//fonctions javscript classique 
function clean() {
    document.form.textview.value = ""
}

function back() {
    let icalcul = document.form.textview.value
    document.form.textview.value = icalcul.substring(0, icalcul.length - 1)
}

function ce() {
    var icalcul = document.form.textview.value
    document.form.textview.value = icalcul.substring(0, icalcul.length - 2)
}
function sqrt() {
    var sqrt = document.form.textview.value;
    document.form.textview.value = Math.sqrt(sqrt)
    
 }

function cos() {
    var power = document.form.textview.value;
    document.form.textview.value = Math.cos(power * Math.PI / 180)
}
function Random() {
    var tangent = document.form.textview.value;
    document.form.textview.value = eval(tangent + Math.random())
}

function Root() {
    var x = document.form.textview.value;
    document.form.textview.value = eval(x * x)

}

function hover() {
    var mouse = document.getElementById('h1');
    mouse.innerHTML = 'POWERED BY JACSCRIPT';
    document.getElementById('background').style.background = "red";
}

function hoverinverse() {
   
    document.getElementById('background').style.background = "black";
}