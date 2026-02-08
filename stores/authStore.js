// stores/authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const user = ref({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAbWF6YXlhc29sdXRpb25zLmNvbSIsImlhdCI6MTc2OTYwMjA2MywiZXhwIjoxNzY5Njg4NDYzfQ.t2ZHOdPwn3e5TBj16Rl7dIHk0GYiyI83V1KZhthVvck', role: null });

    const handleUserData = (newUser) => {
      user.value.token = newUser?.token;
      user.value.role = newUser?.role;
    };

    return { user, handleUserData };
  },
  {
    persist: true,
  },
);