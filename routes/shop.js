const express= require('express');

const router= express.Router();

const shopController = require('../controller/shop_controller')

router.get('/mystores/:id',shopController.mystores)

module.exports=router;
