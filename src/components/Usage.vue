<script setup>
import { useFlag } from "@featurevisor/vue";

const featureKey = "baz";
const context = { userId: "123" };
const isEnabled = useFlag(featureKey, context);
</script>

<template>
  <div class="usage">
    <div class="featurevisor-status">
      Featurevisor SDK is ready, and <code>baz</code> feature is evaluated as <code>{{ isEnabled }}</code>.
    </div>
  </div>
</template>
