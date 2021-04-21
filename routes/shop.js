const express = require('express');
const path = require('path');
const adminData = require('./admin');


router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.product;
    res.render('shop',{prods: products, docTitle: 'Shop'});
    //console.log();
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
