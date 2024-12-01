const express = require('express');
const router = express.Router();
const { getAllJobs } = require('../controllers/jobController');

router.get('/', getAllJobs);

module.exports = router;
