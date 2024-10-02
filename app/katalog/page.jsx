import products from '../../data/products.json'; // Zaktualizowano ścieżkę

const Katalog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Katalog Produktów</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto block md:table">
          <thead className="block md:table-header-group">
            <tr className="bg-gray-100 md:table-row">
              <th className="px-4 py-2 block md:table-cell">Zdjęcie</th>
              <th className="px-4 py-2 block md:table-cell">Nazwa</th>
              <th className="px-4 py-2 block md:table-cell">Producent</th>
              <th className="px-4 py-2 block md:table-cell">Cena (zł)</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {products.map(product => (
              <tr key={product.product_code} className="border-b block md:table-row">
                <td className="px-4 py-2 block md:table-cell">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-contain"
                  />
                </td>
                <td className="px-4 py-2 block md:table-cell">{product.name}</td>
                <td className="px-4 py-2 block md:table-cell">{product.producer}</td>
                <td className="px-4 py-2 block md:table-cell">{product.price.toFixed(2)} zł</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Katalog;