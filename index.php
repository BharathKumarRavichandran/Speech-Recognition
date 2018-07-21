<!DOCTYPE html>
<html>
<head>
	<title>Speech Recognition</title>
	<style type="text/css">
		
		#title{
			font-family: "Comic Sans MS";
			font-size: 50px;
			margin-top: 6vh;
		}

		#box{
			width: 400px;
			height: 300px;
			background-color: grey;
			margin-top: 5vh;
			margin-left: 80vh;
		}

		#message{
			margin-top: 30px;
			font-size: 17px;
		}

		#note{
			margin-top: 30px;
			font-size: 21px;
			color: red;
		}

		#grammars{
			margin-top: 40px;
			font-size: 21px;
			color: green;
			font-family: Trebuchet MS;
		}

	</style>
</head>
<body>

	<div style="text-align: center;">
		<div id="title">Speech Recognition</div>
	</div>
	<div style="text-align: center;">
		<div id="grammars">Grammars allowed : red, green, blue, circle, rectangle, square, left, right.</div>
	</div>
	<div style="position: relative;">
		<div id="box"></div>
	</div>
	<div style="text-align: center; margin-top: 10vh;">
		<button id="listenBtn" onclick="listen();" style="margin: 10px;">Listen</button>
		<button id="stopBtn" onclick="stopListening();">Stop</button>
	</div>
	<div style="text-align: center;">
		<div id="message">Click ' Listen ' to listen.</div>
	</div>
	<div style="text-align: center;">
		<div id="note">Note : Active internet connection and microphone access are needed.</div>
	</div>

<script src="main.js"></script>
</body>
</html>