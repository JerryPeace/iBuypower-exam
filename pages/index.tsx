import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import Slider from '@@src/components/Slider';
import computersAPI from '@@src/apis/clients/computersAPI';
import FullLoading from '@@src/components/FullLoading';
import { Computer } from '@@types/computer';

export default function Home() {
  const [productList, setproductList] = useState<Computer[]>([]);
  const { data, isLoading } = useQuery('computers', () => computersAPI.getAllComputers());
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setproductList(data);
    }
  }, [data]);

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Best Seller Gaming PC</title>
        <meta name="description" content="Discover the best seller gaming PCs, both prebuilt and custom." />
      </Head>
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-1">Best Seller Gaming PC</h1>
        <h2 className="text-xl font-bold">Prebuild & Custom</h2>
      </div>
      {data && <Slider data={productList} />}
      {isLoading && <FullLoading isLoading={isLoading} />}
    </div>
  );
}
