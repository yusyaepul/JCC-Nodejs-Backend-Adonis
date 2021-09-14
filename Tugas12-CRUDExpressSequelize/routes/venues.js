var express = require('express');
var router = express.Router();

const MainBersamaController = require('../controllers/mainBersama');

/* GET home page. */
router.get('/', MainBersamaController.findAll);
router.post('/', MainBersamaController.store);
router.get('/:id', MainBersamaController.show);
router.put('/:id', MainBersamaController.update);
router.delete('/:id', MainBersamaController.delete);

module.exports = router;
