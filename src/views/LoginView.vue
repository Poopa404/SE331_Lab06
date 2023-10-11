<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import { useMessageStore } from '@/stores/message';
const messageStore = useMessageStore()
const authStore = useAuthStore()
const validationSchema = yup.object({
    // email: yup.string().required('The email is required').email('Input must be an email.'),
    email: yup.string().required('The email is required'),
    // password: yup.string().required('The password is required').min(6, 'The password must be at least 6 characters.')
    password: yup.string().required('The password is required')
})
const {errors, handleSubmit} = useForm({
    validationSchema,
    initialValues: {
        email: '',
        password: ''
    }
})
const {value: email} = useField<string>('email')
const {value: password} = useField<string>('password')
const onSubmit = handleSubmit((values) => {
    console.log(values)
    authStore.login(values.email, values.password)
    .then(() => {
        console.log('login success')
        router.push({name: 'event-list'})
    })
    .catch(() => {
        messageStore.updateMessage('could not login')
        setTimeout(() => {
            messageStore.resetMessage()
        }, 3000)
    })
})
</script>
<template>
    <div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="w-auto h-10 mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Sign in your account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                    <div class="flex items-center justify-between">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    </div>
                    <InputText type="text" v-model="email" :error="errors['email']"></InputText>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <InputText type="password" v-model="password" :error="errors['password']"></InputText>
                </div>
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Sign In</button>
                </div>
            </form>
            <p class="mt-10 text-sm text-center text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Try to register here</a>
            </p>
        </div>
    </div>
</template>

