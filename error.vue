<script setup lang="ts">
const error = useError();

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div>
        <h1>Error Page</h1>
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
        <button @click="handleError">Clear errors</button>
    </div>
</template>
