<template>
    <div>
        <div class="city-header" v-finger:tap="showCitysPanel">
            选择城市
        </div>
        <div class='menu-panel' v-if='showMenuPanel'>
            <div class="mask">
            </div>
            <div class="menu-container">
                <div class="container-left">
                    <ul>
                        <li v-for='convinceItem in convinces'  :class="['container-item',{'container-item--white':convinceItem.active===true}]" v-finger:tap="showHoverCitys">
                            {{convinceItem.name}}
                        </li>
                    </ul>
                </div>
                <div class="container-right">
                    <ul>
                        <li v-for='city in citys ' class='container-item' v-finger:tap="chooseCity">
                            {{city}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
import Vue from 'vue'
import AlloyFinger from 'alloyfinger'
window.AlloyFinger = AlloyFinger;
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue); // use AlloyFinger's plugin


export default {
    data() {
        return {
            showMenuPanel:false,
            convinces: [
                {
                    name: '上海1',
                    citys: [
                        'a', 'a', 'a', 'a', 'a', 'a',
                    ],
                    active: true
                },
                {
                    name: '江苏',
                    citys: [
                        'b', 'b', 'b', 'b', 'b', 'b',
                    ],
                    active: false
                },
                {
                    name: '浙江',
                    citys: [
                        'c', 'c', 'c', 'c', 'c', 'c',
                    ],
                    active: false
                },
                {
                    name: '江西',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
            ],
            citys: []
        }
    },
    methods: {
        showCitysPanel(){
            this.showMenuPanel = true;
        },
        showHoverCitys(event) {
            const name = event.target.innerText

            const chooseConvince = this.convinces.filter((item) => {
                return item.name === name;
            })
            this.citys = chooseConvince.map((city) => {
                return city.citys
            })[0];
            this.convinces.forEach((item => {
                item.active = false;
            }))
            chooseConvince[0].active = true;
            console.log(this.convinces.filter((item) => {
                return item.name === name;
            }))
            window.data = this.convinces;
        },
        chooseCity() {
            this.showMenuPanel = false;
        }
    }
}
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}
  .city-header{
    text-align: center;
}
.menu-panel {
  
    position: fixed;
    top:0;
    width:100%;
  .menu-container {
    display: flex;
    height: 400px;
    background: white;
    .container-left {
      flex: 1 1 40%;
      border-right: 1px solid #ccc;
      background: #ccc;
      .container-item {
        height: 50px;
        line-height: 50px;
      }
      .container-item--white {
        background: white;
      }
      z-index: 11;
    }
    .container-right {
      flex: 1 1 60%;
      background: white;
      z-index: 11;

      .container-item {
        list-style: none;
        border-bottom: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .mask {
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    zoom: 1;
    position: fixed;
    z-index: 10;
  }
}
</style>
