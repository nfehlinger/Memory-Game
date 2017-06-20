var classArray = [{name:"Logan", image:"images/logan.jpg"},{name:"Logan", image:"images/logan.jpg"},{name:"Katy", image:"images/katy.jpg"},{name:"Katy", image:"images/katy.jpg"},{name:"Nick", image:"images/nick.jpg"},{name:"Nick", image:"images/nick.jpg"},{name:"Julia", image:"images/julia.jpg"},{name:"Julia", image:"images/julia.jpg"},{name:"Cam", image:"images/cam.jpg"},{name:"Cam", image:"images/cam.jpg"},{name:"Oliver", image:"images/oliver.jpg"},{name:"Oliver", image:"images/oliver.jpg"},{name:"Erin", image:"images/erin.jpg"},{name:"Erin", image:"images/erin.jpg"},{name:"Steven", image:"images/steven.jpg"},{name:"Steven", image:"images/steven.jpg"},{name:"Victor", image:"images/victor.jpg"},{name:"Victor", image:"images/victor.jpg"},{name:"James", image:"images/james.jpg"},{name:"James", image:"images/james.jpg"},{name:"Hans", image:"images/hans.jpg"},{name:"Hans", image:"images/hans.jpg"},{name:"Dennis", image:"images/dennis1.jpg"},{name:"Dennis", image:"images/dennis1.jpg"}]
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

// function newBoard(){
// 	flipped = 0;
// 	var newCards = "";
// 	classArray.cardShuffle();
// 	for(var i = 0; i < classArray.length; i ++){
// 		newCards += "<div class='card' id='card_" + i + "'><div class='cardFront' id='card_" + i + "_front'></div><div class='cardBack' id='card_" + i + "_back' style='background-image: url(\"" + classArray[i].image + "\")'>" + classArray[i].name + "</div></div>";
// 		board.innerHTML = newCards;

// 		document.querySelector(".cardFront").addEventListener("click", function(){
// 			var value = classArray[i].name,
// 				back = document.querySelector("#card_" + i + "_back");
// 			flipCard(this, value, back);
// 		});
// 	}
// }

function flipCard(card, value, back){
	console.log("clicked on " + card.id);
	if( values.length < 2 ){
		card.style.transform = "rotateY(180deg)";
		back.style.transform = "rotateY(0deg)"
		card.style.transition = "0.5s";

		if(values.length == 0){
			values.push(value);
			ids.push(card.id);
			ids.push(back.id);
		}else if(values.length == 1){
			values.push(value);
			ids.push(card.id);
			ids.push(back.id);
			if(values[0] == "Dennis" && values[1] == "Dennis"){
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
				var cardOneFront = document.getElementById(ids[0]),
					cardOneBack = document.getElementById(ids[1]),
					cardTwoFront = document.getElementById(ids[2]),
					cardTwoBack = document.getElementById(ids[3]);

				cardOneFront.style.transform = "rotateY(0deg)";
				cardOneBack.style.transform = "rotateY(-180deg)";
				cardTwoFront.style.transform = "rotateY(0deg)";
				cardTwoBack.style.transform = "rotateY(-180deg)";

				values = [];
				ids = [];
				};
				setTimeout(flipBack, 500);

			}
		}
	}
}

function newBoard(){
	flipped = 0;
	var newCards = "";
	classArray.cardShuffle();
	for(let i = 0; i < classArray.length; i ++){
		newCards += "<div class='card' id='card_" + i + "'><div class='cardFront' data-id='"+i+"' id='card_" + i + "_front'></div><div class='cardBack' id='card_" + i + "_back' style='background-image: url(\"" + classArray[i].image + "\")'><p>" + classArray[i].name + "</p></div></div>";
		board.innerHTML = newCards;

		let value = classArray[i].name,
			back = document.querySelector("#card_" + i + "_back");

		// document.querySelector(".cardFront").addEventListener("click", function(){
		// 	// var value = classArray[i].name,
		// 	// 	back = document.querySelector("#card_" + i + "_back");
		// 	console.log( i, value, this );
		// 	flipCard(this, value, back);
		// });
	}
	document.querySelector("#gameBoard").addEventListener("click",function(event){
		let i = event.target.getAttribute('data-id');
		console.log(event.target);
		flipCard(event.target, classArray[i].name, document.querySelector("#card_" + i + "_back"))
	});
};

document.addEventListener("DOMContentLoaded", function(){
	newBoard();
	// document.querySelector(".cardFront").addEventListener("click", function(){
	// 	var value = classArray[i].name,
	// 		back = document.querySelector("#card_" + i + "_back");
	// 	flipCard(this, value, back);
	// })
});