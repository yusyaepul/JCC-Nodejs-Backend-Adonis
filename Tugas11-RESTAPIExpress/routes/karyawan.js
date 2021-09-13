var express = require('express');
var router = express.Router();

const KaryawanController = require('../controllers/karyawan')
/* GET users listing. */
router.get('/', KaryawanController.findAll);
router.post('/register', KaryawanController.register);
router.put('/login', KaryawanController.login);
router.get('/:name', KaryawanController.show);
router.post('/:name/siswa', KaryawanController.addSiswa);

module.exports = router;
