var apiConsume = function(obj) {
	var articleType = obj.type;
	var startIndex = obj.index;
	$.ajax({
			url: "http://ign-apis.herokuapp.com/" + articleType + "?startIndex="+startIndex+"\u0026count=10",
			// url: "http://www.omdbapi.com/?t=Titanic",
      type: "GET",
      dataType: "jsonp",
      startIndex: startIndex,
      success: function(data) {
      	console.log(data);
      	var i = this.startIndex;
      	// if(articleType==="articles"){
      		$.each(data.data, function(){
      			var zero = "";
      			var title = this.metadata.headline || this.metadata.longTitle || this.metadata.name;
      			var subTitle = this.metadata.subHeadline || this.metadata.name || "";
      			var duration = this.metadata.duration || "";
      			var date = new Date(this.metadata.publishDate);
      			var year = date.getFullYear();
      			var month = date.getMonth() + 1;
      			var day = date.getDate();
      			var url = this.metadata.url || "http://www.ign.com/" + articleType + "/" + year +"/" + month + "/" + day + "/" + this.metadata.slug || "";
      			var image_url=this.thumbnails[2].url;
      			if(i < 10){
	      			zero = "0";
	      		}

	      		$("#content").append("<div id='" +i+ "' class='" + "articles" + "' onClick='getImage(\"" +i+ "\", \""+image_url+"\", \"" +url+ "\", \"" +title+ "\")'><div class='id'>" + zero + "" + i + "</div><div class='content_headers'><h1>"+title+"</h1><h2>"+subTitle+"</h2></div><div class='duration'>"+prettyPrintTime(duration)+"</div></div>");
	      		i++;
	      	});

      	obj.index = startIndex + 10;
      },

      error : function(jqXHR, textStatus, errorThrown) {
      },

			timeout: 120000
	});
};

var prettyPrintTime =function(time){ //time in seconds
	if(time === 0 || time === "" || time === null){
		return "";
	}

	var minutes = Math.floor(time / 60);
	var seconds = time - minutes * 60;
	var hours = Math.floor(time / 3600);

	if(minutes == 0){
		minutes="00";
	}

	if (seconds == 0){
		seconds = "00";
	}

	time_return_string = "";

	if (hours > 0){
		time_return_string=time_return_string+hours+":"+str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
	}
	else if (minutes > 0){
		time_return_string=minutes+':'+str_pad_left(seconds,'0',2);
	}
	else {
		time_return_string="0:"+str_pad_left(seconds,'0',2);
	}

	return time_return_string;

};

function getImage(id, img_url, url, title){
	$("#" + id).html("<a href='" +url+ "' target='_blank'><img class='preview_image' src='" +img_url+ "' /></a>");
	$("#" + id).addClass("preview_image_div").removeClass("articles");
}

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
};

// ux jquery



$("#content div.articles").on("hover", function(){

});
