
const decreaseBTN = document.getElementById("decreaseBTN");
const increaseBTN = document.getElementById("increaseBTN");
const resetBTN = document.getElementById("resetBTN");
const label = document.getElementById("label");
let count = 0;

decreaseBTN.onclick = function(){
    count--;
    label.textContent = count;
}

increaseBTN.onclick = function(){
    count++;
    label.textContent = count;
}

resetBTN.onclick = function(){
    count= 0;
    label.textContent = count;
}


