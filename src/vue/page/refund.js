import Vue from 'vue';
import './refund.scss'

// "totalCurrentPrice":100,
// "totalPromotionDiscount":100,
// "totalCouponDiscount":100,
// "eraseZeroAmount":100,
// "totalRefundAmount":100,
// "totalConsumptionPrice":100
window.vm = new Vue({
    el: '#app',
    mounted: function() {
        this._dealData();
    },
    methods: {
        refundAll(){
            this.refund(true);
        },
        refund(allFlag){
            this.refundSkus = [];
            this.refundExtraFees = [];
            this.refundDishCartDiscnt = [];
            this.showDishOrderList.forEach(showRefundOrder=>{
                let choosedList = [];
                if(allFlag){
                    choosedList = showRefufndOrder.showDishList;
                }else{
                    choosedList= showRefundOrder.showDishList.filter(dish=>{
                        return dish.choosed === true;
                    })
                }
                console.log(choosedList);
                choosedList.forEach(item=>{
                    if(item.type==='order'){
                        this.refundSkus.push({
                            'skuId': item.skuId,
                            'count': item.editCount,
                            'currentPrice': item.currentPrice,
                            'suggestRefundPrice': item.suggestRefundPrice,
                            'orderId': item.orderId
                        })

                    }else if(item.type==='extra'){
                        this.refundExtraFees.push({
                            'id': item.id,
                            'count': item.editCount,
                            'price': item.currentPrice,
                            'suggestRefundPrice': item.suggestRefundPrice,
                            'orderId': item.orderId
                        })
                    }else if(item.type==='dishcart'){
                        this.refundDishCartDiscnt.push({
                            "actId": item.actId,
                            "spuId": item.spuId,
                            "skuVO": {
                                "skuId": item.skuId,
                                "count": item.editCount,
                                "currentPrice": item.currentPrice,
                                "orderId": item.orderId
                            }

                        })
                    }

                })
            })
            console.log(this.refundSkus,this.refundExtraFees,this.refundDishCartDiscnt);
        },
        _dealData() {
            var showDishOrderList = [];
            this.subRefundableOrderList.forEach(order=>{
                var showRefundOrder={};
                var showDishList=[];
                order.refundableSkuVOs.forEach(skuVO=>{
                    showDishList.push({
                        type:'order',
                        skuId:skuVO.skuId,
                        orderId:order.orderId,
                        name:skuVO.name,
                        count:skuVO.count,
                        editCount:skuVO.count,
                        originPrice:skuVO.originPrice,
                        currentPrice:skuVO.currentPrice,
                        status:skuVO.status,
                        suggestRefundPrice:skuVO.suggestRefundPrice,
                        specAttr:skuVO.specAttr,
                        choosed:false
                    })
                })
                order.refundableExtraFeeVOs.forEach(extraVO=>{
                    showDishList.push({
                        type:'extra',
                        id:extraVO.id,
                        orderId:order.orderId,
                        name:extraVO.name,
                        count:extraVO.count,
                        editCount:extraVO.count,
                        //餐位两个价格相同
                        originPrice:extraVO.price,
                        currentPrice:extraVO.price,
                        status:extraVO.status,
                        suggestRefundPrice:extraVO.suggestRefundPrice,
                        choosed:false
                    })
                })
                order.refundableDishCartDiscntVOs.forEach(cartVO=>{
                    showDishList.push({
                        type:'dishcart',
                        orderId:order.orderId,
                        actId:cartVO.actId,
                        spuId:cartVO.spuId,
                        skuId:cartVO.skuVO.skuId,
                        name:cartVO.skuVO.name,
                        count:cartVO.skuVO.count,
                        editCount:cartVO.skuVO.count,
                        originPrice:cartVO.skuVO.originPrice,
                        currentPrice:cartVO.skuVO.currentPrice,
                        status:cartVO.skuVO.status,
                        suggestRefundPrice:cartVO.skuVO.suggestRefundPrice,
                        specAttr:cartVO.skuVO.specAttr,
                        choosed:false
                    })
                })
                showRefundOrder.orderTime = order.orderTime;
                showRefundOrder.showDishList = showDishList;
                showDishOrderList.push(showRefundOrder);
            })
            this.showDishOrderList =showDishOrderList;
        },
        countBlur(dish, type) {
            let number = event.target.value;
            let count = dish.count;
            if ((!/^[1-9]+[0-9]*?$/.test(number)) || number > count || number < 1) {
                event.target.value = count;
            }
            dish.editCount=event.target.value;
            this.updatePrice();
        },
        selectDish(dish) {
            dish.choosed= !dish.choosed;
            this.updatePrice()
        },
        updatePrice(){
            this.dishPrice = 0;
            this.showDishOrderList.forEach(showRefundOrder=>{
                let choosedList= showRefundOrder.showDishList.filter(dish=>{
                    return dish.choosed === true;
                })
                choosedList.forEach(item=>{
                    this.dishPrice = this.pricePlus(this.dishPrice, this.priceMultiply(item.editCount, item.suggestRefundPrice));
                })
            })
        },
        pricePlus(a, b) {
            a = Number(a);
            b = Number(b);
            var sum;
            var scale = Math.max(this.getScale(a), this.getScale(b));
            var integerSum = Math.round(a * Math.pow(10, scale) + b * Math.pow(10, scale));
            if (scale <= 2) {
                sum = integerSum / Math.pow(10, scale);
            } else {
                sum = Math.floor(integerSum / Math.pow(10, scale - 2)) / 100;
            }
            return sum;
        },

        priceMultiply(a, b) {
            a = Number(a);
            b = Number(b);
            var product;
            var scaleA = this.getScale(a);
            var scaleB = this.getScale(b);
            var scale = scaleA + scaleB;
            var integerProduct = Math.round((a * Math.pow(10, scaleA)) * (b * Math.pow(10, scaleB)));
            if (scale <= 2) {
                product = integerProduct / Math.pow(10, scale);
            } else {
                product = Math.floor(integerProduct / Math.pow(10, scale - 2)) / 100;
            }
            return product;
        },

        priceFormat(price) {
            var reg = /([0-9]+\.[0-9]{2})[0-9]*/;
            return Number(String(price).replace(reg, "$1"));
        },

        getScale(num) {
            var arr = String(Number(num)).split('.');
            if (arr.length === 1) {
                return 0;
            } else {
                return arr[1].length;
            }
        }
    },
    data: function() {
        return {
            dishPrice:0,
            showDishOrderList:[],
            refundSkus:[],
            refundExtraFees:[],
            refundDishCartDiscnt:[],
            "refundableOrderHeadInfo": {
                "barCode": "1432",
                "orderViewId": "0704327819",
                "tableNo": "1",
                "orderGroupId": 21149045,
                "orderTime": "2017-07-10 15:38:51",
                "phone": "",
                "personCount": 4,
                "merchantAmount": 610.11,
                "consumptionPrice": 629.02,
                "refundAmount": 4.91,
                "disCountAmount": 14,
                "payPrice": 610.11,
                "canRefundAll": false,

            },
            "subRefundableOrderList": [{
                    "orderId": 303916,
                    "payPrice": 615.02,
                    "subOrderTime": "2017-07-10 15:38",
                    "promotionRatio": 0.886188,
                    "refundableSkuVOs": [{
                            "skuId": 10569299,
                            "name": "2222",
                            "count": 2,
                            "originPrice": 0,
                            "currentPrice": 0,
                            "status": "已支付",
                            "specAttr": [1,2,3],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 0
                        },
                        {
                            "skuId": 10569302,
                            "name": "412",
                            "count": 1,
                            "originPrice": 123,
                            "currentPrice": 123,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 117.849281
                        },
                        {
                            "skuId": 11687204,
                            "name": "可选套餐",
                            "count": 1,
                            "originPrice": 0.01,
                            "currentPrice": 0.01,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 0.009835
                        },
                        {
                            "skuId": 10569300,
                            "name": "123123",
                            "count": 1,
                            "originPrice": 0.01,
                            "currentPrice": 0.01,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 0.009591
                        },
                        {
                            "skuId": 11687225,
                            "name": "A",
                            "count": 1,
                            "originPrice": 10,
                            "currentPrice": 5,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 4.912572
                        },
                        {
                            "skuId": 10565699,
                            "name": "炸鲜奶1",
                            "count": 7,
                            "originPrice": 67,
                            "currentPrice": 67,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 65.828336
                        }
                    ],
                    "refundableExtraFeeVOs": [{
                        "id": 100944,
                        "name": "餐位",
                        "count": 3,
                        "price": 9,
                        "status": "已支付",
                        "sharePromotion": 0,
                        "suggestRefundPrice": 8.842615
                    }],
                    "refundableDishCartDiscntVOs": []
                },
                {
                    "orderId": 303916,
                    "payPrice": 615.02,
                    "subOrderTime": "2017-07-10 15:39",
                    "promotionRatio": 0.886188,
                    "refundableSkuVOs": [{
                            "skuId": 1056999,
                            "name": "1111",
                            "count": 2,
                            "originPrice": 0,
                            "currentPrice": 0,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 0
                        },
                        {
                            "skuId": 1069302,
                            "name": "412",
                            "count": 1,
                            "originPrice": 123,
                            "currentPrice": 123,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 117.849281
                        },
                        {
                            "skuId": 1168204,
                            "name": "可选套餐",
                            "count": 1,
                            "originPrice": 0.01,
                            "currentPrice": 0.01,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 0.009835
                        },
                        {
                            "skuId": 1056300,
                            "name": "123123",
                            "count": 1,
                            "originPrice": 0.01,
                            "currentPrice": 0.01,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 1,
                            "suggestRefundPrice": 0.009591
                        },
                        {
                            "skuId": 1167225,
                            "name": "A",
                            "count": 1,
                            "originPrice": 10,
                            "currentPrice": 5,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 4.912572
                        },
                        {
                            "skuId": 1065699,
                            "name": "炸鲜奶1",
                            "count": 7,
                            "originPrice": 67,
                            "currentPrice": 67,
                            "status": "已支付",
                            "specAttr": [],
                            "sharePromotion": 0,
                            "suggestRefundPrice": 65.828336
                        }
                    ],
                    "refundableExtraFeeVOs": [{
                        "id": 10094,
                        "name": "餐位",
                        "count": 3,
                        "price": 9,
                        "status": "已支付",
                        "sharePromotion": 0,
                        "suggestRefundPrice": 8.842615
                    }],
                    "refundableDishCartDiscntVOs": [{
                        "actId": 1,
                        "spuId": 2,
                        "skuVO": {
                            "name": "test",
                            "skuId": 3,
                            "count": 4,
                            "originPrice": 6,
                            "currentPrice": 5,
                            "suggestRefundPrice": 8.828336,
                            "specAttr": [
                                "a",
                                "b"
                            ],
                            "status": "支付完"
                        }
                    }]
                }
            ]
        }
    }

})
