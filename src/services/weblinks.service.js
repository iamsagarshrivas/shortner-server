var { WeblinksModel } = require('../models');
var { randomURL } = require('./util.service');
module.exports = {
	create:async (originalLink)=>{
		try{
			let newWeblink = new WeblinksModel({
				originalLink: originalLink,
				shortLink: randomURL(),
				createdBy: null,
				visitCount: 0
			});
			
			await newWeblink.save();			
			return newWeblink;
		}
		catch(error){
			throw error
		}
		
	},
	find:async (condition, projection={}, options={})=>{
		try{
			return await WeblinksModel.find(condition, projection, options);
		}catch(error){
			throw error
		}
	},
	findOne:async (condition, projection={}, options={})=>{
		try{
			return await WeblinksModel.findOne(condition, projection, options);
		}catch(error){
			throw error
		}
	},
	findOneAndUpdate:async (condition, update={})=>{
		try{
			return await WeblinksModel.findOneAndUpdate(condition,update)
		}catch(error){
			throw error
		}
	},
}