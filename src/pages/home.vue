<template>
<main class="bg-[#F0772B] h-[1500px] w-full ">
	<div class="mt-[20px]">
		<p class="text-[#793409] text-center p-9 text-2xl"> Inicia Sesion para acceder a las demas rutas </p>

		<main class="grid grid-cols-8">
			<div class="bg-[#793409] py-2 px-[20px] mx-auto col-start-4 col-span-2 rounded-md ">
				<span class="text-2xl text-white font-semibold   "> registrate/inicia sesion </span>
			</div>
		</main>


	</div>

<!-- <antCarousel></antCarousel> -->
<vueCarousel> </vueCarousel>

<vueDragDrop> </vueDragDrop>



</main> </template>

<script setup>
import { computed } from 'vue';
import vueDragDrop from "../components/vueDragDrop.vue";
import vueCarousel from '../components/vueCarousel.vue';




</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
