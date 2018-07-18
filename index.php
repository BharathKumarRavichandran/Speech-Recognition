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
			margin-top: 10vh;
			margin-left: 80vh;
		}

		#message{
			margin-top: 50px;
		}

	</style>
</head>
<body>

	<div style="text-align: center;">
		<div id="title">Speech Recognition</div>
	</div>
	<div style="position: relative;">
		<div id="box"></div>
	</div>
	<div style="text-align: center; margin-top: 15vh;">
		<button id="listenBtn" onclick="listen();" style="margin: 10px;">Listen</button>
		<button id="stopBtn" onclick="stopListening();">Stop</button>
	</div>
	<div style="text-align: center;">
		<div id="message">Click ' Listen ' to listen.</div>
	</div>

<script src="main.js"></script>
</body>
</html>