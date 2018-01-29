import Vue from 'vue'
var VueClipboard = require('vue-clipboard2')

Vue.use(VueClipboard)
new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'Copy These Text111'
        }
    },
    methods: {
        onCopy: function (e) {
            alert('You just copied: ' + e.text)
        },
        onError: function (e) {
            alert('Failed to copy texts')
        }
    }
})

