<template>
<a-form :model="formState" name="basic" :label-col="{ span: 11 }" :wrapper-col="{ span: 20 }" autocomplete="on" @finish="onFinish" @finishFailed="onFinishFailed">
<nav class="flex flex-nowrap">
    <a-form-item label="¿Como se llama?" name="username" :rules="[{ required: true, message: 'no lo mandes vacio!', whitespace: true, type: 'string', }]">
        <a-input v-model:value="formState.username" />
    </a-form-item>

    <button type="submit" class="min-w-auto ml-[37px] w-25 h-10 bg-[#F0772B] p-1 rounded-b-xl hover:bg-[#cb5e1a] text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">intentalo</button>
</nav>
</a-form>

</template>

<script setup>
import { notify } from "@kyvg/vue3-notification";
import { reactive, ref } from 'vue';

const formState = reactive({
        username: '',
        remember: true,
      });


const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username !== 'nest' && values.username !== 'vue' && values.username !== 'node' && values.username !== 'antd' && values.username !== 'tailwind') {
        return notify({
            title: "Nombre incorrecto",
            type: "error",
            text: `No se lo que es ${values.username} `,
        });
    } else {
        return notify({
            title: "Felicidades",
            type: "success",
            text: `El nombre correcto es ${values.username} `,
        });
    }
}

const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
}
</script>
