<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="item in checkboxFilters"
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
          :checked="shirtStore.form.filter[item.key].includes(value)"
          @input="checkboxHandler(item.key, value)"
        />
        <label
          :for="value"
          class="shrink-0"
        >
          {{ value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shirtStore = useShirtStore();

const checkboxFilters = computed(() => {
  return Object.entries(shirtStore.itemFilterCriteria).map(([key, values]) => {
    return {
      key,
      values,
    };
  });
});

const checkboxHandler = (key: string, value: string) => {
  const index = shirtStore.form.filter[key].indexOf(value);
  if (index === -1) {
    updateFilter({
      ...shirtStore.form.filter,
      [key]: [...shirtStore.form.filter[key], value],
    });
  } else {
    updateFilter({
      ...shirtStore.form.filter,
      [key]: shirtStore.form.filter[key].filter((_, i) => i !== index),
    });
  }
};

const updateFilter = (filter: Record<string, string[]>) => {
  shirtStore.setForm({
    filter,
  });
};
</script>

<style scoped></style>
