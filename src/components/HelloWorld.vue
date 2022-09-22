<template>
    <div class="p-fluid">
        <div class="card">
            <h5>Basic</h5>
            <Chips v-model="value1" />

            <h5>Comma Separator</h5>
            <Chips v-model="value2" separator="," />

            <h5>Template</h5>
            <Chips v-model="value3">
                <template #chip="slotProps">
                    <div>
                        <span>{{slotProps.value}} - (active) </span>
                        <i class="pi pi-user-plus" style="font-size: 14px"></i>
                    </div>
                </template>
            </Chips>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref();
        const value2 = ref();
        const value3 = ref();

        return { value1, value2, value3 }
    }
}
</script>
