import Vue from 'vue'
import ShoppingCartList from './components/ShoppingCartList'
import $ from 'jquery'

//data
var productList = [];
 for (var i = 1; i <= 5; i++) {
      var product = {
          Id:'K'+i,
          Url: 'http://placehold.it/100x70',
          Name: 'Product 1',
          Price: 100,
          Qty: 1
      };

      productList.push(product);
  }


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{productList:productList},
  components:{ShoppingCartList},
  //render: h => h(App)
  template:'<ShoppingCartList :products="productList"></ShoppingCartList>'
  ,mounted:function(){
     var _self=this;
     $.get("http://localhost:3511/api/CartList", function (result) {
       //console.log(result);
       _self.productList= result;
     });

   }
})
