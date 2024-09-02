// lib/contentful.ts

// GraphQL query to fetch all products
const gqlAllProductsQuery = `query ProductList {
  probaproductCollection {
    items {
      sys {
        id
      }
      name
      shortDescription
      color
      price
      brand
      description
      gender
      mainPhoto {
        url
      }
      image2 {
        url
      }
      image3 {
        url
      }
      image4 {
        url
      }
    }
  }
}`;

// GraphQL query to fetch a single product by ID
const gqlSingleProductQuery = `query ProductDetails($id: String!) {
  probaproduct(id: $id) {
    sys {
      id
    }
    name
    shortDescription
    color
    price
    brand
    description
    gender
    mainPhoto {
      url
    }
    image2 {
      url
    }
    image3 {
      url
    }
    image4 {
      url
    }
  }
}`;

// Interfaces for the Contentful response structure
interface ProductCollectionResponse {
  probaproductCollection: {
    items: Product[];
  };
}

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  color: string;
  price: number;
  brand: string;
  description: string;
  gender: string;
  mainPhoto?: {
    url: string;
  };
  image2?: {
    url: string;
  };
  image3?: {
    url: string;
  };
  image4?: {
    url: string;
  };
}

// Contentful access credentials
const CONTENTFUL_ACCESS_TOKEN = "_Rk0GAc8LKqdTqE1CuvzRlJPBagqRqR-PgprO_AoZxU";
const CONTENTFUL_SPACE_ID = "vr5txujp0elk";

// Base URL for Contentful GraphQL API
const GRAPHQL_API_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`;

// Function to fetch all products from Contentful
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gqlAllProductsQuery }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const json: { data: ProductCollectionResponse } = await response.json();

    return json.data.probaproductCollection.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of error
  }
};

// Function to fetch a single product by ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gqlSingleProductQuery, variables: { id } }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const json: { data: { probaproduct: Product | null } } = await response.json();

    return json.data.probaproduct || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Return null in case of error
  }
};
