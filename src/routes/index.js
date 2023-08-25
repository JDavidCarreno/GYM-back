const { Router } = require('express');
const router = Router();
const prisma = require('../../utils/prisma');

router.get('/prueba', (req, res) => {
    res.send('Todo ok');
});

router.post('/create', async (req, res) => {
    try {
        const { name, age } = req.body;
        console.log(name);
        const newUser = await prisma.user.create({
            data: {
              name,
              age
            }
          });
        console.log(newUser);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

module.exports = router;

