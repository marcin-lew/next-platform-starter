import products from '../../data/products.json'; // Zaktualizowano ścieżkę

const Katalog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Katalog Produktów</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.product_code} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Producent: {product.producer}</p>
            <p className="text-gray-800 font-semibold">Cena: {product.price.toFixed(2)} zł</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Katalog;