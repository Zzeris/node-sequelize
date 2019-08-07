const express = require('express');
const CoffeeController = require('./controllers/CoffeeController');
const ShopController = require('./controllers/ShopController');

const router = express.Router();

router.post('/coffee', CoffeeController.store);
router.get('/coffee', CoffeeController.index);
router.put('/coffee/:id', CoffeeController.update);

router.post('/shop', ShopController.store);
router.get('/shop', ShopController.index);
router.put('/shop/:id', ShopController.update);

module.exports = router;