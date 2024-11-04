<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-if="errorMessage" class="text-red-500 text-sm mb-4 text-center">{{ errorMessage }}</div>
      <div v-if="user" class="text-center">
        <img :src="user.image" alt="User Avatar" class="w-24 h-24 rounded-full mx-auto mb-4">
        <h2 class="text-2xl font-bold mb-2">{{ user.firstName }} {{ user.lastName }}</h2>
        <p class="text-gray-600 mb-2">{{ user.company.department }}</p>
        <p class="text-gray-500 mb-2">{{ user.email }}</p>
        <p class="text-gray-500">{{ user.phone }}</p>

        <button class="bg-red-500 hover:bg-red-600 text-white w-full font-bold py-2 px-4 rounded mt-5" @click="logOut">Выйти</button>
      </div>

      <div v-if="isLoading" class="text-center text-gray-500">Загрузка данных пользователя...</div>
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
      user: null,
      errorMessage: '',
      isLoading: false
    };
  },
  methods: {
    async fetchUserData() {
      try {
        this.isLoading = true;
        const response = await fetch('https://dummyjson.com/users/1');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        this.user = await response.json();
      } catch (error) {
        this.errorMessage = error
      } finally {
        this.isLoading = false
      }
    },
    logOut() {
      this.user = null;
      this.errorMessage = '';
      this.isLoading = false;
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchUserData();
  }
};
</script>

<style scoped>
/* Дополнительные стили для центрирования и оформления */
</style>
