<script setup lang="ts">
const createErr = () => {
    throw createError({
        statusCode: 500,
        statusMessage: "test error",
        fatal: true,
    });
}
</script>

<template>
    <div>
        index
        <button @click="createErr">create errors</button>
    </div>
</template>

<style scoped></style>
