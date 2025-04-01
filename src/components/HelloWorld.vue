<script setup lang="ts">
// import { computed, ref, watch, shallowRef } from 'vue'
// import ComponentA from './ComponentA.vue'
// import ComponentB from './ComponentB.vue'
import UserList from './UserList.vue'
// import { useCounter } from '@/composables/useCounter.ts'
// const currentComponent = shallowRef('ComponentA')

defineProps<{
  msg: string
}>()
// Default Function
// const sayHello = () => {
//   alert('Xin chào từ Vue!')
// }
// // Function with param
// const sayHelloParam = (name) => {
//   alert(`Xin chào, ${name}!`)
// }

// const hoverEffect = () => {
//   console.log('Chuột đang hover vào!')
// }

// const removeEffect = () => {
//   console.log('Chuột đã rời đi!')
// }

// const submitForm = () => {
//   alert('Form đã gửi nhưng không reload trang!')
// }

// const message = ref('')
// const text = ref('')

// const handleInput = () => {
//   console.log('Giá trị nhập vào:', message.value)
// }

// const isActive = ref(true)
// const error = ref(null)

// const classObject = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal',
// }))

// const activeClass = ref('active')
// const errorClass = ref('text-danger')

// const question = ref('')
// const answer = ref('Questions usually contain a question mark. ;-)')
// const loading = ref(false)

// watch hoạt động trực tiếp trên ref
// watch(question, async (newQuestion, oldQuestion) => {
//   console.log(`question changed: ${oldQuestion} => ${newQuestion}`)
// })

// const user = ref({
//   name: 'John',
//   age: 25,
// })

// watch(
//   user,
//   (newUser, oldUser) => {
//     console.log(`User thay đổi từ`, oldUser, `thành`, newUser)
//   },
//   { deep: true },
// )

// const { count, increment, decrement } = useCounter()
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3> -->
    <div class="flex flex-col gap-4">
      <!-- <button @click="sayHello">Nhấn vào tôi</button>
      <button @click="sayHelloParam('Khainb')">Nhấn vào tôi</button>

      <input type="text" v-model="message" @input="handleInput" />
      <p>Bạn vừa nhập: {{ message }}</p>

      <form @submit.prevent="submitForm">
        <button type="submit">Gửi</button>
      </form>

      <button @mouseover="hoverEffect" @mouseout="removeEffect">Di chuột vào tôi</button>
      <div :class="[activeClass, errorClass]">123</div>
      <p>{{ text }}</p>
      <input v-model="text" />

      <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" /> -->

      <!-- <component :is="currentComponent" />
      <button @click="currentComponent = currentComponent === ComponentA ? ComponentB : ComponentA">
        Chuyển Component
      </button> -->
      <!-- <div>count is: {{ count }}</div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button> -->
      <component :is="UserList" />
      <!-- <UserList /> -->
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
