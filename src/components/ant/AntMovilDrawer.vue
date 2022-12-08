<template>
<button @click="showDrawer" class="bg-orange-400 p-2 rounded-lg animate-waving-hand">
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
		</a-drawer>
  </template>
<script setup>
import { ref } from 'vue';
import { DingdingOutlined, GithubOutlined, UnorderedListOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons-vue';

const visible = ref(false);
const afterVisibleChange = bool => {
  console.log('visible', bool);
  }

const showDrawer = () => {
  visible.value = true;
  }

  </script>
