if (typeof Calc !== "undefined") {
	window.ImageClick = {};
	ImageClick.enable = function(id) {
		Calc.controller.grapher.graphImages[id].clickableInfo.enabled = true;
	};
	ImageClick.disable = function(id) {
		Calc.controller.grapher.graphImages[id].clickableInfo.enabled = false;
	};
	ImageClick.setHover = function(id, src) {
		var imageRef = Calc.controller.grapher.graphImages[id];
		if (!imageRef.clickableInfo.enabled) {
			imageRef.clickableInfo.enabled = true;
		}
		imageRef.clickableInfo.hoveredImage = src;
		if (!imageRef.hoveredImageObj) imageRef.hoveredImageObj = new Image();
		imageRef.hoveredImageObj.src = src;
	};
	ImageClick.setPressed = function(id, src) {
		var imageRef = Calc.controller.grapher.graphImages[id];
		if (!imageRef.clickableInfo.enabled) {
			imageRef.clickableInfo.enabled = true;
		}
		imageRef.clickableInfo.depressedImage = src;
		if (!imageRef.depressedImageObj) imageRef.depressedImageObj = new Image();
		imageRef.depressedImageObj.src = src;
	};
	ImageClick.setRule = function(id, variable, val) {
		var imageRef = Calc.controller.grapher.graphImages[id];
		var rule = imageRef.clickableInfo.rules.filter(e => {
			return e.id === id;
		});
		if (rule.length > 0) {
			rule[0].assignment = variable;
			rule[0].expression = val;
		} else {
			imageRef.clickableInfo.rules = [];
			imageRef.clickableInfo.rules.push({id: id, assignment: variable, expression: val});
		}
		Calc.controller._hasUnsavedChanges = true;
		Calc.controller._requiresTickNextFrame = true;
		alert("Rule successfully set! Please save then reload to take effect");
	}
} else {
	alert("catastrophic failure")
}