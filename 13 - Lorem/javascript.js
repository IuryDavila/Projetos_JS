const texto1 = "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie."
const texto2 = "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut."
const texto3 = "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
const texto4 = "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds."
const texto5 = "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat."
const texto6 = ""



function executar() {
	let Value = document.getElementById("valor").value
	console.log(Value)
	if (Value == 1) {
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = null
		document.getElementById("p3").innerHTML = null
		document.getElementById("p4").innerHTML = null
		document.getElementById("p5").innerHTML = null
	} else if(Value == 2){
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = texto2
		document.getElementById("p3").innerHTML = null
		document.getElementById("p4").innerHTML = null
		document.getElementById("p5").innerHTML = null
	}
	else if(Value == 3){
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = texto2
		document.getElementById("p3").innerHTML = texto3
		document.getElementById("p4").innerHTML = null
		document.getElementById("p5").innerHTML = null
	}
	else if(Value == 4){
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = texto2
		document.getElementById("p3").innerHTML = texto3
		document.getElementById("p4").innerHTML = texto4
		document.getElementById("p5").innerHTML = null
	}
	else if(Value == 5){
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = texto2
		document.getElementById("p3").innerHTML = texto3
		document.getElementById("p4").innerHTML = texto4
		document.getElementById("p5").innerHTML = texto5
	} else{
		document.getElementById("p1").innerHTML = texto1
		document.getElementById("p2").innerHTML = null
		document.getElementById("p3").innerHTML = null
		document.getElementById("p4").innerHTML = null
		document.getElementById("p5").innerHTML = null

	}
}
