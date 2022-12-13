<template>
    <div class="mt-3 mb-[10px]">
    <Carousel :wrapAround="true" :transition="400" :autoplay="autoplay" >
        <slide v-for="item in slider" :key="item" >
            <img :src="`${item.img}`" :title="item.funti" :v-model="item.id" @click="showModal(item)" class="rounded-md hover:scale-[1.1] duration-200" >
        </slide>

      <template #addons>
        <navigation  />
        <pagination />
        <main class="flex flex-col justify-start items-start ml-1 my-3">
	    <div class="bg-[#fd4646] rounded-md ">
		    <nav class="flex flex-col justify-center items-center p-2 rounded-lg text-white"> <a-switch v-model:checked="checked" /> modo autoplay </nav>
        </div>
    </main>
      </template>

    </Carousel>
    <!-- :maskStyle="{opacity: 8}" -->
<a-modal v-model:visible="visible" width="1000px" :maskClosable="true"  title="Victini is god" @ok="handleOk">
  <div v-for="item in imagenModal" :key="item.id">
    <nav class="">
      <img :src="`${item.img}`" alt="" class="max-h-[200px] float-left">
      <h4 class="text-center">Name: {{item.title}}</h4>
      <br>
      <h4 class="mt-[165px]">Description: {{item.descripcion}}</h4>
    </nav>
  	<div class="ml-[600px]"> <Donut :at="item.at" :de="item.de" :fer="item.fer" :luc="item.luc" > </Donut> </div>
  </div>
        <!-- <p>Some contents...{{imagenModal.id}} </p>
        <img :src="`${imagenModal.img}`" alt=""> -->
</a-modal>

</div></template>

    <script setup>
    import { computed, ref } from 'vue';
    import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
    import Donut from "./Donut.vue";

    const checked = ref(false);
    const visible = ref(false);
    const imagenModal = ref([])

        const slider = [{
        id: 0,
        img: 'https://pbs.twimg.com/media/FXexKZjXgAEJPWC?format=jpg&name=900x900',
        funti: 'Handle1'
      },
      {
        id: 1,
        img: 'https://pbs.twimg.com/media/FXPQG7FXgAEPTuj?format=jpg&name=900x900',
        funti: 'Handle2'
      },
      {
        id: 2,
        img: 'https://pbs.twimg.com/media/FYNHLy7XwAEnV1K?format=jpg&name=900x900',
        funti: 'Handle3'
      },
      {
        id: 3,
        img: 'https://pbs.twimg.com/media/FgoS1twXoAA1bui?format=jpg&name=900x900',
        funti: 'Handle4'
      },
      {
        id: 4,
        img: 'https://pbs.twimg.com/media/FUHPcLjXEAApM9p?format=jpg&name=900x900',
        funti: 'Handle5'
      },
        ]

    const autoplay = computed(() => {
      if (checked.value === false) {
        return 0
      } if (checked.value === true) {
        return 900
      }
    })

    const showModal = (item) => {
      visible.value = true;
      if (item.id === 0) {imagenModal.value = [{id: 0, img: 'https://pbs.twimg.com/media/FXexKZjXgAEJPWC?format=jpg&name=900x900', title: 'Victineripsis', descripcion: 'Victineripsis is the supreme king of luck and believes that luck is the greatest superpower', at: 6, de: 4, fer: 2, luc: 3}]}
      if (item.id === 1) {imagenModal.value = [{id: 1, img: 'https://pbs.twimg.com/media/FXPQG7FXgAEPTuj?format=jpg&name=900x900', title: 'Victini cookies', descripcion: 'Victini fell asleep thinking about his strategy for stealing cookies. But he slept too long', at: 4, de: 1, fer: 1, luc: 7}]}
      if (item.id === 2) {imagenModal.value = [{id: 2, img: 'https://pbs.twimg.com/media/FYNHLy7XwAEnV1K?format=jpg&name=900x900', title: 'Natavil', descripcion: 'He el the brother of Leviathan. He has the power to cancel the powers of others, and can create an area where the supernatural does not exist', at: 2, de: 4, fer: 2, luc: 3}]}
      if (item.id === 3) {imagenModal.value = [{id: 3, img: 'https://pbs.twimg.com/media/FgoS1twXoAA1bui?format=jpg&name=900x900', title: 'Lanzaria', descripcion: 'Have you ever seen a prettier clown?', at: 1, de: 2, fer: 4, luc: 6}]}
      if (item.id === 4) {imagenModal.value = [{id: 4, img: 'https://pbs.twimg.com/media/FUHPcLjXEAApM9p?format=jpg&name=900x900', title: 'Treetive', descripcion: 'red tree, wise but demanding', at: 6, de: 4, fer: 2, luc: 2}]}
    };

    const handleOk = e => {
      visible.value = false;
    };

    </script>


    <style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

      </style>
