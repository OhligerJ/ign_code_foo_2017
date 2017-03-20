function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function Node(value, position, links){
	this.position = position; // Integer 0 <= i < n^2. Integer values are much easier to compare than arrays, or even object values.
	// Therefore, grids will be labeled left-to-right, then top to bottom, in ascending order. 
	// ex position representation for a 3x3 grid:
	// 0,1,2
	// 3,4,5
	// 6,7,8
	
	this.value = value; //a whole integer 0..9
	this.links = links // [Node1, Node2,...] Nodes this node is linked to
}

function Grid(n) {
	this.dimensions = n;
	this.nodes = [];
}

Node.prototype.addLink = function(end) {  
  this.links.push(end);
};