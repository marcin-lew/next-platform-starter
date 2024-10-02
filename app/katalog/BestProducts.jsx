import products from '../../data/products.json'; // Importujemy dane JSON

const BestProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Najlepsze produkty dla Ciebie</h2>

      {/* Sekcja dla pianki Soudal Classic */}
      <div className="flex flex-col md:flex-row bg-white shadow-md p-6 mb-8">
        <div className="md:w-1/3">
          <img
            src={products[0].imageUrl} // Przypisanie zdjęcia z pliku JSON
            alt="Piana Soudal Classic 750 ml"
            className="w-full h-auto"
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
              <ul className="list-disc list-inside">
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
              <table className="min-w-full bg-gray-100">
                <tbody>
                  <tr>
                    <td>1 sztuka:</td>
                    <td className="text-right">18,69 zł netto / 22,99 zł brutto</td>
                  </tr>
                  <tr>
                    <td>2 kartony:</td>
                    <td className="text-right">22,64 zł brutto/szt.</td>
                  </tr>
                  <tr>
                    <td>5 kartonów:</td>
                    <td className="text-right">22,41 zł brutto/szt.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja dla pianki Soudal Maxi Gun */}
      <div className="flex flex-col md:flex-row bg-white shadow-md p-6 mb-8">
        <div className="md:w-1/3">
          <img
            src={products[1].imageUrl} // Przypisanie zdjęcia z pliku JSON
            alt="Soudal Maxi Gun"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-bold mb-2">Soudal Maxi Gun</h3>
          <p className="mb-4 text-gray-600">
            Pianka poliuretanowa o najwyższej wydajności i ekonomiczności, niskiej rozprężności i krótkim czasie utwardzania.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Wyróżniki:</h4>
              <ul className="list-disc list-inside">
                <li>Wydajność: do 70 litrów</li>
                <li>Czas schnięcia: 30 minut dla warstwy 3 cm</li>
                <li>Rozprężność: niska</li>
                <li>Gęstość: wysoka (19 kg/m3)</li>
                <li>Stabilność wymiarowa: tak</li>
                <li>Izolacyjność termiczna: λ - 0,035 W/m*K</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cennik:</h4>
              <table className="min-w-full bg-gray-100">
                <tbody>
                  <tr>
                    <td>1 sztuka:</td>
                    <td className="text-right">22,15 zł netto / 27,24 zł brutto</td>
                  </tr>
                  <tr>
                    <td>2 kartony:</td>
                    <td className="text-right">32,33 zł brutto/szt.</td>
                  </tr>
                  <tr>
                    <td>5 kartonów:</td>
                    <td className="text-right">31,95 zł brutto/szt.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja dla Langer 70 (Bestseller) */}
      <div className="flex flex-col md:flex-row bg-white shadow-md p-6 mb-8 border-l-4 border-yellow-500">
        <div className="md:w-1/3">
          <img
            src={products[2].imageUrl} // Przypisanie zdjęcia z pliku JSON
            alt="Langer 70"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-bold mb-2">Langer 70 <span className="text-yellow-500">Bestseller</span></h3>
          <p className="mb-4 text-gray-600">
            Nasz bestseller wśród pianek montażowych! Najwyższa wydajność 70 litrów w połączeniu z atrakcyjną ceną.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Wyróżniki:</h4>
              <ul className="list-disc list-inside">
                <li>Wydajność: do 70 litrów</li>
                <li>Czas schnięcia: 15 minut</li>
                <li>Rozprężność: niska</li>
                <li>Gęstość: 25 kg/m3</li>
                <li>Stabilność wymiarowa: tak</li>
                <li>Izolacyjność termiczna: λ - 30-35 mW/mK</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cennik:</h4>
              <table className="min-w-full bg-gray-100">
                <tbody>
                  <tr>
                    <td>1 sztuka:</td>
                    <td className="text-right">-</td>
                  </tr>
                  <tr>
                    <td>2 kartony:</td>
                    <td className="text-right">-</td>
                  </tr>
                  <tr>
                    <td>5 kartonów:</td>
                    <td className="text-right">-</td>
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