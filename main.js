var box = document.getElementById("box");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var grammar = '#JSGF V1.0; grammar colors; public <color> = red | green | blue | circle | rectangle | square | left | right ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
	var prop = event.results[0][0].transcript;
	console.log(prop);
	document.getElementById("message").innerHTML = 'Speech Recognised : '+prop;
	boxChange(prop);
}

recognition.onspeechend = function(){
	console.log();
	recognition.stop();
	document.getElementById("message").innerHTML = 'Speech Listening ended.';
}

function listen(){
	recognition.start();
	console.log('Ready to receive a command. Listening...');
	document.getElementById("message").innerHTML = 'Ready to receive a command. Listening...';
}

function stopListening(){
	document.getElementById("message").innerHTML = 'Listening Stopped.';
	recognition.stop();
}

function getProperty(property){
	var margin;
	var elem = document.getElementById("box");
	if (elem.currentStyle){
	    var margin = elem.currentStyle.margin;
	} else if (window.getComputedStyle) {
	    var margin = window.getComputedStyle(elem, null).getPropertyValue(property);
	}
	console.log(margin);
	return margin;
}

function boxChange(prop){

	if(prop=="left"){
		var left = parseInt(getProperty("margin-left"));
		console.log(left);
		box.style.marginLeft = (left - left*0.2)+"px";
		document.getElementById("message").innerHTML = 'Box moved left.';
	}

	if(prop=="right"){
		var left = parseInt(getProperty("margin-left"));
		box.style.marginLeft = (left + left*0.2)+"px";
		document.getElementById("message").innerHTML = 'Box moved right.';
	}

	if(prop=="red"){
		box.style.backgroundColor = "red";
		document.getElementById("message").innerHTML = 'Color changed to red.';
	}

	if(prop=="green"){
		box.style.backgroundColor = "green";
		document.getElementById("message").innerHTML = 'Color changed to green.';
	}

	if(prop=="blue"){
		box.style.backgroundColor = "blue";
		document.getElementById("message").innerHTML = 'Color changed to blue.';
	}

	if(prop=="circle"){
		box.style.width = "200px";
		box.style.height = "200px";
		box.style.borderRadius = "300px";
		document.getElementById("message").innerHTML = 'Shape changed to circle.';
	}

	if(prop=="rectangle"){
		box.style.width = "400px";
		box.style.height = "200px";
		document.getElementById("message").innerHTML = 'Shape changed to rectangle.';
	}

	if(prop=="square"){
		box.style.width = "200px";
		box.style.height = "200px";
		document.getElementById("message").innerHTML = 'Shape changed to square.';
	}
	

}