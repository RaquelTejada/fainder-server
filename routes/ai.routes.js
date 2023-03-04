const router = require('express').Router()

const {
    getAllAi, editAi, deleteAi, saveAi, getOneAi, filteredAi, getFindCategory, getAiSorted
}
    = require('../controllers/ai.controller')

const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.get('/getAllAi', getAllAi)

router.put('/edit/:ai_id', isAuthenticated, editAi)

router.delete('/delete/:ai_id', isAuthenticated, deleteAi)

router.post('/saveAi', isAuthenticated, saveAi)

router.get('/getOneAi/:ai_id', isAuthenticated, getOneAi)

router.get('/filteredAi', filteredAi)

router.get('/getFindCategory/:category', getFindCategory)

router.get('/getAiSorted', getAiSorted)

module.exports = router