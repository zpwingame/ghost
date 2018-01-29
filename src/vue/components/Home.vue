<template>
  <div>
      <input type="button" value="" @click='test()'>
      <Hello/>
      <Test/>
  </div>
</template>
<script>

</script>

<script>
import Hello from './Hello.vue';
import Test from './Test.vue';
// console.log(Hello)
// export const DEFAULT_SHOW_BORDER = false;
export default {
   data(){
        return {
          orderList:[
          ]
        }
    },
    mounted(){
        // console.log($children)
    },
    components:{
        'Hello':Hello,
        'Test':Test
    }
}
   
</script>
<style>

</style>
