var buttons=[];
buttons=document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++)
{
	var num=i;
	buttons[i].addEventListener("click",function (){
		var current=this.innerHTML;
	//	this.style.color='white';
		makeSound(current);	
		addAnimation(current);
	});
	

}
document.addEventListener("keydown",(event) =>{
		var current=event.key;
		console.log(current);		
		makeSound(current);
		addAnimation(current);
	});
function makeSound(current)
{
	switch(current)
		{
			case "w":
				 var tom1 = new Audio('sounds/tom-1.mp3');
				  tom1.play();
				  break;
			case "a":
				 var tom2 = new Audio('sounds/tom-2.mp3');
				  tom2.play();
				  break;
				  
		  case "s":
				 var tom3 = new Audio('sounds/tom-3.mp3');
				  tom3.play();
				  break;
		   case "d":
				 var tom4 = new Audio('sounds/tom-4.mp3');
				  tom4.play();
				  break;
		   case "j":
				 var  snare= new Audio('sounds/snare.mp3');
				  snare.play();
				  break;
			case "k":
				 var crash = new Audio('sounds/crash.mp3');
				  crash.play();
				  break;
				  
		  case "l":
				 var kickbass = new Audio('sounds/kick-bass.mp3');				  
				kickbass.play();
				  break;
			default:
			
		}
		
}

function addAnimation(key)
{
	var activeButton= document.querySelector("."+key);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}