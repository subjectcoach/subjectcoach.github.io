var Handler = {
	multiplyByTwo:function(param){
		// output will be Not a number if nothing comes through
		if(param == 'undefined' || !param) {
			this.updater("value not provided");
		}
		else {
			param = parseInt(param);
			var param_multiple = 2 * param;
			this.updater(param_multiple);
		}
	},
	updater:function(val) {
		document.getElementById("result").innerHTML = val;
	}
}