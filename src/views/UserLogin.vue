<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-xs">
      <form @submit.prevent="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-2xl font-bold mb-4 text-center">Вход</h2>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Email" :disabled="isLoading"/>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Пароль</label>
          <input v-model="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Пароль" :disabled="isLoading"/>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</div>

        <div class="flex items-center justify-between">
          <button type="submit" :disabled="isLoading" class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded" >
            Войти
          </button>
        </div>
      </form>
    </div>

    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div class="loader bg-white p-4 rounded-full flex items-center justify-center">
        <svg class="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      errorMessage: '',
    }
  },
  methods: {
    async onSubmit() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Введите email и пароль';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        // Имитация запроса на сервер
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка 2 секунды для примера

        // Проверка email и password
        if (this.email === 'test@example.com' && this.password === 'password') {
          this.$router.push('/profile');
        } else {
          this.errorMessage = 'Неверный email или пароль';
        }
        } catch (error) {
          this.errorMessage = 'Произошла ошибка при входе. Попробуйте позже.';
        } finally {
          this.isLoading = false;
        }
    }
  }
}
</script>


<style scoped>

</style>