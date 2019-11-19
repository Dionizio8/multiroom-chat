const router = require('express').Router();
const IndexController = require('../controllers/IndexController');

/**
 * Login
 */
router.get('/',IndexController.getIndex);

/**
 * Chat
 */
router.use('/chat',require('./chat'));

module.exports = router;