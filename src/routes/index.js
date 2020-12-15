/**
 * Archivo para definir las rutas del proyecto
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Word');
});

module.exports = router;