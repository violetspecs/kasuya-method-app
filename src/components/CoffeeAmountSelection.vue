<template>
    <div class="q-pa-md">
        <q-btn-toggle
        v-model="model"
        toggle-color="primary"
        :options="[
            {label: '1 cup', value: 15},
            {label: '2 cups', value: 30},
        ]"
        />
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoffeeAmountSelection',
})
</script>