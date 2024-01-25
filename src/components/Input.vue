<script setup lang="ts">
import { ref } from "vue";

defineProps<{ value: string; isValid: boolean }>();

let password = ref("");

const emit = defineEmits<{
  (e: "updatePw"): string;
}>();
</script>

<template>
  <input
    id="game-input"
    v-model="password"
    @input="(e: InputEvent) => emit('updatePw', e.target?.value)"
    type="string"
    :class="{
      'bg-light border border-sand-400 focus:outline-sand-300 rounded-md px-4 py-2 placeholder:text-sand-400 mb-4': true,
    }"
    placeholder="Gib ein gültiges Passwort ein"
  />
</template>
