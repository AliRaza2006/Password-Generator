let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let arrchar=[];
let characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
 "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
function random()
{
    for(let i=0;i<15;i++)
    {
        let randomindex=Math.floor(Math.random()*characters.length)
        arrchar.push(characters[randomindex])
    }
}
function generate()
{
    if(box1.textContent==="" && box2.textContent==="")
    {
random()
for(let i=0 ;i<15;i++)
{
    box1.textContent+=arrchar[i]
}
arrchar=[]
random()
for(let i=0 ;i<15;i++)
{
    box2.textContent+=arrchar[i]
}
}
}
function reset()
{
    box1.textContent=""
    box2.textContent=""
}