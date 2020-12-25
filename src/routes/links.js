/**
 * Archivo para definir las rutas de los links
 */
const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

/**
 * Ruta para redireccionar al form de añadir Link
 */
router.get('/add', isLoggedIn, (req, res) => {
    res.render('./links/add');
});

/**
 * Ruta para añadir un nuevo Link
 */
router.post('/add', isLoggedIn, async(req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Link Registrado Exitosamente');
    res.redirect('/links');
});

/**
 * Ruta para eliminar un Link
 */
router.get('/delete/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Link Removido Exitosamente');
    res.redirect('/links');
});

/**
 * Ruta para obtener el link a editar
 */
router.get('/edit/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', { link: links[0] });
});

/**
 * Ruta para editar un Link
 */
router.post('/edit/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Link Actualizado Exitosamente');
    res.redirect('/links');
});

/**
 * Ruta para seleccionar los links de la BD
 */
router.get('/', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});
module.exports = router;