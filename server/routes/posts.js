import express from 'express';

const router = express.Router();


// localhost:3000/posts
router.get('/', (req, res) =>  {
    res.send('THIs WORKS!');
});

export default router;