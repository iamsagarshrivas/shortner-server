var {WeblinksService} = require('../../services');
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
	originalURL: async({body},res)=>{		
		try{
			let weblink = await WeblinksService.findOneAndUpdate({shortLink: body.shortURL},{$inc:{visitCount: 1}});
			res.status(200).json({error:false, originalLink: weblink.originalLink})
		}catch(error){
			console.log('[ERROR]:',error);
			res.status(500).json({error: true, message:'Unable to process'})
		}
	}
}