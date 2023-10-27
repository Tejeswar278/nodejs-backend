import express from "express"

const router = express.Router();

router.get('/',(req,res) => {
    res.send('user router is sending data from auth')
})

export default router