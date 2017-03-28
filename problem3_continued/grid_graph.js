function Node(value, position, links){
	this._value = value; //a whole integer 0..9
	this._position = position; // x,y dimensions. this allows us to create edges programmatically. upper left will have coordinates 1,1, lower right will have coordinates n,n
	this._links = links; // [Node1, Node2,...] Nodes this node is linked to
	this._valid = true; // potentially used for iteration optimization
	this._bs_array=[];
}

function Grid(n) {
	this._dimensions = n;
	this._nodes = [];
}

//rand to be used for generating random numbers for the grid
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

Node.prototype.addLink = function(node) {
  if(node !== null){
  	this._links.push(node);
  }
};

Node.prototype.getX = function(){
	return this._position[0];
};

Node.prototype.getY = function(){
	return this._position[1];
};

Grid.prototype.addNode = function(node){
	this._nodes.push(node);
};

Grid.prototype.findNodeByCoordinates = function(x,y){
	if( (x <= this._dimensions) && (y<=this._dimensions) ){
		return null;
	}
	return this._nodes[(x + y) - 1];
};

Grid.prototype.generate = function(n){
	var grid_nodes = Math.pow(n, 2);
	this._dimensions = n;

	for(var i=0; i < grid_nodes; i++){
		var x = (i % n) + 1;
		var y = Math.floor(i / n) + 1;
		var node = new Node(rand(0, grid_nodes), [x,y], []);
		this.addNode(node);
	}

	// create directed links/edges without creating any cycles; pattern is: left-to-right for horizontal or diagonal, down for vertical
	this._nodes.forEach(function(node){
		var hor = this.getX();
		var vert = this.getY();

		//if these don't exist, it simply won't add to the list
		node.addLink(this.findNodeByCoordinates(hor+1, vert)); //node to the right
		node.addLink(this.findNodeByCoordinates(hor+1, vert+1)); // node down 1 and right 1
		node.addLink(this.findNodeByCoordinates(hor+1, vert-1)); // node up 1 and right 1
		node.addLink(this.findNodeByCoordinates(hor, vert-1)); // node directly below
	});
};

Grid.prototype.boggleSequences = function(){
	var match_val = Math.pow(this._dimensions,2);
	var cur_path_val = 0;
	var cur_path=[];

	this._nodes.forEach(function(node){
		this._bs_array = this.pathIteration(node, match_val, cur_path_val, cur_path);
	});

	return bs_array;
};

Grid.prototype.pathZeros = function(node, path){
	node._links.forEach(function(node){
		// get all paths stemming from this node that have nodes whose value is zero
	});
};

Grid.prototype.pathIteration = function(node, match_val, path_val, path){
	path_val += node.value;
	path.push(node);

	if(path_val < match_val){ //if we haven't hit our target, iterate over this node's links
		node._links.forEach(function(node){
			this.pathIteration(node, match_val, path_val, path);
		});
	} else if (path_val===match_val) { // ding ding ding
		this._bs_array.push(path);

	} else { // we've gone over; no more iteration from this node

	}
};

Grid.prototype.display = function(){
	//display this for an HTML page
};