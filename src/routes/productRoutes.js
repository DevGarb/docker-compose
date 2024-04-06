const express = require('express');
const router = express.Router();

const mockProduct ={
    id:1,
    name: 'Tenis'
}

router.get('/', (req, res) => {
    res.send(mockProduct)
});

module.exports =  router;






