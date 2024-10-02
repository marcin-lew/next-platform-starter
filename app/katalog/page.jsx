import products from '../../data/products.json'; // Ścieżka do pliku JSON

const Katalog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Katalog Produktów</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Zdjęcie</th>
            <th className="px-4 py-2">Nazwa</th>
            <th className="px-4 py-2">Producent</th>
            <th className="px-4 py-2">Cena (zł)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.product_code} className="border-b">
              <td className="px-4 py-2">
                <img
                  src={product['images 1']}
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
  );
};

export default Katalog;