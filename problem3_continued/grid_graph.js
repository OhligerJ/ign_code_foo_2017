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
	this.links = links; // [Node1, Node2,...] Nodes this node is linked to
}

function Graph(n) {
	this.dimensions = n;
	this.nodes = [];
}

Node.prototype.addLink = function(node) {
  this.links.push(node);
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.generate = function(n){
	var grid_nodes = Math.pow(n, 2);
	this.dimensions = n;

	for(var i=0; i<grid_nodes;i++){
		var node = new Node(rand(0, grid_nodes), i, []);
		this.addNode(node);
	}


	// create paths

};

Graph.prototype.boggleSequences = function(){
	var seq_val = Math.pow(this.dimension, 2);
};