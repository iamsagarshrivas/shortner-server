var router = require('express').Router();
var {generateLink, originalURL} = require('./weblinks.controller');

router.post('/generateLink',generateLink);
router.post('/originalURL', originalURL);

module.exports = router;