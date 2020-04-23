/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 * 
 * Texture files have to exist in the "textures" sub-directory.
 * 
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], //
function(exports, scenegraph, animation) {
    "use strict";

	/**
	 * 	Call methods form the scene-graph (tree) module to create the scene.
	 *
	 */
	function init() {

		var cubeNode = scenegraph.createNodeWithModel("cube", "cube", {scale:300});
		cubeNode.rotateTo([1.6, -3.87, 0]);
		cubeNode.setVisible(false);
				// BEGIN exercise myModel
				var myModel = scenegraph.createNodeWithModel("Haus vom Nikolaus", "myModel", {scale:200});		
		myModel.setVisible(false);
		// END exercise myModel
	        //used for testing Scanline
	        var insideOutPolyNode = scenegraph.createNodeWithModel("insideOutPoly", "insideOutPoly");
	        //used for testing cleanData
	        var dirtyTeapotNode = scenegraph.createNodeWithModel("dirtyTeapot", "teapot_dirty", {color:8});
	
	        //sphere exercise
	        var sphereNode = scenegraph.createNodeWithModel("sphere (Step1)", "sphere", {recursionDepth:1});
	        sphereNode.translate([0,500,0]);
	        sphereNode.scale([-0.3,-0.3,-0.3]);
	
	        var sphereNode2 = scenegraph.createNodeWithModel("sphere2 (Step2)", "sphere", {recursionDepth:2});
	        sphereNode2.translate([250,0,0]);
	        sphereNode2.scale([-0.2,-0.2,-0.2]);
	
	        var sphereNode3 = scenegraph.createNodeWithModel("sphere3 (Step3)", "sphere",  {scale:400, color:7});	
		
								// BEGIN cube
				var torusNode = scenegraph.createNodeWithModel("torus Vertex-Normals Aufgabe", "torus");	
		
		// END cube
	
	        // Set visibility of nodes (hide: set to false).
	        insideOutPolyNode.setVisible(false);
		torusNode.setVisible(false);
	        dirtyTeapotNode.setVisible(false);
	        sphereNode.setVisible(false);
	        sphereNode2.setVisible(false);
	        sphereNode3.setVisible(false);
		
		// animation
		
		        var sonne = scenegraph.createNodeWithModel("Sonne", "cube", {recursionDepth:1, scale:120, color:5});
        sonne.rotate([-100,-200,0]);
        var planet = scenegraph.createNodeWithModel("Earth", "sphere", {recursionDepth:1, scale:100, color:2}, sonne);
        planet.translate([600,0,0]);
        var moon = scenegraph.createNodeWithModel("Mond", "sphere", {recursionDepth:1, scale:30, color:7}, sonne);
        moon.translate([300,0,0]);
		
		var moon2 = scenegraph.createNodeWithModel("Vulkan", "sphere", {recursionDepth:1, scale:60, color:8}, planet);
        moon2.translate([400,0,0]);
        var moon3 = scenegraph.createNodeWithModel("Nibiru", "sphere", {recursionDepth:1, scale:40, color:8}, planet);
        moon3.translate([400,200,100]);
		moon3.rotate([400,200,100]);
		
        animation.assign(sonne, "rotate", {rotationSpeed:[0,0.02,0]});
        animation.assign(planet, "rotate", {rotationSpeed:[0,0.03,0]});
       	animation.assign(moon, "rotate", {rotationSpeed:[0,0.07,0]});
        sonne.setVisible(true);
        planet.setVisible(true);
        moon.setVisible(true);
		// end animation
	
	        return;

		//var cubeNode = scenegraph.createNodeWithModel("cube", "cube", {scale:100, textureURL:"brickWall.jpg"});		
		var cubeNode1 = scenegraph.createNodeWithModel("cube 1", "cube", {scale:70, textureURL:"stoneWall.jpg"});
		cubeNode1.translate([50,200,0]);
		//cubeNode1.rotate([1,1,1]);
		var cubeNode2 = scenegraph.createNodeWithModel("cube 2", "cube", {scale:50, textureURL:"uvTest.jpg"});
		cubeNode2.translate([-100,-400,0]);
		//cubeNode2.rotate([-1,-1,-1]);
		var cubeNode3 = scenegraph.createNodeWithModel("cube procedural texture", "cube", {scale:50, textureURL:"sampleProceduralRGB"});
		var cubeNode4 = scenegraph.createNodeWithModel("cube six faces texture", "cube", {scale:200, textureURL:"OrbitCube.gif", sixFacesTexture:true});
		var cubeNode5 = scenegraph.createNodeWithModel("cube 3x3 texture", "cube", {scale:50, textureURL:"cubeColor.png", sixFacesTexture:true});
		var cubeNode6 = scenegraph.createNodeWithModel("cube Escher texture", "cube", {scale:200, textureURL:"EscherCubeFish.gif", sixFacesTexture:true});
		
		//var insideOutPolyNode = scenegraph.createNodeWithModel("insideOutPoly", "insideOutPoly");

		var diamondNode = scenegraph.createNodeWithModel("diamond", "diamond");

		var torusNode = scenegraph.createNodeWithModel("torus", "torus");
		var torusNode1 = scenegraph.createNodeWithModel("torus 13", "torus", {r2:50,n2:13,color:8});

		var teapotNode = scenegraph.createNodeWithModel("teapot", "teapot", {color:0, scale:40});
		var dirtyTeapotNode = scenegraph.createNodeWithModel("dirtyTeapot", "teapot_dirty", {color:8});
		//teapotNode.rotate([1,1,1]);
		
		var waltheadNode = scenegraph.createNodeWithModel("walthead", "walthead", {color:8});
		
		var plainNode1 = scenegraph.createNodeWithModel("plain", "plain", {scale:200, color:9, textureURL:"land_ocean_ice_2048.jpg"});		

		var emptyNode1 = scenegraph.createNodeWithModel("empty", "empty");		


        // BEGIN exercise Scenegraph		
		
		// Set parent-child relationships for scene-graph nodes.

        // END exercise Scenegraph		
        
        // Assign animations.
        // animation.assign(cubeNode, "move");
        // animation.assign(cubeNode1, "move");
        // animation.assign(cubeNode2, "rotate");
        
        // BEGIN exercise Rotating-Planet-Animation
        
        // Mind the the order of transformation types get mixed up
        // then traversing the hierarchy in the scene-graph.
        //
        // Animation of a Planet with an also rotation moon or a ring. 
        // The planet rotates around an small sun.        
        
        // END exercise Rotating-Planet-Animation

		 
		// Set visibility of nodes (hide: set to false).
		// Comment out what you want to see as the default is visible.
        // cubeNode.setVisible(false);
        cubeNode1.setVisible(false);
        cubeNode2.setVisible(false);
        cubeNode3.setVisible(false);
        cubeNode4.setVisible(false);
        cubeNode5.setVisible(false);
        cubeNode6.setVisible(false);
        insideOutPolyNode.setVisible(false);
        diamondNode.setVisible(false);
        torusNode.setVisible(false);
        torusNode1.setVisible(false);
        teapotNode.setVisible(false);
        dirtyTeapotNode.setVisible(false);
        waltheadNode.setVisible(false);
        plainNode1.setVisible(false);
        emptyNode1.setVisible(false);

        
		// Set the initially interactive node [by name].
		// If not set, it is the first node created.
		//scenegraph.setInteractiveNodeByName("sphere");
		//scenegraph.setInteractiveNode(torusNode);

		// Create a node for the light, which is not visible by default.
		var lightnode = scenegraph.createPointLightNode("light", "diamond");
				
		// Set light parameter.
		// ambientLI, pointLI, pointPos, specularLI, specularLIExpo
		scenegraph.setLights(0.5, 0.6, [200, 200, 300], 4.0, 10);
	}

	// Public API.
	exports.init = init;
});
