<template>
    <label v-if="label">{{ label }}</label>
    <select
        class="field"
        :value="modelValue"
        v-bind="{
            ...$attrs,
            onChange: ($event) => { $emit('update:modelValue', ($event.target as HTMLInputElement)?.value) }
        }"
    >
    <option
        v-for="option in options"
        :value="valueExtractor(option)"
				:key="keyExtractor(option)"
				:selected="valueExtractor(option) === modelValue">
    >{{ textExtractor(option) }}</option>
  </select>
</template>

<script setup lang="ts" generic="T">
	defineProps<{
		label: string;
		modelValue: T[keyof T];
		options: T[];
		keyExtractor: (x: T) => string | number | symbol | undefined;
		valueExtractor: (x: T) => T[keyof T];
		textExtractor: (x: T) => T[keyof T];
	}>();
</script>
    