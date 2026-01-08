const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    const [rows] = await db.query('SELECT * FROM projects');
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { title, description, imgLink } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO projects (name, description, image_url) VALUES (?, ?, ?)',
            [title, description, imgLink]
        );
        res.status(201).json({ id: result.insertId, title, description, imgLink });
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: "Failed to create project" });
    }
});

module.exports = router;