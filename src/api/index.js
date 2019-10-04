var router = require('express').Router();
var weblinksRouter = require('./weblinks');
var { redirectURL } = require('./weblinks/weblinks.controller')

router.use('/weblinks',weblinksRouter);
router.get('/:link', redirectURL)

module.exports = router;