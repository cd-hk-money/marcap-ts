<template>
  <v-card 
    v-if="!loaded"
    class="ml-5 mr-5 mt-5 d-flex align-center justfiy-center"
    height="300"
    width="94%"
    rounded="xl"
  >  
    <stock-score-chart 
      :chartData="indicator"
      :height="250"      
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StockScoreChart from '@/v2/components/detail/StockScoreChart.vue'
<<<<<<< HEAD

=======
>>>>>>> v2
import { namespace } from 'vuex-class'
import { ISimpleChartData } from '@/models/stock'

const StockStoreModule = namespace('StockStore')

@Component({
  components: {
    StockScoreChart
  }
})
export default class StockScore extends Vue {

  @StockStoreModule.State('indicatorLoaded')
<<<<<<< HEAD
  private loaded!: boolean

  @StockStoreModule.State('indicator')
  private indicator!: ISimpleChartData

  @StockStoreModule.Action('getStockIndicator')
  private readonly getStockIndicator!: (name: string) => Promise<void>
=======
  loaded!: boolean

  @StockStoreModule.State('indicator')
  indicator!: ISimpleChartData

  @StockStoreModule.Action('getStockIndicator')
  readonly getStockIndicator!: (name: string) => Promise<void>
>>>>>>> v2

  created () {
    this.getStockIndicator(this.$route.params.title)
  }
}
<<<<<<< HEAD
</script>
=======
</script> 
>>>>>>> v2
