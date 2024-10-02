import React from 'react';
import products from '../../data/products.json'; // Import pliku JSON z produktami
import BestProducts from './BestProducts'; // Import nowego komponentu z sekcją najlepszych produktów

const Katalog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Katalog Produktów</h1>

      {/* Sekcja tabeli produktów */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 sticky left-0 bg-white z-10">Zdjęcie</th>
              <th className="px-4 py-2">Nazwa</th>
              <th className="px-4 py-2">Producent</th>
              <th className="px-4 py-2">Cena (zł)</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.product_code} className="border-b">
                {/* Kolumna ze zdjęciem (stała przy przewijaniu) */}
                <td className="px-4 py-2 sticky left-0 bg-white z-10">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-contain"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.producer}</td>
                <td className="px-4 py-2">{product.price.toFixed(2)} zł</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sekcja najlepszych produktów */}
      <BestProducts />

    </div>
  );
};

export default Katalog;