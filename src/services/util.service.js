var { URL } = require('../config/constants');
module.exports = {
	randomURL:()=>{
		try{
			var randString = Math.random().toString(36).substring(2, 5) +"-"+ Math.random().toString(36).substring(2, 7);
			return randString;
		}
		catch(error){
			throw error
		}
	}
}