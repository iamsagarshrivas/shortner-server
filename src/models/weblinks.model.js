const { Schema, model } = require('mongoose');

var weblinksSchema = new Schema({
	originalLink:{
		type: String,
		required: true
	},
	shortLink:{
		type: String,
		required: true,
		unique: true
	},
	createdBy:{
		type: Schema.Types.ObjectId,
		// ref: users
	},
	visitCount:{
		type: Number,
		default: 0
	},
	isActive:{
		type: Boolean,
		default: true
	}
},{
	timestamps: true
})

module.exports = model('weblink', weblinksSchema);