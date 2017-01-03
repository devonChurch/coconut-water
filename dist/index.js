const express = require('express');
const app = express();

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

	const randomImage = generateRandomImage();

	response.send(randomImage);

});

app.listen(3000);
