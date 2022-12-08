<template>
<main class="grid lg:grid-cols-6 mt-[70px]" >
	<div class="bg-[#eeeeee] p-4 lg:col-start-2 col-span-4 ">
    <h2 class="text-[#843909] font-semibold text-xl pl-5 mb-3 rounded-lg">Tecnologias Usadas</h2>

		<div  >
			<nav v-for="item in Tecnologias" :key="item.id" class="grid lg:grid-cols-12 grid-cols-6 pt-5">
				<main class="lg:bg-[#e3e3e3] lg:p-2 lg:border-4 lg:border-zinc-400 ">
					<img :src="`${item.img}`" :class="`${item.css}`">
				</main>

				<main class="p-1 py-5 mx-auto font-extrabold uppercase">
					{{item.sinterminar}}
				</main>

				<main class="col-span-6">
					<Form> </Form>
				</main>
			</nav>
		</div>
	</div>

    <header class="">

    </header>
</main>
</template>


<script setup>
import Form from "./ant/Form.vue";

const dragDeTecnologias = 'bg-[#e3e3e3] p-4 border-4 border-zinc-400 w-[90px]'
const dropZone = 'bg-[#e3e3e3] p-4 border-4 border-zinc-400 w-[90px] h-[85px]'

const Tecnologias = [{
    id: 0,
    img: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
    css: 'w-[50px]',
		model: 'nest',
		sinterminar: 'n_st'
  },
  {
    id: 1,
    img: 'https://v2.vuejs.org/images/logo.svg',
    css: 'w-[50px]',
		model: 'vue',
		sinterminar: '_ue'
  },
  {
    id: 2,
    img: 'https://nodejs.org/static/images/logo.svg',
    css: 'w-[50px]',
		model: 'node',
		sinterminar: '_ode'
  },
  {
    id: 3,
    img: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
    css: 'w-[50px]',
		model: 'antd',
		sinterminar: 'ant_'
  },
  {
    id: 4,
    img: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg',
    css: 'w-[50px]',
		model: 'tail',
		sinterminar: '_alwin_'
  },
	]


</script>

<style lang="scss" scoped>

</style>
