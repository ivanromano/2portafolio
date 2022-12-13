<template>
<button @click="showDrawer" class="bg-orange-400 p-1 rounded-lg animate-waving-hand">
	<div class="space-y-2">
  	<span class="block w-8 h-1 bg-gray-600"></span>
  	<span class="block w-8 h-1 bg-gray-600"></span>
  	<span class="block w-8 h-1 bg-gray-600"></span>
	</div>
</button>
    <a-drawer v-model:visible="visible" class="custom-class" style="color: red" title="Menu" placement="left" @after-visible-change="afterVisibleChange">
			<div class="bg-amber-300 rounded-md">
				<p class="font-semibold py-2 pl-2 rounded-md hover:bg-amber-500  duration-300">Home</p>
      			<p class="font-semibold py-2 pl-2 rounded-md hover:bg-amber-500  duration-300">Mi Arte</p>
      			<p class="font-semibold py-2 pl-2 rounded-md hover:bg-amber-500  duration-300">Presupuesto</p>
      			<p class="font-semibold py-2 pl-2 rounded-md hover:bg-amber-500  duration-300">Juegos</p>
			</div>

			<div class="grow-[5]">
      			<button @click="bajar" :class="cssButon2"> bajar </button>
      			<button @click="retirada" :class="cssButon2"> retirada </button>
      			<button @click="temblor" :class="cssButon2"> temblor </button>
      			<button @click="flip" :class="cssButon2"> flip </button>
      			<button @click="gelatina" :class="cssButon2"> gelatina </button>
      			<button @click="pisoton" :class="cssButon2"> pisoton </button>
      			<button @click="desecho" :class="cssButon2"> desecho </button>
      			<button @click="yesyes" :class="cssButon2"> yesyes </button>
      			<button @click="nonono" :class="cssButon2"> nonono </button>
    		</div>
		<img :class="`${animacion}`" src="https://images.pexels.com/photos/14705508/pexels-photo-14705508.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" >
		</a-drawer>
  </template>
<script setup>
import { ref } from 'vue';
import { DingdingOutlined, GithubOutlined, UnorderedListOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons-vue';

const animacion = ref('animate__animated animate__backInDown')
const cssButon2 = ' bg-blue-400 mr-2 my-2 p-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-300 ease-in-out'

const visible = ref(false);
const afterVisibleChange = bool => {
  console.log('visible', bool);
  }

const showDrawer = () => {
  visible.value = true;
  }

  const bajar = () => {
    animacion.value = 'animate__animated animate__bounce animate__infinite'
  };

  const retirada = () => {
    animacion.value = 'animate__animated animate__backOutLeft animate__infinite'
  };

  const temblor = () => {
    animacion.value = 'animate__animated animate__rubberBand animate__infinite'
  };

  const flip = () => {
    animacion.value = 'animate__animated animate__flip animate__infinite'
  };

  const gelatina = () => {
    animacion.value = 'animate__animated animate__jello animate__infinite'
  };

  const pisoton = () => {
    animacion.value = 'animate__animated animate__rotateInDownLeft animate__infinite'
  };

  const desecho = () => {
    animacion.value = 'animate__animated animate__hinge animate__infinite'
  };

  const yesyes = () => {
    animacion.value = 'animate__animated animate__shakeY animate__infinite'
  };

  const nonono = () => {
    animacion.value = 'animate__animated animate__shakeX animate__infinite'
  };
</script>
