import { productApis } from 'apis';
import { useState, useEffect } from 'react';

export default function useProductDetail(slug) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //IFFE
    (async () => {
      try {
        setLoading(true);
        const response = await productApis.get(slug);
        setProduct(response.product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('Failed', error);
      }
    })();
  }, [slug]);

  return { product, loading };
}
