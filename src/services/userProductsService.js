import { productsData, getProductDetailData, categoryData } from '@/data/userProductsData';

const delay = (ms) => new Promise(r => setTimeout(r, ms));

export async function fetchCategories() {
  await delay(200);
  return categoryData;
}

export async function fetchProducts() {
  await delay(400);
  return productsData;
}

export async function fetchProductById(id) {
  await delay(300);
  return getProductDetailData(id);
}

export async function fetchRelatedProducts(id) {
  await delay(300);
  return productsData.filter(p => p.id !== Number(id)).slice(0, 8);
}