const express = require('express');
const app = express();
const port = 8081;

function generateHtml() {

	const html = (
		`
			<html>
				<head>
					<link rel="stylesheet" href="https://s3-ap-southeast-2.amazonaws.com/coconut-water/main.css">
				</head>
				<body>
					${generateRandomImage()}
					<br>
					<a href="/">Refresh</a>
				</body>
			</html>
		`
	);

	return `<!doctype html>${html}`;

}

function randomiseBetweenTwoNumbers(min = 0, max = 1) {

	const baseRandom = Math.random();
	const maxMinusMin = max - min;
	const maximisedRandom = (baseRandom * maxMinusMin) + min;

	return Math.round(maximisedRandom);

}

function generateRandomImage() {

	const min = 150;
	const max = 300;
	const width = randomiseBetweenTwoNumbers(min, max);
	const height = randomiseBetweenTwoNumbers(min, max);

	return `<img src="http://placekitten.com/g/${width}/${height}">`;

}

app.get('/', (request, response) => {

	const html = generateHtml();

	response.send(html);

});

app.listen(port, () => console.log(`listening on port ${port}`));
