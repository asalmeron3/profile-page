require('dotenv').config();
const express = require('express');
const cors = require('cors');

const projectsRoutes = require('./routes/projects');
const PORT = process.env.PORTc || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});