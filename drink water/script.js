const smallCups = document.querySelectorAll('.cups-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")
updateBigCup()
smallCups.forEach((cup,idx)=>{
   cup.addEventListener("click",()=>highlightcups(idx))
})


function highlightcups(idx){
    if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--

    }
    smallCups.forEach((cup, ele)=>{
        if(ele<=idx ){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}
function updateBigCup(){
    const fullCups = document.querySelectorAll('.cups-small.full').length
    const totalCups= smallCups.length
    
    if(fullCups===0){
        percentage.style.visibility="hidden";
        percentage.style.height = 0;
    }
    else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups*330}px`
        percentage.innerHTML= `${fullCups/totalCups*100}%`
    }
    if(fullCups === totalCups){
        remained.style.visibality = "hidden"
        remained.style.height =0;
    }
    else{
        remained.style.visibility ="visible"
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}