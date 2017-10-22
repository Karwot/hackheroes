/*
Copyright (c) 2018 Kacper Karwot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var color = [ "white", "blue", "green", 
			 "purple", "orange", "red"];

var bgColorID = Math.floor(Math.random()*5);

function changeColor() 
{
	var bgColorID = Math.floor(Math.random()*5);
	var bgColor=color[bgColorID];
	document.getElementById("game1").style.background = bgColor;
	console.log("bg:"+color[bgColorID]);
}


function hexChangeColor ()
{
	var hexColor = [ "#ff0000", "#00ff00", "#0000ff"];
	var bgColorID = Math.floor(Math.random()*2);
	var bgColor= hexColor[bgColorID];
		document.getElementById("game1").style.background = bgColor;
		console.log("bg:"+hexColor[bgColorID]);
}


function gameOver() 
{
	document.getElementById("game1").innerHTML = "<p class='gameOver'>Koniec gry</p>"+"<p class='result'>Wynik: "+score+"</p>";
	document.getElementById("score").innerHTML = "<span class='scoreInfo'>Wynik:</span> "+score+"<br>"+"<span class='scoreInfo'>Szanse: </span>"+lives;
}

	
var time=45000;

timeLeft=time/1000;
function timerStart() 
{
  document.getElementById('counter').innerHTML = timeLeft;
  timeLeft--;
  if (timeLeft >= 0) 
  	{
     setTimeout(timerStart, 1000);
  	}
  else 
  	{
  	  document.getElementById('counter').innerHTML = "&nbsp";
  	}
 
}

function showScore() 
{
	document.getElementById("click").style.visibility = "visible";
	document.getElementById("score").style.visibility = "visible";
}


var easyTime=1250;
function easy() 
{
	var overAfterTime = setTimeout(gameOver, time);
	timerStart();
	showScore();
	setInterval(changeColor, easyTime);
		//setTimeout(onscreenColor(),0);
	setInterval(onscreenColor,easyTime);
	document.getElementById("difficulty").innerHTML = "&nbsp";
		
}

var mediumTime=750;
function medium() 
{
	showScore();
	setInterval(changeColor, mediumTime);
		//setTimeout(onscreenColor(),0);
	setInterval(onscreenColor, mediumTime);
	document.getElementById("difficulty").innerHTML = "&nbsp&nbsp";
}

var hardTime=500;
function hard() 
{
	showScore();
	setInterval(changeColor, hardTime);
		//setTimeout(onscreenColor(),0);
	setInterval(onscreenColor, hardTime);
	document.getElementById("difficulty").innerHTML = "&nbsp";
}

//Not finished: 
	function hex() 
		{
		showScore();
		document.getElementById("difficulty").innerHTML = "&nbsp";
		setInterval(hexChangeColor, 1000);
		setInterval(hexOnScreenColor, 1000);
		}

		function hexOnScreenColor() 
		{
		var ID = Math.floor(Math.random()*2);
		var hexColor = [ "#ff0000", "#00ff00", "#0000ff"];
		document.getElementById("colorName").innerHTML="<p id='colorText'>"+hexColor[ID]+"</p>";
		console.log("text:"+hexColor[ID]);
		}	
////

function onscreenColor()
{
var ID = Math.floor(Math.random()*5);  
var color = [ "white", "blue", "green", 
			 "purple", "orange", "red"];
document.getElementById("colorName").innerHTML="<p id='colorText'>"+color[ID]+"</p>";
console.log("text:"+color[ID]);
}

//checking if text=bg when key pressed
//to do: max 1 click easy/normal/hardTime

var score = 0;
var lives = 3;
document.getElementById("score").innerHTML = "<span class='scoreInfo'>Wynik:</span> "+score+"<br>"+"<span class='scoreInfo'>Szanse: </span>"+lives;


var streak = 0;
function keyPressed()
{
	var bg = document.getElementById("game1").style.backgroundColor;
	console.log(bg);
	var txt = document.getElementById("colorText").innerHTML;
	console.log("success"+txt);	

	if(txt==bg)
		{
		score=score+2+streak;
		streak++;
			console.log("success score+2");
				if(streak>=2)
				 { document.getElementById("streak").innerHTML = "<p id='streakp'>"+streak+" pod rząd!</p>"; }
		}
		else
			{	
			document.getElementById("streak").innerHTML = "&nbsp";
			streak = 0;
					console.log("score-2");
			score-=2;
			lives-=1;
					console.log("score:"+score);

				if(lives<=0)
					{
						gameOver();  
					}

	}

document.getElementById("score").innerHTML = "<span class='scoreInfo'>Wynik:</span> "+score+"<br>"+"<span class='scoreInfo'>Szanse: </span>"+lives;

}




///

