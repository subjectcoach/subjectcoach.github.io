var Handler = {
	multiplyByTwo:function(param){
		// output will be Not a number if nothing comes through
		param = parseInt(param);
		var param_multiple = 2 * param;
		document.getElementById("result").innerHTML = param_multiple;
	}
}