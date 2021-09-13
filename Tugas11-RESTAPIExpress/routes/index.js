var express = require('express');
var router = express.Router();

const BootcampController = require('../controllers/bootcamp')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/karyawan', BootcampController.findAll);
router.post('/register', BootcampController.register);
router.post('/login', BootcampController.login);
router.post('/karyawan/:name/siswa', BootcampController.addSiswa);

module.exports = router;
