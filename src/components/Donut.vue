<template>
    <div>
        <apexchart v-if="grafico" width="300" type="histogram" :options="chartOptions" :series="series"></apexchart>
        <!-- <apexchart v-else="grafico" width="300" type="radar" :options="chartOptions" :series="series"></apexchart> -->
   </div>
</template>

<script setup>
import { computed, onMounted, reactive, toRefs } from 'vue';

// se definen los props. este es un array
const props = defineProps({
    at:Number,
    de:Number,
    fer:Number,
    luc:Number,
    ArrayValues:Array
})

const chartOptions = {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['at', 'de', 'fer', 'lucky']
          },
        }
        const series = computed(() => { return [{
          name: 'series-1',
          data: [props.at, props.de, props.fer, props.luc]
  }]})


  const state = reactive({
    grafico: true,
    edit: false,
    arrayVacioo: ['']
  })

  let {grafico, edit} = toRefs(state)

  let CambioEstadistica = () => {
    edit.value = !edit.value
  }

</script>

<style lang="scss" scoped>

</style>
