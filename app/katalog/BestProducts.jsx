import products from '../../data/products.json'; // Importowanie danych JSON

const BestProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Najlepsze produkty dla Ciebie</h2>

      {/* Sekcja dla pianki Soudal Classic */}
      <div className="flex flex-col md:flex-row bg-white shadow-md p-6 mb-8">
        <div className="md:w-1/3">
          <img
            src={products[0].imageUrl}
            alt="Piana Soudal Classic 750 ml"
            className="w-32 h-32 object-contain mb-4" // Zmieniono rozmiar obrazka
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-bold mb-2">Piana Soudal Classic 750 ml</h3>
          <p className="mb-4 text-gray-600">
            Wydajność i szybkość, których potrzebujesz. Do 60 litrów pianki, gotowej do dalszej obróbki w mgnieniu oka.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Wyróżniki:</h4>
              <ul className="list-disc list-inside text-gray-800"> {/* Zmiana koloru tekstu */}
                <li>Wydajność: do 60 litrów</li>
                <li>Czas schnięcia: 30 minut dla warstwy 3 cm</li>
                <li>Rozprężność: niska</li>
                <li>Gęstość: wysoka (19 kg/m3)</li>
                <li>Stabilność wymiarowa: stabilna</li>
                <li>Izolacyjność termiczna: λ - 0,035 W/m*K</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cennik:</h4>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-800">
                  <tr>
                    <th className="text-left p-2">Ilość</th>
                    <th className="text-right p-2">Cena netto/szt.</th>
                    <th className="text-right p-2">Cena brutto/szt.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left p-2">1 sztuka</td>
                    <td className="text-right p-2">18,69 zł</td>
                    <td className="text-right p-2">22,99 zł</td>
                  </tr>
                  <tr>
                    <td className="text-left p-2">2 kartony</td>
                    <td className="text-right p-2">-</td>
                    <td className="text-right p-2">22,64 zł</td>
                  </tr>
                  <tr>
                    <td className="text-left p-2">5 kartonów</td>
                    <td className="text-right p-2">-</td>
                    <td className="text-right p-2">22,41 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;