<template>
  <div class="row">
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
            </div>
</template>
<script>

import  ShoppingCartItem from './ShoppingCartItem.vue'
export default {
  components: {
    ShoppingCartItem
  },
  props:['products'],

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
}
</script>


<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css'
</style>
