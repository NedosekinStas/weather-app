const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requets/weather.request');

const router = express();

router.set('view engine', 'ejs');
router.use(express.static('public'));
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

router.post('/', async (req, res) => {
	const { city } = req.body
	const { weather, error } = await weatherRequest(city)
	res.render('index', { weather, error })
});

router.listen(3000, () => {
	console.log('server started ...');
});