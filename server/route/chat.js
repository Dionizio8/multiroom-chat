const router = require('express').Router();
const ChatController = require('../controllers/ChatController');
const { check } = require('express-validator');

const validator = [
    check('apelido')
    .not().isEmpty()
    .withMessage('Apelido invalido !')
];

router.post('/',validator,ChatController.validator,ChatController.initChat);

router.get('/',ChatController.initChat);

module.exports = router;