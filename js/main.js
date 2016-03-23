	var signObject = [
	{
		sign: "aries",
		animal: "rat",
		description: "Active, Demanding, Determined, Effective, Ambitious",
		fortune: "Intelligent, adaptable, quick-witted, charming, artistic, sociable",
		birthstone: "Garnet",
	},
	{
		sign: "taurus",
		animal: "ox",
		description: "Security, Subtle strength, Appreciation, Instruction, Patience",
		fortune: "Loyal, reliable, thorough, strong, reasonable, steady, determined",
		birthstone: "Aquamarine",
	},
	{
		sign: "gemini",
		animal: "tiger",
		description: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		fortune: "Enthusiastic, courageous, ambitious, leadership, confidence, charismatic",
		birthstone: "Sapphire",
	},
	{
		sign: "cancer",
		animal: "rabbit",
		description: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		fortune: "Trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers",
		birthstone: "Pearl",
	},
	{
		sign: "leo",
		animal: "dragon",
		description: "Ruling, Warmth, Generosity, Faithful, Initiative",
		fortune: "Lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic",
		birthstone: "Amethyst",
	},
	{
		sign: "virgo",
		animal: "snake",
		description: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		fortune: "Philosophical, organized, intelligent, intuitive, elegant, attentive, decisive",
		birthstone: "Opal",
	},
	{
		sign: "libra",
		animal: "horse",
		description: "Balance, Justice, Truth, Beauty, Perfection",
		fortune: "Adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong",
		birthstone: "Topaz",
	},
	{
		sign: "scorpio",
		animal: "goat",
		description: "Transient, Self-Willed, Purposeful, Unyielding",
		fortune: "Tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm",
		birthstone: "Emerald",
	},
	{
		sign: "sagittarius",
		animal: "monkey",
		description: "Philosophical, Motion, Experimentation, Optimism",
		fortune: "Quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart",
		birthstone: "Peridot",
	},
	{
		sign: "capricorn",
		animal: "rooster",
		description: "Determination, Dominance, Perservering, Practical, Willful",
		fortune: "Honest, energetic, intelligent, flamboyant, flexible, diverse, confident",
		birthstone: "Citrine",
	},
	{
		sign: "aquarius",
		animal: "dog",
		description: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		fortune: "Loyal, sociable, courageous, diligent, steady, lively, adaptable, smart",
		birthstone: "Diamond",
	},
	{
		sign: "pisces",
		animal: "pig",
		description: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		fortune: "Honorable, philanthropic, determined, optimistic, sincere, sociable",
		birthstone: "Ruby",
	}
]

function getInfo() {
	var sign = document.getElementById("sign").value
	for(i=0; i<signObject.length; i++) {
		if (sign == signObject[i].sign) {
			console.log("Your Zodiac characteristics: " + signObject[i].description)
		return
		}
		if (sign == signObject[i].animal) {
			console.log("Your Chinese fortune: " + signObject[i].fortune)
		return
		}
	}
		alert("Not a zodiac or chinese sign")
}