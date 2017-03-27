function Node(value, position, links){
	this.value = value; //a whole integer 0..9
	this.position = position; // x,y dimensions. this allows us to create edges programmatically. upper left will have coordinates 1,1, lower right will have coordinates n,n
	this.links = links; // [Node1, Node2,...] Nodes this node is linked to
}

function Graph(n) {
	this.dimensions = n;
	this.nodes = [];
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

Node.prototype.addLink = function(node) {
  if(node !== null){
  	this.links.push(node);
  }
};

Node.prototype.getX = function(){
	return this.position[0];
};

Node.prototype.getY = function(){
	return this.position[1];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.findNodeByCoordinates = function(x,y){
	if(this.nodes( (x + y) - 1) >= Math.pow(this.dimensions, 2)){
		return null;
	}
	return this.nodes[(x + y) - 1];
};

Graph.prototype.generate = function(n){
	var grid_nodes = Math.pow(n, 2);
	this.dimensions = n;

	for(var i=0; i < grid_nodes; i++){
		var x = (i % n) + 1;
		var y = Math.floor(i / n) + 1;
		var node = new Node(rand(0, grid_nodes), [x,y], []);
		this.addNode(node);
	}

	// create directed links/edges without creating any cycles; pattern is: left-to-right for horizontal or diagonal, down for vertical
	this.nodes.forEach(function(node){
		var hor = this.getX();
		var vert = this.getY();

		//if these don't exist, it simply won't add to the list

		node.addLink(this.findNodeByCoordinates(hor+1, vert)); //node to the right
		node.addLink(this.findNodeByCoordinates(hor+1, vert+1)); // node down 1 and right 1
		node.addLink(this.findNodeByCoordinates(hor+1, vert-1)); // node up 1 and right 1
		node.addLink(this.findNodeByCoordinates(hor, vert-1)); // node directly below

	});
};

Graph.prototype.boggleSequences = function(){
	var seq_val = Math.pow(this.dimension, 2);
};