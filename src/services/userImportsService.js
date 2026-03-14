// services/userImportsService.js
import { 
  isShopifyConnected, 
  importCategoriesData, 
  importedProductsData, 
  importProductDetailData 
} from '@/data/userImportsData';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function checkShopifyConnection() {
  await delay(300); // Simulate network lag
  return { connected: isShopifyConnected };
}

export async function fetchImportCategories() {
  await delay(200);
  return importCategoriesData;
}

export async function fetchImportedProducts(filters = {}) {
  await delay(400);
  // In a real app, you would filter based on the 'filters' object here
  return importedProductsData;
}

export async function fetchImportProductById(id) {
  await delay(300);
  // In a real app, fetch /api/user/imports/${id}
  return importProductDetailData;
}