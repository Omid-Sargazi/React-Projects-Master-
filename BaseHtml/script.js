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


