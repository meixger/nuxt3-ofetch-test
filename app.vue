<script setup lang="ts">
import { NitroFetchRequest, TypedInternalResponse } from "nitropack";
async function genericApiClient<
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest
>(url: string): Promise<TypedInternalResponse<R, T>> {
  const promise1 = $fetch<T>(url);
  const promise2 = await promise1.then(x => x);
  return promise2;
}
const productUrl = "https://dummyjson.com/products/1";
const { data: product } = await useAsyncData(() => genericApiClient<{ id: number, title: string }>(productUrl))

const { data: todo } = await useFetch("/api/todo");
</script>

<template>
  <h2>Remote API</h2>
  <p>Product "{{ product?.title }}"</p>
  <h2>Nuxt server-side API</h2>
  <p>Todo "{{ todo?.title }}"</p>
</template>

<style>
body {
  font-family: monospace;
}
</style>