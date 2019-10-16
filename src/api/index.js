var router = require('express').Router();
var weblinksRouter = require('./weblinks');
var { redirectURL } = require('./weblinks/weblinks.controller')

router.use('/api/weblinks',weblinksRouter);
router.get('/api/:link', redirectURL)
router.get('/api',(req,res)=>{
	res.send('working')
})

module.exports = router;