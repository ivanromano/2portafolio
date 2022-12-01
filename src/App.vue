<template>

<div class="flex flex-wrap fixed z-10">
  <section class="mx-auto">
      <!-- navbar -->
    <nav class="flex justify-between bg-[#FFDDAA] text-red-400 w-screen">
      <div class="px-5 xl:px-12 py-1 flex w-full items-center">
        <dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
        <!-- Nav Links -->
        <ul class=" md:flex px-2 mx-auto font-semibold  space-x-12 mt-[10px]">
          <li><a class="text-[#755639] text-xl hover:text-[#bd8e51] " > Home</a></li>
          <li><a class="text-[#755639] text-xl hover:text-[#bd8e51] " href="#">Mi arte</a></li>
          <li><a class="text-[#755639] text-xl hover:text-[#bd8e51] " href="#">Presupuesto</a></li>
          <a-dropdown placement="bottom"  >
                                                                                    <!-- <nav class="absolute top-[10px] left-[862px]"> <CaretDownOutlined/> </nav> -->
            <li><a class="text-[#755639] text-xl hover:text-[#bd8e51] " href="#">Juegos <caret-down-outlined /> </a></li>

            <template #overlay  >
		        <a-menu :style="{background: '#793409'}" >
            <a-menu-item  :style="{background: '#793409'}" >
              <p class="text-white my-auto " rel="noopener noreferrer" >dsdvds</p>
            </a-menu-item>
            <a-menu-item  :style="{background: '#793409'}" >
              <p class="text-white my-auto" rel="noopener noreferrer" >opcion 2</p>
            </a-menu-item>
	          </a-menu>
            </template>
          </a-dropdown>


          <!-- <a-dropdown placement="bottom">
    <a-button> ayelen </a-button>
		<template #overlay>
		<a-menu>
    <a-menu-item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> 1st menu item </a>
    </a-menu-item>
	</a-menu>
</template>
</a-dropdown> -->



        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5">
          <github-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
          <a-avatar :size="64">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          <!-- Sign In / Register      -->

        </div>
          <a-button> Registrar </a-button>
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </a>
    </nav>
  </section>
</div>




  <compass-two-tone class="" two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />

  <!-- <nav class="inline">
    <RouterLink to="/tag">linkTag </RouterLink>
  </nav> -->
    <RouterView></RouterView>


</template>

<script setup>
import { DingdingOutlined, GithubOutlined, CompassTwoTone, CaretDownOutlined  } from '@ant-design/icons-vue';


</script>

<style lang="scss" scoped>

</style>
