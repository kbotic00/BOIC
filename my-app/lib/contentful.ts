// GraphQL query to fetch products
const gqlAllProductsQuery = `query ProductList {
  ProductBoxCollection {
    items {
      id
      name
      shortDescription
    }
  }
}`;

// Interfaces for the Contentful response structure
interface ProductCollectionResponse {
  ProductBoxCollection: {
    items: Product[];
  };
}

interface Product {
  id: string
  name: string;
  shortDescription: string;
}

// Contentful access credentials
const CONTENTFUL_ACCESS_TOKEN = "_Rk0GAc8LKqdTqE1CuvzRlJPBagqRqR-PgprO_AoZxU";
const CONTENTFUL_SPACE_ID = "vr5txujp0elk";

// Function to fetch products from Contentful
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: gqlAllProductsQuery }),
      }
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const json: { data: ProductCollectionResponse } = await response.json();

    // Check if data is available in the response
    if (!json.data || !json.data.ProductBoxCollection || !json.data.ProductBoxCollection.items) {
      throw new Error("Invalid data structure returned from Contentful");
    }

    // Return the items from the ProductBoxCollection
    return json.data.ProductBoxCollection.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of error
  }
};
