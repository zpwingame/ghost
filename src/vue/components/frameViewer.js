import { FRAME_VIEWER_SIZE_RATIO, ALL_KEY } from './constant'
import 'm/static/js/transform'
import thumbnailSlider from 'static/component/tn-slider.vue'
import thumbnailItem from 'static/component/tn-item.vue'
export default window.Vue.extend({
    template:`
    <div class="frameViewer" :style="viewerStyle" ref="container">
        <img src="/static/img/detail/icon_close.png" class="close-btn" width="21" height="21" @click="closeViewer">
        <div class="frame-navi">
            <thumbnail-slider direction='column' :count='5' :index="currentFrameIndex">
                <img src="/static/img/detail/icon_up.png" class="thumbnail-nav thumbnail-nav-prev" slot='tn-prev'>
                <thumbnail-item v-for='(frame,index) in currentFrameList' @click.native="setUserSelectedIndex(index)">
                    <img class="frame-image" :src="frame.imageList[0].minImageUrl" :class="{active: currentFrameIndex === index}">
                    <p>销售状态</p>
                </thumbnail-item>
                <img src="/static/img/detail/icon_up.png" class="thumbnail-nav thumbnail-nav-next" slot='tn-next'>
            </thumbnail-slider>
        </div>
        <div class="frame-carousel-box">
            <div class="frame-filter">
                <span v-for="type in types" class="frame-type" @click="setUserSelectedType(type)" :class="{active:type === currentType}">{{type}}({{frameData[type].length}})</span>
            </div>
            <div class="frame-carousel">
                <img :src="currentFrame.imageList[0].midImageUrl" class="big-frame-img">
                <a class="showBigLink" target="_blank" :href="currentFrame.imageList[0].maxImageUrl">
                    <img src="/static/img/detail/icon_zoom.png" alt="" width="14" height="14">
                    查看大图
                </a>
            </div>
        </div>
        <div class="frame-info">
            <div class="main-info-box">
                <div class="info-row title">
                    <h3 class="frameName">{{currentFrame.roomShow || '商住'}}</h3>
                    <span class="status" :data-status="currentFrame.status">{{currentFrame.status}}</span>
                </div>
                <div class="info-row">
                    <span class="info-name">建筑面积:</span>
                    <span class="info-txt">{{currentFrame.areaShow.value}}{{currentFrame.areaShow.unit}}</span>
                </div>
                <div class="info-row" v-if="currentFrame.faceName">
                    <span class="info-name">户型朝向:</span>
                    <span class="info-txt">{{currentFrame.faceName}}</span>
                </div>
                <div class="info-row">
                    <span class="info-name">参考总价:</span>
                    <span class="info-txt">{{currentFrame.totalPriceShow.value}}{{currentFrame.totalPriceShow.unit}}</span>
                    <span class="price-calculator" v-if="currentFrame.downPayShow">
                        <div class="price-window">
                            <span>参考首付：{{currentFrame.downPayShow.value}}{{currentFrame.downPayShow.unit}}</span>
                            <span>参考月供：{{currentFrame.monthlyPayShow.value}}{{currentFrame.monthlyPayShow.unit}}</span>
                            <span class="remark">*按首付{{sfRate}}%，贷款{{payYears}}年计算</span>
                        </div>
                    </span>
                </div>
            </div>
            <div class="info-panel">
                <h3 class="panel-name">户型特点</h3>
                <div class="field-row">
                    <span class="field-name">阳台：</span>
                    <span class="field-txt">增加自然采光/丰富观景视野</span>
                </div>
                <div class="field-row" v-for="i in 10">
                    <span class="field-name">明厨明卫：</span>
                    <span class="field-txt">厨房近大门，5个明卫配置有效错峰，</span>
                </div>
                <h3 class="panel-name">注意点</h3>
                <div class="field-row" v-for="i in 8">
                    <span class="field-name">明厨明卫：</span>
                    <span class="field-txt">厨房近大门，5个明卫配置有效错峰，</span>
                </div>
            </div>
        </div>
    </div>`,
    data (){
        return {
            viewerStyle:{
                height : '',
                minHeight : ''
            },
            userSelectedType : '',
            userSelectedIndex : -1
        }
    },
    mounted (){
        this.resize();
        window.addEventListener('resize',function(){
            this.resize()
        }.bind(this))
    },
    components : {
        thumbnailSlider,
        thumbnailItem
    },
    props:{
        types : {
            type : Array,
            required : true
        },
        sfRate : {
            type : Number,
            required : true,
            default : 30
        },
        payYears : {
            type : Number,
            required : true,
            default : 30
        },
        sizeRatio:{
            type : Number,
            default: FRAME_VIEWER_SIZE_RATIO
        },
        frameData : {
            type : Object,
            required : true
        },
        selectedFrameType: {
            type : String,
            default : ALL_KEY
        },
        selectedFrameIndex : {
            type : Number,
            required : true
        }
    },
    computed : {
        currentFrameList () {
            return this.frameData[this.currentType]
        },
        currentType () {
            return this.userSelectedType || this.selectedFrameType
        },
        currentFrame () {
            return this.currentFrameList[this.currentFrameIndex]
        },
        currentFrameIndex () {
            return this.userSelectedIndex === -1 ?  this.selectedFrameIndex : this.userSelectedIndex
        }
    },
    methods:{
        setUserSelectedType (type) {
            this.userSelectedType = type;
            this.userSelectedIndex = 0
        },
        setUserSelectedIndex (index) {
            this.userSelectedIndex = index
        },
        closeViewer (){
            this.$emit('close');
        },
        resize (){
            if(!this.$refs.container) return; // fix resize issue when frameViewer is hidden
            let width = this.$refs.container.offsetWidth;
            let height = width * this.sizeRatio + 'px';
            this.viewerStyle.height = height;
            this.viewerStyle.minHeight = height
        },
    },

})
