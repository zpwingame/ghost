import Vue from 'vue';

let vm = new Vue({
	el:'#app',
	data:{
		show:true,
		number: 0,
	    animatedNumber: 0
	},
	watch: {
    number: function(newValue, oldValue) {
      var vm = this
      var animationFrame
      function animate (time) {
        TWEEN.update(time)
        animationFrame = requestAnimationFrame(animate)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0)
        })
        .onComplete(function () {
          cancelAnimationFrame(animationFrame)
        })
        .start()
      animationFrame = requestAnimationFrame(animate)
    }
  }

})
