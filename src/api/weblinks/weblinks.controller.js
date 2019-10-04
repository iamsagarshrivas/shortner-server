var {WeblinksService} = require('../../services');
var { NOT_FOUND_URL, CLIENT_URL } = require('../../config/constants');
module.exports = {
	generateLink:async ({body},res)=>{
		try{
			let weblink = await WeblinksService.create(body.originalLink);
			res.status(200).json({error:false, message:'Link shortening success.', shortLink: weblink.shortLink})
		}catch(error){
			console.log('[ERROR]:',error);
			res.status(500).json({error: true, message:'Unable to process'})
		}
	},
	redirectURL:async({params},res)=>{
		var shortLink = params.link;		
		var weblinkObj = await WeblinksService.findOneAndUpdate({shortLink: shortLink, isActive: true},{$inc:{"visitCount":1}});
		if(weblinkObj){
			res.redirect(301,`${CLIENT_URL}/${weblinkObj.shortLink}`)
		}
		else{
			res.redirect(301,NOT_FOUND_URL)
		}
	},
	originalURL: async({body},res)=>{		
		try{
			let weblink = await WeblinksService.findOne({shortLink: body.shortURL});
			res.status(200).json({error:false, originalLink: weblink.originalLink})
		}catch(error){
			console.log('[ERROR]:',error);
			res.status(500).json({error: true, message:'Unable to process'})
		}
	}
}