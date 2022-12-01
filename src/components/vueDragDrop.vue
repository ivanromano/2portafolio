<template>

<main class="grid grid-cols-16 mt-[70px]" >
	<div class="bg-[#eeeeee] p-4 col-start-3 col-span-12">
    <h2 class="text-[#843909] font-semibold text-xl pl-5 mb-3 rounded-lg">Tecnologias Usadas</h2>

		<div class="grid grid-cols-8 grid-rows-2" >
		 	<nav class="col-start-1 ">
        <div :class="`${dragDeTecnologias}`">
					<img ondrag="" draggable="true" on-dragstart="drag(event)" id="nest" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" class="max-h-[50px]" alt="">
				</div>

				<div :class="`${dragDeTecnologias}`" >
					<img src="https://v2.vuejs.org/images/logo.svg" class="max-h-[50px]" alt="">
				</div>

				<div :class="`${dragDeTecnologias}`" >
					<img src="https://nodejs.org/static/images/logo.svg" class="max-h-[50px]" alt="">
				</div>

				<div :class="`${dragDeTecnologias}`" class="max-h-[85px]" >
					<img src="https://www.antdv.com/assets/logo.1ef800a8.svg" class="max-h-[50px]" alt="">
				</div>

				<div :class="`${dragDeTecnologias}`" >
					<img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt="">
				</div>
			</nav>

			<nav class="col-start-3">
				<div id="0" on-drop="drop(event)" on-dragover="allowDrop(event)" :class="`${dropZone} `" > </div>
				<div id="1" on-drop="drop(event)" on-dragover="allowDrop(event)" :class="`${dropZone} `" > </div>
				<div id="2" on-drop="drop(event)" on-dragover="allowDrop(event)" :class="`${dropZone} `" > </div>
			</nav>

			<nav class="col-start-4" >
				<p class="text-center">Es un animal rojo</p>
			</nav>
		</div>
	</div>

    <header class="">
dsds
    </header>
</main>

</template>


<script setup>
const dragDeTecnologias = 'bg-[#e3e3e3] p-4 border-4 border-zinc-400 w-[90px]'
const dropZone = 'bg-[#e3e3e3] p-4 border-4 border-zinc-400 w-[90px] h-[85px]'
let divOcupados = ['', '', '']

// no se soltata como enlace al soltar un elemento
const allowDrop = (event) => {
	event.preventDefault();
}

const drag = (event) => {
	event.dataTransfer("text", event.target.id)
}

const drop = (event) => {
	// si el arreglo en dicha posision esta vacio, puedo soltar ahi
	if (divOcupados[parseInt(event.target.id)] == '') {
		var data = event.dataTransfer.getData('text')
		arreglo[parseInt(event.target.id)] = data
		event.target.appendChild(data)
	}
}

</script>

<style lang="scss" scoped>

</style>
