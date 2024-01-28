<script setup>
    import { filterProvider } from '@/data_provider'
    import FilterItem from '@/components/FilterItem.vue'
    import { ref } from 'vue'

    const props = defineProps(['mode', 'difficulty'])
    const categoryGroups = ref(filterProvider(props.mode))

    function uncollapseFilter(index, id) {
        // initial collapsed-status of clicked category
        let status = categoryGroups.value[index].categories[id].collapsed

        // collapse all categories
        categoryGroups.value.forEach(group => { group.categories.forEach(category => { category.collapsed = true }) });

        // toggle collapsed-status of clicked category
        categoryGroups.value[index].categories[id].collapsed = !status
    }
</script>

<template>
    <form>
        <div v-for="(categoryGroup, index) in categoryGroups">
            <h2 class="uppercase border-t border-neutral-500/20 mb-5 pt-5">{{ categoryGroup.title }}</h2>
            <FilterItem v-for="category in categoryGroup.categories" :filter="category" :mode="props.mode" :index="index" :difficulty="props.difficulty" @uncollapse="uncollapseFilter" />
        </div>
    </form>
</template>
