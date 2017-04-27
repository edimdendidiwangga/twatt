const router = require('express').Router();
const twitterController = require('../controllers/twitter')

router.get('/:search', twitterController.getOauth)

module.exports = router
