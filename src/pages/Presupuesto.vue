<template>

<div x-data="{billingType: 'month', basicPrice: '99', premiumPrice: '29', proPrice: '39' }" class="min-h-full bg-gray-200 pb-12">
    <div class="w-full bg-[#FFAB40] pt-[56px] pb-24 text-center">
        <main class="bg-[#E0C5A3] inline-block p-1 rounded-b-md">
            <span class="text-2xl text-[#A76848]">I'll draw whatever you imagine <br> </span>
            <span class="text-sm text-[#A76848] mt-2">I will desing your character if only you already have the concept</span>
        </main>
            <div class="flex items-center justify-center mt-8">
        </div>
        <Carousel></Carousel>
    </div>
    <div class="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
        <div class="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div class="bg-white shadow-2xl rounded-lg py-4">
                <p class="text-xl text-center font-bold text-[#FFB85F]">Basic</p>


                <PriceBasic> </PriceBasic>

            </div>
            <div class="bg-white shadow-2xl rounded-lg py-4">
                <p class="text-xl text-center font-bold text-[#FFB85F]">Premium</p>

                <PricePremium> </PricePremium>

            </div>
            <div class="bg-white shadow-2xl rounded-lg py-4">
                <p class="text-xl text-center font-bold text-[#FFB85F]">Pro</p>

                <PricePro> </PricePro>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import PriceBasic from "../components/Prices/PriceBasic.vue";
import PricePremium from "../components/Prices/PricePremium.vue";
import PricePro from "../components/Prices/PricePro.vue";
import { Carousel } from 'flowbite-vue'

const value1 = ref([{cantidad: 1, precio: 2}]);
const value2 = ref([{cantidad: 1, precio: 5}]);

</script>

<style lang="scss" scoped>

</style>
