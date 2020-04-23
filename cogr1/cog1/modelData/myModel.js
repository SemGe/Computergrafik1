/**
 * 3D Data Store for a model.
 * Missing properties/arrays (commented out)
 * are mixed in from data module.
 *  
 * @namespace cog1.data
 * @module myModel
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @parameter scale is the edge length of the cube.
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		if(parameter) {
			var scale = parameter.scale;
			var textureURL = parameter.textureURL;
			// Each face shows a different area of the given texture (e.g, a dice).
			var sixFacesTexture = parameter.sixFacesTexture;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}
		if(textureURL == undefined){
			textureURL = "";
		}
		if(sixFacesTexture == undefined){
			sixFacesTexture = false;
		}

		// Instance of the model to be returned.
		var instance = {};
		
		instance.vertices = [
			// cube bottom (y=-1)
			//x, y, z
			[-1,-1, 1],
			[ 1,-1, 1],
			[ 1,-1,-1],
			[-1,-1,-1],
			// cube top (y=+1)		
			[-1,1, 1],
			[ 1,1, 1],
			[ 1,1,-1],
			[-1,1,-1],
			// roof top (y=+2)
			[ 0,2, 1],
			[ 0,2,-1],
			// chimney bottom	
			[-0.7,1.3,0.7],
			[-0.3,1.7,0.7],
			[-0.3,1.7,0.1],
			[-0.7,1.3,0.1],
			// chimney top (y=2)	
			[-0.7,2,0.7],
			[-0.3,2,0.7],
			[-0.3,2,0.1],
			[-0.7,2,0.1]
		];
		// Use default colors, implicitly.
		// instance.colors = data.colors;

		// Corners of the faces have to fit the texture coordinates.			
		// Faces: bottom/down, top/up, front, right, back, left. 
		instance.polygonVertices = [
			// cube
			[3,2,1,0],
			[4,5,6,7],
			[4,0,1,5],
			[1,2,6,5],
			[6,2,3,7],
			[3,0,4,7],
			// roof
			[4,5,8],
			[7,6,9],
			[4,8,9,7],
			[5,8,9,6],
			// chimney
			[10,11,12,13],
			[14,15,16,17],
			[10,11,15,14],
			[11,12,16,15],
			[12,13,17,16],
			[13,10,14,17]
		];	

		instance.polygonColors = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1];

		if( ! sixFacesTexture){
	        // Use default texture coordinates.
			// instance.textureCoord = [];	
			// For order of corners of faces, see polygonVertices.
			instance.polygonTextureCoord = [
				[1,2,3,0],
				[1,2,3,0],
				[1,0,3,2],
				[3,0,1,2],
				[3,0,1,2],
				[3,0,1,2]
			];
		} else {
			instance.textureCoord = [];
		}
		
		instance.textureURL = textureURL;

		data.applyScale.call(instance, scale);

		return instance;		
	};
});