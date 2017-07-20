import AlloyFinger from 'AlloyFinger';
 import './transform.js';
 var el = document.getElementById("testImg");
  Transform(el);
  window.el = el;
  console.log(el)
  var initScale = 1;
  var gesture = new AlloyFinger(el, {
	  rotate: function (evt) {
		  el.rotateZ += evt.angle;
	  },
	  pinchStart: function () {
		  initScale = el.scaleX;
	  },
	  pinch: function (evt) {
		  el.scaleX = el.scaleY = initScale * evt.scale;
	  },
	  pressMove: function (evt) {
		  el.translateX += evt.deltaX;
		  el.translateY += evt.deltaY;
	  },
	  tap: function (evt) {
		  //console.log(el.scaleX + "_" + el.scaleY + "_" + el.rotateZ + "_" + el.translateX + "_" + el.translateY);
		  //console.log("tap");
	  },
	  doubleTap: function (evt) {
		  //console.log("doubleTap");
	  },
	  longTap: function (evt) {
		  //console.log("longTap");
	  },
	  swipe: function (evt) {
		  //console.log("swipe" + evt.direction);
	  }
});
