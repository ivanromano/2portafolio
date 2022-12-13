<template>
<notifications width="50%" position="bottom center" animation-type="velocity" />

<div class="flex flex-wrap-reverse lg:fixed z-10">
  <section class="mx-auto">
      <!-- navbar -->
  <nav class="flex justify-between bg-[#FFDDAA] text-red-400 w-screen">
    <div class="px-5 xl:px-12 py-1 flex w-full items-center">
      <dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
        <!-- Nav Links -->
      <ul class="hidden md:flex px-2 mx-auto font-semibold  space-x-12 mt-[10px]">
        <li><RouterLink class="text-[#843909] text-xl peer group hover:text-[#843909] " to="/"> Home</RouterLink> <hr class="p-[1px] bg-transparent peer-hover:p-[1px] peer-hover:bg-[#843909]"> </li>
        <li><RouterLink class="text-[#843909] text-xl peer group hover:text-[#843909] " to="/myart">Mi arte</RouterLink> <hr class="peer-hover:p-[1px] bg-[#843909]"> </li>
        <li><RouterLink class="text-[#843909] text-xl peer group hover:text-[#843909]" to="/presupuesto"> Presupuesto</RouterLink> <hr class="peer-hover:p-[1px] bg-[#843909]"> </li>
        <a-dropdown placement="bottom"  >                                                                      <!-- <nav class="absolute top-[10px] left-[862px]"> <CaretDownOutlined/> </nav> -->
        <li><a class="text-[#843909] text-xl hover:text-[#843909] " href="#">Juegos <caret-down-outlined /> </a></li>
          <template #overlay  >
		        <a-menu :style="{background: '#793409'}" >
              <a-menu-item  :style="{background: '#793409'}" >
                <nav class="rounded-md hover:bg-white duration-500">
                <p class="text-center text-white my-auto duration-300 hover:text-[#793409]" rel="noopener noreferrer" > Opcion 1 </p>
                </nav>
              </a-menu-item>

              <a-menu-item  :style="{background: '#793409'}" >
                <nav class="rounded-md hover:bg-white duration-500">
                <p class="text-center text-white my-auto duration-300 hover:text-[#793409]" rel="noopener noreferrer" > Opcion 2 </p>
                </nav>
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
      <a class="md:hidden flex mr-6 items-center" href="#">

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
<!-- #DC143C -->
