<script setup>
import { useStatus, useFlag } from "@featurevisor/vue";

import HelloWorld from "./components/HelloWorld.vue";
import Usage from "./components/Usage.vue"

const status = useStatus();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <div class="featurevisor-status">
        <div v-if="status.isReady">
          <Usage />
        </div>
        <div v-else>
          Featurevisor SDK is loading...
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.featurevisor-status {
  margin-top: 20px;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
