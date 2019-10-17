var router = require('express').Router();
var weblinksRouter = require('./weblinks');

router.use('/api/weblinks',weblinksRouter);

module.exports = router;