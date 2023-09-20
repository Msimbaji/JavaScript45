let count = 0;
const Resetbtn = document.getElementById('Resetbtn');
const Increasebtn = document.getElementById('Increasebtn');
const Decreasebtn = document.getElementById('Decreasebtn');
const value = document.getElementById('value');

Resetbtn.addEventListener('click',function()
{
    count = 0;
    value.textContent = count;
    value.style.color = "black";

})
Increasebtn.addEventListener('click',function()
{
    count++;
    value.textContent = count;
    value.style.color = "green";

})
Decreasebtn.addEventListener('click',function()
{
    count--;
    value.textContent = count;
    value.style.color = "red";


})

