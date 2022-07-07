const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', async (req, res, next) =>{

    try {
        let results = await db.all_client()
        res.json(results)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

router.post('/post', async (req, res) =>{
    
    try {
        let results = await db.add_client()
        res.json(results)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
    
})
router.patch('/update/:id/:name', async (req, res) =>{
    
    try {
        let results = await db.rm_client(req.params.id,req.params.name)
        res.json(results)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
    
})

router.delete('/delete/:id', async (req, res) =>{
    
    try {
        let results = await db.rm_client(req.params.id)
        res.json(results)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
    
})

module.exports = router