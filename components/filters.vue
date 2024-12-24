<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="item in filters"
      :key="item.key"
      class="flex flex-col gap-2 items-start"
    >
      <div class="font-semibold">{{ item.key }}</div>
      <div
        :key="value"
        v-for="value in item.values"
        class="flex gap-2 items-center"
      >
        <input
          type="checkbox"
          :id="value"
          :value="value"
          :checked="filter[item.key].includes(value)"
          @input="checkboxHandler(item.key, value)"
        />
        <label :for="value">{{ value }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  criteria: Record<string, string[]>;
  filter: Record<string, string[]>;
}>();

const emit = defineEmits({
  'update:filter': (value: Record<string, string[]>) => true,
});

const filters = computed(() => {
  return Object.entries(props.criteria).map(([key, values]) => {
    return {
      key,
      values,
    };
  });
});

const checkboxHandler = (key: string, value: string) => {
  const index = props.filter[key].indexOf(value);
  if (index === -1) {
    emit('update:filter', {
      ...props.filter,
      [key]: [...props.filter[key], value],
    });
  } else {
    emit('update:filter', {
      ...props.filter,
      [key]: props.filter[key].filter((_, i) => i !== index),
    });
  }
};
</script>

<style scoped></style>
