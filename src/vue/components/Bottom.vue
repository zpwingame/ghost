<template lang="html">
  <div class="bottom-container">
      <div class="mask">
      </div>
      <div class="tip-left">
         <span class='logo'></span>
      </div>
      <div class="tip-center">
          <p class="title">{{appName}}</p><p class="sub-title">{{belong}}</p>
      </div>
      <div class="tip-right">
          <span class="download-btn" @click="close()">立即下载</span>
          <span class="close-btn"></span>
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            appName:'俏鱼天天掌柜',
            belong:'美团点评旗下餐饮资讯平台'
        }
    },
    methods:{
        close:function(){
            alert("close")
        }
    }
}
</script>

<style lang="sass">
.bottom-container {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    display:flex;
    align-items: center;
    padding: 0 10px 0 14px;
    .mask {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #000;
        opacity: 0.6;
        z-index: -1;
    }
    .tip-left{
        flex: 0 0 auto;
        .logo{
            width: 30px;
            height: 30px;
            background: url(//www.dpfile.com/app/app-ssp-h5/static/74efd91af50a49839061143b4551fd04.74efd91af50a49839061143b4551fd04.png) no-repeat;
            background-size: 100% 100%;
            display: block;
        }
    }
    .tip-center{
        flex: 1 1 auto;
        .title{
            font-size: 15px;
            line-height: 18px;
            color: #fff;
        }
        .sub-title{
            color: #fff;
            font-size: 12px;
        }


    }
    .tip-right{
        flex: 0 0 auto;
        .download-btn{
            width: 80px;
            height: 30px;
            font-size: 13px;
            color: #fff;
            background-color: #D43D3E;
            border-radius: 4px;
            display: inline-block;
            line-height: 30px;
            text-align: center;
        }
        .close-btn{
            display: inline-block;
            width: 12px;
            height: 12px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR…NHvwd4QM4zAhXW4xo4GAxHnJ4BQx56ZLLJQw99NsH1Hr8t/33sHIiVk84vAAAAAElFTkSuQmCC) no-repeat;
            background-size: 100% 100%;
            margin-left: 8px;
        }
    }

}
</style>
