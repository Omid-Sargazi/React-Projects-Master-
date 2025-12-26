console.log("Hiii");

const input = document.getElementById('search');
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');

input.addEventListener('input',function(){
    const searchText = this.value.toLowerCase();

    for(let i = 0; i < items.length; i++) {
                const itemText = items[i].textContent.toLowerCase();
                
                if(itemText.includes(searchText)) {
                    items[i].style.display = '';
                } else {
                    items[i].style.display = 'none';
                }
    }
})

let count=0;

let history=[];
const countEI = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

incBtn.addEventListener("click",()=>{
    count++;
    countEI.innerHTML = count;
})

decBtn.addEventListener("click",()=>{
    count--;
    countEI.innerHTML=count;
})



function render()
{
    countEI.innerText = count;

    if(count>0)
    {
        countEI.style.color='green';
    }
    else if(count<0)
        countEI.style.color="red";
    else
    {
        countEI.style.color="gray";
    }



}



incBtn.addEventListener("click",()=>{
    count++;
    render();
});

decBtn.addEventListener("click",()=>{
    count--;
    render();
})



let state = {count:0};

function CounterComponent(state)
{
    const {count} = state;

    const color = count>0?"grean":count<0?"red":"gray";

     return `
    <h1 style="color:${color}">${count}</h1>
    <button id="inc">+</button>
    <button id="dec">-</button>
  `;
}