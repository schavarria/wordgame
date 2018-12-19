$(document).ready(function(){

var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];


var threeLetters = commonWords.filter(function(word){
	return word.length >= 3

})

var randomWord = threeLetters[Math.floor(Math.random() *threeLetters.length)]
console.log(randomWord)

var answer = ""

for(let i=0; i<randomWord.length; i++){
	answer+="_"
}

$(".word").html(answer)

var turns = 8 

var guesses =[]
	
$(".turns").html("Turns: " +turns)

$(".guess").on("change", function(){
	var char = $(".guess").val()
	char=char.toLowerCase()
	if (guesses.indexOf(char) === -1){
	guesses.push(char)

	for(let i=0; i<answer.length; i++){
		if (randomWord.charAt(i)===char){
			wordAr=answer.split("")
			wordAr[i]=char
			answer=wordAr.join("")
		}
	}
	turns--
	 var results = ""
	 if (turns>=0 && answer === randomWord){
	 	results ="YASSSSS! You won!!!"
	 	$(".main").css("background-image",'url("https://media.giphy.com/media/c1TtfpplJ6lwI/giphy.gif")')
	 }else if(turns > 0 && answer !== randomWord){
	 	results = "Keep trying.."
	 	$(".guess").val("")
	 }else{
	 	results = "Boooo.. You Lost! Answer: " + randomWord 
	 	$(".main").css("background-image",'url("https://media.giphy.com/media/N0qlaY3Uc4nWU/giphy.gif")')
	 }







}


	$(".word").html(answer)
	$('.turns').html("Turns: " +turns)
	$(".results").html(results)
	$(".letters").html("Your guesses: " + guesses)





})






})