<template>
<div class="mt-3 mb-[10px]">
    <Carousel :itemsToShow="4.00" :wrapAround="true" :transition="400" :autoplay="autoplay" >
      <slide v-for="item in slider" :key="item">
				<img :src="`${item.img}`" :title="item.funti" :onClick="`Handle${item.id}`" :v-model="item.id" class="rounded-md hover:scale-[1.1] duration-200" >
      </slide>


      <template #addons>
				<nav class="absolute top-[240px] left-[10px] p-2 rounded-lg bg-[#793409] text-white"> <a-switch v-model:checked="checked" /> modo autoplay </nav>
        <navigation />
        <pagination />
      </template>

    </Carousel>
	</div>

  </template>

  <script setup>
	import { computed, ref } from 'vue';
  import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

	const checked = ref(false);

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

const Handle1 = () => {
  alert("1")
}

const Handle2 = () => {
  alert("2")
}

const Handle3 = () => {
  alert("3")
}

// const Handle4 = () => {
//   alert("4")
// }

// const Handle5 = () => {
//   alert("5")
// }

</script>


  <style scoped>
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
