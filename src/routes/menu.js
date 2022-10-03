const { Router } = require('express');
const { addMenu, getMenus, autocomplete } = require('../Components/MenuTable/menutable');
const router = Router();

router.post('/', addMenu);
router.get('/', getMenus);
router.get('/search', autocomplete);

module.exports = router;