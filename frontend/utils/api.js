export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  console.log(requestUrl)
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const  {data: categories} = await fetchAPI("/categories");
  console.log(categories)
  return categories;
}

export async function getCategory(slug) {
  const {data: categories} = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  const {data: products} = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const {data: products} = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}
