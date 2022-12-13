<template> <div class="pt-[50px]">
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ background: '#df9638'}">
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<nav class="bg-[#df9638] transition-transform translate-y-2 ease-in-out">

				<a-menu-item key="0">
          <span>🎉 Ofertas</span>
        </a-menu-item>

				<a-sub-menu key="sub1">
          <template #title>
            <span>🍕 Pizzas</span>
          </template>
					<nav class="bg-[#c96e3c] py-[1px]">
          	<a-menu-item key="1">Fugazza</a-menu-item>
          	<a-menu-item key="2">Marinara</a-menu-item>
          	<a-menu-item key="3">Big</a-menu-item>
					</nav>
        </a-sub-menu>


				<a-sub-menu key="sub2">
          <template #title>
            <span>🍔 Hamburguesas</span>
          </template>
					<nav class="bg-[#c96e3c] py-[1px]">
          	<a-menu-item key="10">De Pollo</a-menu-item>
          	<a-menu-item key="11">De Carne</a-menu-item>
					</nav>
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <template #title>
            <span>🍿 Desayuno</span>
          </template>
					<nav class="bg-[#c96e3c] py-[1px]">
          	<a-menu-item key="20">Tostados</a-menu-item>
          	<a-menu-item key="21">Bebidas</a-menu-item>
          	<a-menu-item key="22">Muffin</a-menu-item>
					</nav>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>🍨 Helados</span>
          </template>
					<nav class="bg-[#c96e3c] py-[1px]">
          	<a-menu-item key="30">Chocolate</a-menu-item>
          	<a-menu-item key="31">Frutilla</a-menu-item>
          	<a-menu-item key="32">Menta</a-menu-item>
          	<a-menu-item key="33">variado</a-menu-item>
					</nav>
        </a-sub-menu>
        <!-- ! <a-menu-item key="11">
          !<file-outlined />
          !<span>File</span>
        !</a-menu-item> -->
				</nav>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-content style="margin: 0 16px">
				<div class="py-4"> </div>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <span class="font-fuente1"> Nuestras Ofertas </span>


					<form @submit.prevent="Handletiend" method="post" enctype="multipart/form-data" class="flex flex-col justify-center items-center">
        		<input type="text" placeholder="ingrese un nombre" v-model.trim="product" class="h-[2rem] w-[10rem] rounded-full my-4">
			  		<input type="number" placeholder="ingrese numer" v-model.trim="precio" class="h-[2rem] w-[10rem] rounded-full mb-4">

        	<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
         		<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            	Crear Usuario
          	</span>
        	</button>
		 	 		</form>

        </div>
      </a-layout-content>

      <footer class="p-[3px] lg:p-7 bg-slate-800 ">
				<main class="lg:grid lg:grid-cols-6 ">
					<div class="grid grid-cols-1">
						<span class="text-white mb-3"> Legal </span>
						<span class="text-red-400 mb-2 lg:mb-0"> Politicas de Privacidad </span>
						<span class="text-red-400 mb-2 lg:mb-0"> Aviso Legal </span>
					</div>

					<div class="grid grid-cols-1">
						<span class="text-white mt-4 mb-3 lg:mt-0"> Redes Sociales </span>
						<span class="text-red-400"> Facebook </span>
						<span class="text-red-400"> Twitter </span>
						<span class="text-red-400"> Whatsapp </span>
					</div>

					<div class="text-red-400 mt-4 lg:col-start-5 lg:col-span-2 mx-auto">
						<div class="flex ">
							<span class="text-white lg:text-lg mt-11 ">+54 911 64178818</span>
							<dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '80px'}" />
						</div>
					</div>
			</main>

			</footer>

    </a-layout>

  </a-layout>
</div> </template>
<script setup>
import {DingdingOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useUserStore } from "../stores/example-store";

const UserStore = useUserStore()

const selectedKeys1 = ref(['2'])
const selectedKeys2 = ref(['1'])
const collapsed = ref(false)
const openKeys = ref(['sub1'])
const product = ref('')
const precio = ref(0)
const stock = ref(false)

const Handletiend = async() => {
	try {
		await UserStore.crearTienda(product.value, precio.value, stock.value)
	} catch (error) {
		console.log(error);
	}
}

</script>
<style lang="scss" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(213, 0, 0, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #ff0000;
}
</style>
