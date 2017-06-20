var classArray = [{name:"Logan", image:"images/logan.jpg"},{name:"Logan", image:"images/logan.jpg"},{name:"Katy", image:"images/katy.jpg"},{name:"Katy", image:"images/katy.jpg"},{name:"Nick", image:"images/nick.jpg"},{name:"Nick", image:"images/nick.jpg"},{name:"Julia", image:"images/julia.jpg"},{name:"Julia", image:"images/julia.jpg"},{name:"Cam", image:"images/cam.jpg"},{name:"Cam", image:"images/cam.jpg"},{name:"Oliver", image:"images/oliver.jpg"},{name:"Oliver", image:"images/oliver.jpg"},{name:"Erin", image:"images/erin.jpg"},{name:"Erin", image:"images/erin.jpg"},{name:"Steven", image:"images/steven.jpg"},{name:"Steven", image:"images/steven.jpg"},{name:"Victor", image:"images/victor.jpg"},{name:"Victor", image:"images/victor.jpg"},{name:"James", image:"images/james.jpg"},{name:"James", image:"images/james.jpg"},{name:"Hans", image:"images/hans.jpg"},{name:"Hans", image:"images/hans.jpg"},{name:"Dennis California", image:"images/dennis.jpg"},{name:"Dennis California", image:"images/dennis.jpg"}]
  , flipped = 0
  , values = []
  , ids = []
  , board = document.querySelector("#gameBoard")
  ;



Array.prototype.cardShuffle = function(){
	var i = this.length
	  , j 
	  , temp
	  ;
	while(--i>0){
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	};
};

function newBoard(){
	flipped = 0;
	var newCards = "";
	classArray.cardShuffle();
	for(var i = 0; i < classArray.length; i ++){
		newCards += "<div class='card' id='card_" + i + "' onclick='flipCard(this, \"" + classArray[i].name + "\", \"" + classArray[i].image + "\")'></div>";
		board.innerHTML = newCards;
	}
}

function flipCard(card, value, image){
	console.log("clicked on " + card.id);
	if( card.innerHTML == "" && values.length < 2 ){
		card.style.backgroundImage = "url('" + image + "')";
		card.innerHTML = value;
		if(values.length == 0){
			values.push(value);
			ids.push(card.id);
		}else if(values.length == 1){
			values.push(value);
			ids.push(card.id);
			if(values[0] == "Dennis California" && values[1] == "Dennis California"){
				document.getElementById("lose").style.display = "block";
				document.querySelector(".reloadLose").addEventListener("click", function(){
					location.reload();
				});
			}
			else if(values[0] == values[1]){
				flipped +=2;
				values = [];
				ids = [];
				if(flipped == classArray.length - 2){
					document.getElementById("win").style.display = "block";
				document.querySelector(".reloadWin").addEventListener("click", function(){
					location.reload();
				});
				}
			}else{
				function flipBack(){
				var cardOne = document.getElementById(ids[0]),
					cardTwo = document.getElementById(ids[1]);

				// cardOne.style.transform = "rotateY(-180deg)";
				// cardOne.style.transition = "1s";
				cardOne.style.backgroundImage = "url('images/danny.jpg')";
				cardOne.innerHTML = "";
				// cardTwo.style.transform = "rotateY(-180deg)";
				// cardTwo.style.transition = "1s";
				cardTwo.style.backgroundImage = "url('images/danny.jpg')";
				cardTwo.innerHTML = "";

				values = [];
				ids = [];
				};
				setTimeout(flipBack, 500);

			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function(){
	newBoard();
});