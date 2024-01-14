document.getElementById("incrementbtn").addEventListener('click',incrementcounte);
document.getElementById("decrementbtn").addEventListener('click',decrementcounter);
document.getElementById("resetbtn").addEventListener('click',resetcounter);

let counterdisplay=document.getElementById("counterdisplay");

let countervalue=0;

function updatecounterdisplay(){
    counterdisplay.textContent=countervalue;
}


function incrementcounte(){
    countervalue++;
    updatecounterdisplay()

}
function decrementcounter(){
    if(countervalue>0){
    countervalue--;
    updatecounterdisplay()
    }

}
function resetcounter(){
    countervalue=0;
    updatecounterdisplay()

    
}