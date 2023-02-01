var a = Math.floor(Math.random()*6)+1;
var b = Math.floor(Math.random()*6)+1;
var title = document.querySelector(".Title");
var im1 = document.querySelector(".one img");
var im2 = document.querySelector(".two img");
if(a>b)
{
    title.innerHTML="Player 1 Wins!";
}
else if(a<b)
{
    title.innerHTML="Player 2 Wins!";
}
else
{
    title.innerHTML="Draw!";
}

im1.src="Images/"+a+".png";
im2.src="Images/"+b+".png";

   