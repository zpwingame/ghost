<style type="text/css">
	.tn-item{
		width: 100%;
		overflow: hidden;
		flex:none;
	}

	.tn-slider-row .tn-item{
		display: inline-block;
		height:100%;
	}
</style>
<template>
	<div class="tn-item" @click='clickHandler()'>
    	<slot></slot>
  	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'tn-item',

		props: {

		},

		data() {
			return {

			}
		},

		mounted() {

		},

		methods:{
			clickHandler() {
				this.$emit('on-item-click',{vm:this});
			}
		}

	}
</script>