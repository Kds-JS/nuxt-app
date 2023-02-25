<template>
    <div class="container mx-auto flex bg-white shadow-lg">
        <div class="aspect-square overflow-hidden">
        <img :src="character.photo" :alt="character.name" />
        </div>
        <div class="p-4 ">
        <h2 class="text-xl font-display text-accent font-bold mb-4">{{ character.name }}</h2>
        <p class="text-sm font-italic text-gray-600 mb-4">{{ character.alias }}</p>
        <p class="text-sm text-gray-600 mb-4">{{ character.born }}</p>
        <p class="text-gray-600">{{ character.occupation }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const {slug} = useRoute().params;

    const {data: character} = await useFetch(`api/characters/${slug}`);
</script>

<style scoped>

</style>