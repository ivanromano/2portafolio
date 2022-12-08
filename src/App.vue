<template>
<notifications width="50%" position="bottom center" animation-type="velocity" />

<div class="flex flex-wrap lg:fixed z-10">
  <section class="mx-auto">
      <!-- navbar -->
    <nav class="flex justify-between bg-[#FFDDAA] text-red-400 w-screen">
      <div class="px-5 xl:px-12 py-1 flex w-full items-center">
        <dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
        <!-- Nav Links -->
        <ul class="hidden md:flex px-2 mx-auto font-semibold  space-x-12 mt-[10px]">
          <li><RouterLink class="text-[#755639] text-xl hover:text-[#bd8e51] " to="/"> Home</RouterLink></li>
          <li><RouterLink class="text-[#755639] text-xl hover:text-[#bd8e51] " to="/myart">Mi arte</RouterLink></li>
          <li><RouterLink class="text-[#755639] text-xl hover:text-[#bd8e51]" to="/presupuesto"> Presupuesto</RouterLink></li>
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



        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5">

          <a style="{text-decoration: none}" href="https://github.com/freeCodeCamp/scripts" >
            <github-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
          </a>
          <!-- Sign In / Register      -->

        </div>
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">

        <AntMovilDrawer> </AntMovilDrawer>
      </a>
    </nav>
  </section>
</div>
  <!-- <nav class="inline">
    <RouterLink to="/tag">linkTag </RouterLink>
  </nav> -->
    <RouterView></RouterView>


</template>

<script setup>
import { DingdingOutlined, GithubOutlined, UnorderedListOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons-vue';
import AntMovilDrawer from './components/ant/AntMovilDrawer.vue';


</script>

<style lang="scss" scoped>

</style>
