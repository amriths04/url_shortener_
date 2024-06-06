const express =require("express");
const router =express.Router();
const {handlegenerateNewShortURL} =require("../controllers/url")

router.post('/api/url',handlegenerateNewShortURL);

module.exports =router; 