<template>
<p class="text-center py-8">
  <span class="text-4xl font-bold text-gray-700">
    $<span >{{Math.round(PrecioConValue1)}}</span>
  </span>
  <!-- <span class="text-xs uppercase text-gray-500">
    / <span x-text="billingType">month</span>
  </span> -->
</p>
<ul class="border-t border-gray-300 py-8 space-y-6">
	<li class="flex items-center space-x-2 px-8">
		<span :class="`${checkTrue}`">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
			</svg>
		</span>
			<span class="text-gray-600 capitalize">Delivery Days</span>
			<a-input-number :min="4" :max="10" v-model:value="value1" />
	</li>
	<li class="flex items-center space-x-2 px-8">
		<span :class="`${checkTrue}`">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
				</svg>
		</span>
		<span class="text-gray-600 capitalize">Coloring</span>
	</li>
	<li class="flex items-center space-x-2 px-8">
		<span :class="`${checkTrue}`">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
			</svg>
		</span>
		<span class="text-gray-600 capitalize">Number of Character</span>
			<a-input-number :min="1" :max="10" v-model:value="value2" />
	</li>
	<li class="flex items-center space-x-2 px-8">
			<span :class="`${checkTrue}`">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
			</span>
			<span class="text-gray-400 capitalize">Revisionss</span>
	</li>

	<li class="flex items-center space-x-2 px-8">
			<span :class="`${checkTrue}`">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
			</span>
			<span class="text-gray-400 capitalize">Includes Animation</span>
	</li>
	<li class="flex items-center space-x-2 px-8">
			<span :class="`${checkTrue}`">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
			</span>
			<span class="text-gray-400 capitalize">Enhanced Detailing</span>
	</li>
</ul>

<div class="flex items-center justify-center mt-6">
  <a :class="`${whatsappClass}`" :href="`https://api.whatsapp.com/send?phone=5491164178818&text=hello, i want buy the pack basic with ${value2} characters, within ${value1} days. It would be a total of $${Math.round(PrecioConValue1)}`" title="Purchase">Purchase</a>
</div>
</template>

<script setup>
import { computed, reactive, toRefs } from 'vue';

const checkTrue = 'bg-[#FFAB40] rounded-full p-1'
const whatsappClass = 'bg-[#FFAB40] hover:bg-[#FFB85F] hover:text-[#A76848] px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150'

const state = reactive({
	value1: 5,
	value2: 2,
	PrecioConValue1: computed(() =>
		filterValue1()),
	Loading: null,
	precio: 300
})

setTimeout(() => {
	Loading.value = Loading.value = true
}, 1000);

const filterValue1 = () => {
	if (state.Loading) {
		var valorSumado = value1.value / value2.value
		return precio.value / valorSumado + 10
	}
}
const {value1, value2, Loading, PrecioConValue1, precio} = toRefs(state)
</script>

<style lang="scss" scoped>

</style>
