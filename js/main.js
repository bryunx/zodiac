	var signObject = [
	{
		sign: "aries",
		animal: "rat",
		description: "Aries: active, demanding, determined, effective, ambitious",
		fortune: "Rat: intelligent, adaptable, quick-witted, charming, artistic, sociable",
		birthmonth: "january",
		stone: "Garnet",
		birthstone: "img/garnet.jpg",
		picture: "img/aries.jpg",
		chinesepic: "img/rat.jpg"
	},
	{
		sign: "taurus",
		animal: "ox",
		description: "Taurus: security, subtle strength, appreciation, instruction, patience",
		fortune: "Ox: loyal, reliable, thorough, strong, reasonable, steady, determined",
		birthmonth: "march",
		stone: "Aquamarine",
		birthstone: "img/aquamarine.jpg",
		picture: "img/taurus.jpg",
		chinesepic: "img/taurus.jpg"
	},
	{
		sign: "gemini",
		animal: "tiger",
		description: "Gemini: communication, indecision, inquisitive, intelligent, changeable",
		fortune: "Tiger: enthusiastic, courageous, ambitious, leadership, confidence, charismatic",
		birthmonth: "september",
		stone: "Sapphire",
		birthstone: "img/sapphire.jpg",
		picture: "img/gemini.jpg",
		chinesepic: "img/tiger.jpg"
	},
	{
		sign: "cancer",
		animal: "rabbit",
		description: "Cancer: emotion, diplomatic, intensity, impulsive, selective",
		fortune: "Rabbit: trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers",
		birthmonth: "june",
		stone: "Pearl",
		birthstone: "img/pearl.jpg",
		picture: "img/cancer.jpg",
		chinesepic: "img/rabbit.jpg"		
	},
	{
		sign: "leo",
		animal: "dragon",
		description: "Leo: ruling, warmth, generosity, faithful, initiative",
		fortune: "Dragon: lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic",
		birthmonth: "february",
		stone: "Amethyst",
		birthstone: "img/amethyst.jpg",
		picture: "img/leo.jpg",
		chinesepic: "img/dragon.jpg"
	},
	{
		sign: "virgo",
		animal: "snake",
		description: "Virgo: analyzing, practical, reflective, observation, thoughtful",
		fortune: "Snake: philosophical, organized, intelligent, intuitive, elegant, attentive, decisive",
		birthmonth: "october",
		stone: "Opal",
		birthstone: "img/opal.jpg",
		picture: "img/virgo.jpg",
		chinesepic: "img/snake.jpg"
	},
	{
		sign: "libra",
		animal: "horse",
		description: "Libra: balance, justice, truth, beauty, perfection",
		fortune: "Horse: adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong",
		birthmonth: "november",
		stone: "Topaz",
		birthstone: "img/topaz.jpg",
		picture: "img/libra.jpg",
		chinesepic: "img/horse.jpg"
	},
	{
		sign: "scorpio",
		animal: "goat",
		description: "Scorpio: transient, self-willed, purposeful, unyielding",
		fortune: "Goat: tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm",
		birthmonth: "may",
		stone: "Emerald",
		birthstone: "img/emerald.jpg",
		picture: "img/scorpio.jpg",
		chinesepic: "img/goat.jpg"
	},
	{
		sign: "sagittarius",
		animal: "monkey",
		description: "Sagittarius: philosophical, motion, experimentation, optimism",
		fortune: "Monkey: quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart",
		birthmonth: "august",
		stone: "Peridot",
		birthstone: "img/peridot.jpg",
		picture: "img/sagittarius.jpg",
		chinesepic: "img/monkey.jpg"
	},
	{
		sign: "capricorn",
		animal: "rooster",
		description: "Capricorn: determination, dominance, perservering, practical, willful",
		fortune: "Rooster: honest, energetic, intelligent, flamboyant, flexible, diverse, confident",
		birthmonth: "december",
		stone: "Tanzanite",
		birthstone: "img/tanzanite.jpg",
		picture: "img/capricorn.jpg",
		chinesepic: "img/rooster.jpg"
	},
	{
		sign: "aquarius",
		animal: "dog",
		description: "Aquarius: knowledge, humanitarian, serious, insightful, duplicitous",
		fortune: "Dog: loyal, sociable, courageous, diligent, steady, lively, adaptable, smart",
		birthmonth: "april",
		stone: "Diamond",
		birthstone: "img/diamond.jpg",
		picture: "img/aquarius.jpg",
		chinesepic: "img/dog.jpg"
	},
	{
		sign: "pisces",
		animal: "pig",
		description: "Pisces: fluctuation, depth, imagination, reactive, indecisive",
		fortune: "Pig: honorable, philanthropic, determined, optimistic, sincere, sociable",
		birthmonth: "july",
		stone: "Ruby",
		birthstone: "img/ruby.jpg",
		picture: "img/pisces.jpg",
		chinesepic: "img/pig.jpg"
	}
]

function getInfo() {
	var sign = document.getElementById("sign").value
	for(i=0; i<signObject.length; i++) {
		if (sign == signObject[i].sign) {
			document.getElementById("allsigns").innerHTML="Your Zodiac sign is a " + signObject[i].description
			document.getElementById('image').src = signObject[i].picture
		return
		} else {
			document.getElementById("allsigns").innerHTML="Not a zodiac sign"
		}
	}
}
function animalInfo() {
	var animal = document.getElementById("animal").value
	for(i=0; i<signObject.length; i++) {
		if (animal == signObject[i].animal) {
			document.getElementById("allsigns").innerHTML="Your Chinese animal is a " + signObject[i].fortune
			document.getElementById('image').src = signObject[i].chinesepic
		return
		} else {
			document.getElementById("allsigns").innerHTML="Not an animal sign"
		}
	}
}
function birthInfo() {
	var birthmonth = document.getElementById("birthmonth").value
	for(i=0; i<signObject.length; i++) {
		if (birthmonth == signObject[i].birthmonth) {
			document.getElementById("allsigns").innerHTML="Your birthstone is " + signObject[i].stone
			document.getElementById('image').src = signObject[i].birthstone
		return
		} else {
			document.getElementById("allsigns").innerHTML="Not a birth month sign"
		}
	}
}


function clearBox(birthInfo)
{
    document.getElementById(elementID).innerHTML = "";
}


// function myFunction() {
// 	document.getElementById('myForm').reset();
// }

//	Enter Key
// document.onkeydown = function (a) {
// 	if(a.keyCode == 13) {
// 		a.preventDefault();
// 	if(the element clicked is '#sign') {
	
// 	}


	
// 	if (the element clicked is '#news_gallery li .over') {
//     var article = $('#news-article .news-article');
// } else if (the element clicked is '#work_gallery li .over') {
//     var article = $('#work-article .work-article');
// } else if (the element clicked is '#search-item li') {
//     var article = $('#search-item .search-article');
// };
// 		getInfo();
// 	}
// 	}
// ;


// Find out element user clicks
//Pass through keydown
//Compare based on input that fires off the matching function
