<script setup>
    const props = defineProps(['filter', 'mode', 'index'])
</script>

<template>
    <div class="ml-4 uppercase pb-5 cursor-pointer" @click="$emit('uncollapse', props.index, props.filter.index)">
        <hr class="border-neutral-500/20">
        <div class="pt-5 flex justify-between">
            <div>{{ props.filter.text }}</div>
            <div class="text-xs pt-1 font-bold">{{ props.filter.count }}</div>
        </div>
        <div class="pt-2 gap-2" :class="{ hidden: props.filter.collapsed, flex: !props.filter.collapsed }">
            <router-link :to="'/quiz/' + props.mode + '/' + props.filter.category" class="px-2 py-1 border">Spielen</router-link>
            <router-link :to="'/learn/' + props.mode + '/' + props.filter.category" class="px-2 py-1 border">Lernen</router-link>
        </div>
    </div>
</template>
