import Vue from 'vue';
import './vue-demo.scss'


window.vm = new Vue({
	el:'#app',
	template:`
	<div class='pop-container'>
		<div class="pop-panel">
			<div class="title-container">
				<div class='title'>点单详情</div>
				<div class='close' @click='closePanel()'></div>
			</div>
			<div class='order-info-container'>
				<div class='order-tips bgColor-@{color}'>
					<div class='main-tip'><span class='icon-@{color}'></span><span class='color-@{color}'>已退款</span></div>
					<div class='desc'>退款金额会在5个工作日内原路返回给顾客</div>
				</div>
				<div class='order-detail'>
					<div class="left-panel">
						<div class="top">
							<div class='table-number'>桌号：A1000</div>
							<div class='person-number'>5人就餐</div>
						</div>
						<div class="bottom">
							<div class='phone-text'>手机号码</div>
							<div class='phone-number'>15000000000</div>
						</div>
					</div>
					<div class="vertical-line">
					</div>
					<div class="right-panel">
						<div class='item-container'>
							<div>消费金额：</div>
							<div>¥100</div>
						</div>
						<div class='item-container'>
							<div>支付优惠：</div>
							<div>¥100</div>
						</div>
						<div class='item-container'>
							<div>优惠券抵扣：</div>
							<div>¥100</div>
						</div>
						<div class='item-container'>
							<div>抹零：</div>
							<div>¥100</div>
						</div>
						<div class='item-container'>
							<div>退款金额：</div>
							<div>¥100</div>
						</div>
						<div class="pay-money">
							<div>实付金额：</div>
							<div class='value'>¥100</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tabs">
				<div class="tab_titles">
					<div class="tab_title" :class="{'activce-tab-title':activeTab=='orderActive'}" @click="changeTab('order')">
						<span class="">点餐详情</span>
					</div>
					<div class="tab_title" :class="{'activce-tab-title':activeTab=='refundActive'}" @click="changeTab('refund')">
						<span class="">退款详情</span>
					</div>
				</div>
				<div class="tab order-container" v-if="activeTab ==='orderActive'">
					<div class="order-table-title">
						<div class="dish-name">菜品</div>
						<div class="dish-count">份数</div>
						<div class="dish-price">价格</div>
					</div>
					<div class='dish-time'>点菜时间：123123</div>
					<div class="list-container">
						<div class="order-list">
							<div class="dish-name">asd
							</div>
							<div class="dish-count">12</div>
							<div class="dish-price">11
							</div>
						</div>
					</div>
					<div class="remark"></div>
					<div class='price-container'>
						<div class='consume-price'><label>消费金额：</label><span>1</span></div>
						<div class='promotion-price'><label>优惠金额：</label><span>1</span></div>
						<div class='real-price'><label>支付金额：</label><span>1</span></div>
					</div>
				</div>
				<div class="tab order-container" v-if="activeTab ==='refundActive'">
					退款
				</div>
			</div>
		</div>
		<div class="over-layer">
		</div>
	</div>
	`,
	data:{
		activeTab:"orderActive"
	},
	mounted:function(){

	},
    components:{
    },
	methods:{
		changeTab(tab){
			if(tab==='order'){
				this.activeTab = 'orderActive';
			}else if(tab==='refund'){
				this.activeTab = 'refundActive';
			}
		},
		closePanel(){
			this.$destroy(true);
			console.log(123);
		}
	}
})
