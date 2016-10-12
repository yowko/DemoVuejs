<template>
  <div class="row">
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
  </div>
</template>


<script>
export default {
  props:['product']
}
</script>
