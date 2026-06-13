import axios from 'axios';

export type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export async function fetchProducts(signal?: AbortSignal): Promise<FakeStoreProduct[]> {
  try {
    const res = await axios.get<FakeStoreProduct[]>('https://fakestoreapi.com/products', {
      signal,
    });

    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const status = e.response?.status;

      let message = status ? `Request failed with status ${status}` : 'Request failed.';

      const data = e.response?.data as unknown;
      if (data && typeof data === 'object' && 'message' in (data as Record<string, unknown>)) {
        message = String((data as Record<string, unknown>).message);
      }

      // Preserve previous behavior: throw only the message.
      throw new Error(message, { cause: e });
    }

    throw new Error('Failed to fetch products.', { cause: e });
  }
}



