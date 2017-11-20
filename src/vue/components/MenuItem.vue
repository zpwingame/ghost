<template>
    <div>
        <div class="city-header" v-finger:tap="showCitysPanel">
            选择城市
        </div>
        <div class='menu-panel' v-show='showMenuPanel'>
            <div class="mask" v-finger:tap="hideCitysPanel">
            </div>
            <div class="menu-container">
                <div class="container-left" id='scroller'>
                    <ul class='left--cont'>
                        <li v-for='convinceItem in convinces'  :class="['container-item',{'container-item--white':convinceItem.active===true}]" v-finger:tap='showHoverCitys'>
                            {{convinceItem.name}}
                        </li>
                    </ul>
                </div>
                <div class="container-right">
                    <ul class='right--cont'>
                        <li v-for='city in citys ' class='container-item' v-finger:tap="chooseCity">
                            {{city}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div id="scroller">
            <ul>
            <li class='test'   v-for='item in convinces'>
                {{item.name}}
            </li>
        </ul>
        </div> -->
      
    </div>
</template>
<script>
import Vue from 'vue'
import AlloyFinger from 'alloyfinger'
// import IScroll from 'iscroll'
import IScroll from './iscroll.js'
window.AlloyFinger = AlloyFinger;
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue); // use AlloyFinger's plugin


export default {
    data() {
        return {
            showMenuPanel: true,
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
                    name: '江西1',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西2',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西3',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西4',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西5',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西6',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西7',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西8',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西9',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西10',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西11',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西12',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西13',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西14',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西15',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西16',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西17',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西18',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西19',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
                {
                    name: '江西20',
                    citys: [
                        '江西', '厦工', '玩到', 'd', 'd', 'd',
                    ],
                    active: false
                },
            ],
            citys: []
        }
    },
    mounted() {
        this.citys = this.convinces[0].citys;

        Vue.nextTick(() => {
            var myScroll = new IScroll('#scroller', { mouseWheel: true });
        })
    },
    methods: {
        hideCitysPanel() {
            this.showMenuPanel = false;
        },
        showCitysPanel() {
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

.city-header {
  text-align: center;
}
.menu-panel {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
  .menu-container {
    display: flex;
    height: 400px;
    background: white;
    z-index: 11;
    position: relative;

    .container-left {
      flex: 1 1 40%;
      border-right: 1px solid #ccc;
      background: #ccc;

      height: 400px;
      overflow: hidden;
      .left--cont {
        .container-item {
          height: 50px;
          line-height: 50px;
        }
        .container-item--white {
          background: white;
        }
      }
    }
    .container-right {
      flex: 1 1 60%;
      background: white;
      z-index: 11;
      .right--cont {
        .container-item {
          list-style: none;
          border-bottom: 1px solid #ccc;
          height: 50px;
          line-height: 50px;
        }
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
