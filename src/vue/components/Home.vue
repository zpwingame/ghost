<template>
  <div>
      <div v-for='order in orderList'>{{order}}</div>
      <input type="button" value="" @click='test()'>
  </div>
</template>
<script>

</script>

<script>
export default {
   data(){
        return {
          orderList:[
          ]
        }
    },
    methods:{
        test(){
        this.orderList = JSON.parse('[{"msg_btn":"知道了","msg_key_str_2":"实收 5.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426836812","msg_date":"16:47","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单"},{"msg_btn":"知道了","msg_key_str_2":"实收 2.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426764786","msg_date":"16:46","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单"},{"msg_btn":"知道了","msg_key_str_2":"实收 3.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426803453","msg_date":"16:46","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单1"}]');
        }
    },
    mounted(){
        this.orderList = JSON.parse('[{"msg_btn":"知道了","msg_key_str_2":"实收 5.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426836812","msg_date":"16:47","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单"},{"msg_btn":"知道了","msg_key_str_2":"实收 2.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426764786","msg_date":"16:46","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单"},{"msg_btn":"知道了","msg_key_str_2":"实收 3.00元","msg_key_str_1":"101","msg_biz_key":"pullOrderSH","msg_status_color":"#65BF2B","msg_id":"1511426803453","msg_date":"16:46","msg_ico":"http://p1.meituan.net/orderdishyuyin/payment.png","msg_status":"已买单"}]');
    }
}
   
</script>
<style>

</style>
