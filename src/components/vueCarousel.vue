<template>
<div class="mt-3 mb-[10px]">
<Carousel :itemsToShow="4.20" :wrapAround="true" :transition="400" :autoplay="autoplay" >
  <slide v-for="item in slider" :key="item" >
		<div class="contenedor group" >
      <img :src="`${item.img}`" :title="item.funti" :v-model="item.id"  class=" rounded-md hover:scale-[1.1] group-hover:scale-[1.1] duration-200" >
        <div class="invisible group group-hover:visible  centrado p-1 Oferta bg-white bg-opacity-70 rounded-md">
          <button v-if="item.stock" @click="showModal(item)">
            <p class="uppercase text-xl">{{item.funti}}
            <span class="text-amber-800 text-xl"> $ </span> <span class="text-xl font-semibold text-amber-600 opacity-100"> {{item.price}} </span>
            </p>
          </button>
          <main v-else>
            <p class="text-xl text-red-700">NO STOCK</p>
          </main>
        </div>

        </div>
    </slide>

  <template #addons>
    <navigation />
    <pagination />
  </template>
</Carousel>
<nav class="inline ml-3 p-2 pb-3 rounded-xl bg-[#793409] text-white"> <a-switch v-model:checked="checked" /> Autoplay </nav>
<!-- :maskStyle="{opacity: 8}" -->
<a-modal v-model:visible="visible" width="1000px" :maskClosable="true"  title="Victini is god" @ok="handleOk">

<div v-for="item in imagenModal" :key="item.id">
<nav class="">
  <img :src="`${item.img}`" alt="" class="max-h-[200px] mr-2 float-left">
  <h4 class="">Name: {{item.title}}</h4>
  <br>
  <h4 >Description: {{item.descripcion}}</h4>
</nav>
<div class="ml-[600px]"><Donut :at="item.at" :de="item.de" :fer="item.fer" :luc="item.luc" > </Donut> </div>


  </div>

    <!-- <p>Some contents...{{imagenModal.id}} </p>
    <img :src="`${imagenModal.img}`" alt=""> -->

</a-modal>

</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import Donut from "./Donut.vue";

const checked = ref(false);
const visible = ref(false);
const imagenModal = ref([])

	const slider = [{
    id: 0,
    img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
    funti: 'Pizza con Queso',
    price: '30',
    stock: true
  },
  {
    id: 1,
    img: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
    funti: 'breaded veal with fries',
    price: '10',
    stock: false
  },
  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Un_Cafe_y_un_sandwich_mixto.jpg/1200px-Un_Cafe_y_un_sandwich_mixto.jpg',
    funti: 'Coffe',
    price: '15',
    stock: true
  },
  {
    id: 3,
    img: 'https://www.hechicerafit.com/static/r/237/arroz-fit-con-atun-y-maiz-es-YrqLR.jpg',
    funti: 'rice with tuna',
    price: '55',
    stock: false
  },
  {
    id: 4,
    img: 'https://s1.1zoom.me/big0/272/Drinks_Hamburger_Buns_Frikadeller_Vegetables_Fast_593329_1280x853.jpg',
    funti: 'hamburger with coca-cola',
    price: '2',
    stock: true
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
  if (item.id === 0) {imagenModal.value = [{id: 0, img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg', title: 'Victineripsis', descripcion: 'Victineripsis is the supreme king of luck and believes that luck is the greatest superpower', at: 6, de: 4, fer: 2, luc: 3}]}
  if (item.id === 1) {imagenModal.value = [{id: 1, img: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg', title: 'Victini cookies', descripcion: 'Victini fell asleep thinking about his strategy for stealing cookies. But he slept too long', at: 4, de: 1, fer: 1, luc: 7}]}
  if (item.id === 2) {imagenModal.value = [{id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Un_Cafe_y_un_sandwich_mixto.jpg/1200px-Un_Cafe_y_un_sandwich_mixto.jpg', title: 'Natavil', descripcion: 'He el the brother of Leviathan. He has the power to cancel the powers of others, and can create an area where the supernatural does not exist', at: 2, de: 4, fer: 2, luc: 3}]}
  if (item.id === 3) {imagenModal.value = [{id: 3, img: 'https://www.hechicerafit.com/static/r/237/arroz-fit-con-atun-y-maiz-es-YrqLR.jpg', title: 'Lanzaria', descripcion: 'Have you ever seen a prettier clown?', at: 1, de: 2, fer: 4, luc: 6}]}
  if (item.id === 4) {imagenModal.value = [{id: 4, img: 'https://s1.1zoom.me/big0/272/Drinks_Hamburger_Buns_Frikadeller_Vegetables_Fast_593329_1280x853.jpg', title: 'Treetive', descripcion: 'red tree, wise but demanding', at: 6, de: 4, fer: 2, luc: 2}]}
};

const handleOk = e => {
  visible.value = false;
};

</script>


<style scoped>
.contenedor{
    position: relative;
    display: inline-block;
    text-align: center;
}


.centrado{
    position: absolute;
    top: 50%;
    transform: translate(-5%, -0%);
}

  .carousel__slide {
    padding: 1px;
		padding-left: 40px;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  </style>
