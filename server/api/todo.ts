const data: { id: number; title: string } = {
  id: 1,
  title: "Fetch data with Nuxt 3",
};
export default defineEventHandler(async (event) => data);
