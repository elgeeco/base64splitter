"use strict";

/*
*Split a (base64) string into some pieces
*@param base64Str 		string 		
*@param randomChunkSize	bool		default:false
*@param chunkFactor4	bool		default:false
*@param minExplodes		int        	default:5	
*@param maxExplodes		int        	default:10
*/

exports.explode = function(base64Str, randomChunkSize, chunkFactor4, minExplodes, maxExplodes){

	minExplodes 	= minExplodes || 5;
	maxExplodes 	= maxExplodes || 10;
	randomChunkSize = (!randomChunkSize) ? false : true; 
	chunkFactor4 	= (!chunkFactor4) ? false : true;

	if( minExplodes > maxExplodes ) maxExplodes = minExplodes;

	var explodes = minExplodes + Math.round((Math.random() * (maxExplodes - minExplodes)));

	var arr = [];
	var charLength = Math.floor(base64Str.length / explodes);

	var startPos = 0;

	for(var i=0; i < explodes; i++){

		var s = '';

		if( i == (explodes - 1) ){
			s = base64Str.substring( startPos );
		}else{
			var subtractNum = (randomChunkSize) ? Math.floor(Math.random() * charLength) : 0;
			var endPos = (i * charLength + charLength ) - subtractNum;
			
			if(chunkFactor4){
				var rest = endPos % 4;
				if( rest != 0){
					endPos = endPos - rest;
				} 
			}

			s = base64Str.substring( startPos, endPos );
			startPos = endPos;
		}

		arr.push(s);
	}

	return arr;

}

//SOME SAMPLE BASE64 DATA
exports.pdfImage = {
		filename: 'pdfimage.gif',
		filetype: 'gif',
		data:["R0lGODlhDQALANUAAP////b29u/v7+Xl5fLd3eLY2OnR0e/Cwuy+vsbGss",
			"LCwru7u7i4pPOlpbS0tLOzn6urq/GPj8GZmeyHh9uHh5iYhJWVjfZxcYuL",
			"i/Vra4ODg8lxcal2dnx8fPlZWXZ2dvhTU41pafVMTIFlZWZmZv8zM1xcXF",
			"JSUk5OTv8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
			"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUACoALAAAAAAN",
			"AAsAAAZbQJXKgtF0jgmhUoUBOAGpD2NpqVotCtJDaUl5vRaBw8TlmM1hxWnZ",
			"CQQEpcNgsVa2BY1UZF4XdggXIAggIhJ9KiEeGQYDBRMbhyMUCgsLDhAaKFQmJ52dKBVCQQA7"].join("")
};


exports.ghostImage = {
		filename: 'ghost.png',
		filetype: 'png',
		data: ["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",
				"S029T/pX1bf4caUBTlpAAAAAElFTkSuQmCC"].join("")
}



