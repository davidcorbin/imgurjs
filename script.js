function upload(file) {
	if (!file || !file.type.match(/image.*/)) return;
	document.body.className = "uploading";
	document.getElementsByTagName("button")[0].innerHTML = "Uploading...";
	var fd = new FormData();
	fd.append("image", file);
	fd.append("key", "6528448c258cff474ca9701c5bab6927");
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://api.imgur.com/2/upload.json"); 
	xhr.onload = function() {
		document.querySelector("#link").innerHTML = JSON.parse(xhr.responseText).upload.links.original;
		document.body.className = "uploaded";
		document.getElementsByTagName("img")[0].src = JSON.parse(xhr.responseText).upload.links.original;
		document.getElementsByTagName("button")[0].innerHTML = "Done!";
	}
	xhr.send(fd);
}
