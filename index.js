const Decreasebtn=document.getElementById("Decreasebtn");
const Increasebtn=document.getElementById("Increasebtn");
const Resetbtn=document.getElementById("Resetbtn");
const countLabel=document.getElementById("countLabel");
let count=0;
Increasebtn.addEventListener('click',()=>{
count++;
countLabel.textContent=count;
})
Decreasebtn.addEventListener('click', () => {
    count--;
    countLabel.textContent = count;
  });

  Resetbtn.addEventListener('click', () => {
    count = 0;
    countLabel.textContent = count;
  });
