<script setup lang="ts">
import { computed, ref } from "vue";
import Input from "./components/Input.vue";
import RuleCard from "./components/RuleCard.vue";
import { Rule } from "./interfaces/Rule.ts";
import { rules, link } from "./data/rules.ts";

let password = ref("");
let activeIndex = ref(0);

const passwordIsValid = computed<boolean>(() => {
  return rules.every((r) => r.condition(password.value));
});

const activeRules = computed<Rule[]>(() => {
  return rules.slice(0, activeIndex.value + 1);
});

function updatePassword(pass: string) {
  password.value = pass;
  if (activeRules.value.every((r) => r.condition(pass))) {
    activeIndex.value++;
  }
}

function redirect() {
  window.location.href = link;
}
</script>

<template>
  <div id="game-container" class="bg-sand-100 min-h-screen text-dark mx-auto flex justify-center">
    <div class="max-w-[600px] flex flex-col p-6 sm:p-20">
      <div class="flex items-center mb-8">
        <h1 class="text-3xl md:text-4xl">The Password Game</h1>
      </div>
      <!-- <p class="mb-4">
        Das Christkind braucht ein neues Passwort. Kannst du helfen?
      </p> -->
      <transition
        enter-from-class="-translate-y-[50%] opacity-0 !-mt-12"
        enter-active-class="transition duration-700"
        leave-to-class="-translate-y-[50%] opacity-0 !-mt-12"
        leave-active-class="transition transition-all duration-700"
      >
        <div
          v-if="passwordIsValid"
          @click="redirect"
          class="rounded-md p-4 my-4 border-2 border-green text-center hover:p-6 hover:-mx-2 hover:shadow-xl hover:border-4 hover:cursor-pointer hover:bg-sand-200 transition-all duration-300"
        >
          <h2 class="text-2xl">Congratulations!</h2>
          <a :href="link"> Click here to receive a gift.</a>

          <div><i class="fa-solid fa-gifts text-green"></i></div>
        </div>
      </transition>
      <Input
        :value="password"
        :isValid="passwordIsValid"
        @updatePw="updatePassword"
      />
      <div class="flex flex-col-reverse">
        <RuleCard
          v-for="(r, index) in rules"
          :activeIndex="activeIndex"
          :rule="r"
          :order="index"
          :password="password"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Great Vibes", cursive;
  font-family: "Inter", sans-serif;
}
</style>
