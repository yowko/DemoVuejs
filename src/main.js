import Vue from 'vue'
Vue.component('ShoppingCartList',{
  props:['products'],
  template:`<div class="row">
                <div class="col-xs-12">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <div class="panel-title">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                             <ShoppingCartItem v-for="product in products" :product='product'></ShoppingCartItem>
                              <!--<h1>{{ msg }}</h1>-->
                        </div>
                        <div class="panel-footer">
                            <div class="row text-center">
                                <div class="col-xs-9">
                                    <h4 class="text-right">Total <strong>$ {{total}} </strong></h4>
                                </div>
                                <div class="col-xs-3">
                                    <button type="button" class="btn btn-success btn-block">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
  computed:
  {
    total:(function(){
        var _sum=0;
        var list =this.products;
         if(list.length>0)
         {
            list.forEach(function(item) {
                _sum += item.Qty*item.Price;
            }, this);
         }
        return _sum;
    })
  }
});


Vue.component('ShoppingCartItem',{
  props:['product'],
  template:`<div class="row">
    <div class="col-xs-2">
      <img alt="#" class="img-responsive" :src='product.Url' />
    </div>

    <div class="col-xs-4">
      <h4 class="product-name">
        <strong>{{ product.Name}} </strong>
      </h4>
    </div>

    <div class="col-xs-6">
      <div class="col-xs-6 text-right">
        <h6>
          <strong>
                                        {{product.Price }} <span class="text-muted">x</span>
                                    </strong>
        </h6>
      </div>

      <div class="col-xs-4">
        <input type="number" class="form-control input-sm" v-model:value=product.Qty />
      </div>

      <div class="col-xs-2">
        <button type="button" class="btn btn-link btn-xs">
                                    <span class="glyphicon glyphicon-trash"> </span>
                                </button>
      </div>
    </div>
  </div>`,

})


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
  //components:{ShoppingCartList,ShoppingCartItem},
  //render: h => h(App)
  template:'<ShoppingCartList :products="productList"></ShoppingCartList>'
})
