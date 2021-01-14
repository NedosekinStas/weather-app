const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requets/weather.request');

const router = express();

router.set('view engine', 'ejs');
router.use(express.static('public'));
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
	const { city } = req.body
	weatherRequest(city)
	res.render('index')
});

router.listen(3000, () => {
	console.log('server started ...');
});