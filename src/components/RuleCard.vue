<script setup lang="ts">
import { computed } from "vue";
import { Rule } from "../interfaces/Rule.ts";

let props = defineProps<{
  rule: Rule;
  order: number;
  password: string;
  activeIndex: number;
}>();

const isFullfilled = computed<boolean>(() => {
  return props.rule.condition(props.password);
});
</script>

<template>
  <transition
    enter-from-class="-translate-y-[50%] opacity-0 !-mt-12"
    enter-active-class="transition duration-500"
    leave-to-class="-translate-y-[50%] opacity-0 !-mt-12"
    leave-active-class="transition transition-all duration-500"
  >
    <div
      v-if="order <= activeIndex"
      :class="{
        'my-2 bg-light border-4 rounded-md': true,
        'border-green': isFullfilled,
        'border-red': !isFullfilled,
      }"
    >
      <div
        :class="{
          'flex space-x-4 p-4 text-sand-100 flex items-center': true,
          'bg-green': isFullfilled,
          'bg-red': !isFullfilled,
        }"
      >
        <i
          :class="{
            'fa-solid': true,
            'fa-check': isFullfilled,
            'fa-times': !isFullfilled,
          }"
        ></i>
        <h2 class="text-2xl">Rule {{ order + 1 }}:</h2>
      </div>
      <div class="p-4">
        <div>{{ rule.description }}</div>
      </div>
    </div>
  </transition>
</template>
