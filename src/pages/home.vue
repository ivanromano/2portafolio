<template>
<main class="bg-[#F0772B] h-[1500px] w-full ">

	<div v-if="!UserStore.token">
    <p class="text-[#793409] text-center pt-[80px] pb-[10px] text-2xl"> Hey, Inicia Sesion para acceder a las demas rutas </p>
		<AntOpenDrawer> </AntOpenDrawer>
	</div>
  <div v-else>
    <p class="text-[#793409] text-center pt-[80px] pb-[10px] text-2xl"> Gracias por iniciar sesion {{}} </p>
    <main class="flex flex-col justify-center items-center">
	    <button class="bg-[#fd4646] px-[30px] rounded-md duration-300 group hover:bg-transparent" @click="CerrarVerdadero">
		    <p class="text-xl pt-4 text-white font-semibold duration-300 group-hover:text-[#fd4646] group-hover:p-4 group-hover:bg-white group-hover:rounded-md" > Cerrar Sesion </p>
	    </button>
    </main>
  </div>


<vueCarouMovil class=" md:hidden"> </VueCarouMovil>
<vueCarousel class="invisible md:visible"> </vueCarousel>

<vueDragDrop> </vueDragDrop>
mision victinera
</main> </template>

<script setup>
import { computed } from 'vue';
import vueDragDrop from "../components/vueDragDrop.vue";
import vueCarousel from '../components/vueCarousel.vue';
import AntOpenDrawer from '../components/ant/AntOpenDrawer.vue';
import {useUserStore} from "../stores/example-store";
import VueCarouMovil from '../components/vueCarouMovil.vue';
import Cascada from '../components/ant/Cascada.vue';

const UserStore = useUserStore()

const CerrarVerdadero = () => {
  UserStore.cerrarSesion()
  Router.push('/')
}

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
<!-- DC143C -->
