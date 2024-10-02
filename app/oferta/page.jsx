export const metadata = {
    title: 'Oferta'
};

export default function Oferta() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Sekcja 1: Zrozumienie sytuacji */}
            <section className="py-8 bg-light-grey-2">
                <h1 className="text-4xl font-bold text-center mb-8">Jak zrozumieliśmy twoją sytuację?</h1>
                <p className="text-center mb-8 max-w-2xl mx-auto">
                    Jako montażysta okien i drzwi, priorytetem jest dla mnie efektywność i jakość pracy.
                    Dlatego przy wyborze pianki montażowej zwracam uwagę na kilka kluczowych cech:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Karty z ikonami */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex items-start space-x-4">
                        <img src="/path/to/icon1.svg" alt="Wydajność" className="w-12 h-12"/>
                        <div>
                            <h3 className="text-xl font-semibold">Wydajność</h3>
                            <p className="mt-2">
                                Wysoka wydajność pianki oznacza, że z jednej puszki jestem w stanie wykonać więcej uszczelnień, co bezpośrednio przekłada się na oszczędność czasu i pieniędzy.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg flex items-start space-x-4">
                        <img src="/path/to/icon2.svg" alt="Szybkie schnięcie" className="w-12 h-12"/>
                        <div>
                            <h3 className="text-xl font-semibold">Szybkie schnięcie</h3>
                            <p className="mt-2">
                                Krótki czas schnięcia umożliwia szybką obróbkę pianki, co pozwala mi uniknąć opóźnień i sprawnie przejść do kolejnych etapów montażu.
                            </p>
                        </div>
                    </div>
                    {/* Dodaj więcej kart z ikonami dla pozostałych cech */}
                </div>
            </section>

            {/* Sekcja 2: Współpraca z dostawcami */}
            <section className="py-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Współpracując z dostawcami, kluczowe są dla mnie:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Karty z ikonami */}
                    <div className="bg-light-grey-1 p-6 shadow-lg rounded-lg flex items-start space-x-4">
                        <img src="/path/to/icon-shipping.svg" alt="Szybka wysyłka" className="w-12 h-12"/>
                        <div>
                            <h3 className="text-xl font-semibold">Szybka wysyłka</h3>
                            <p className="mt-2">
                                Gwarantowana dostawa zamówień złożonych do godziny 12 już następnego dnia pozwala mi uniknąć przestojów w pracy.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light-grey-1 p-6 shadow-lg rounded-lg flex items-start space-x-4">
                        <img src="/path/to/icon-delivery.svg" alt="Dostawa na budowę" className="w-12 h-12"/>
                        <div>
                            <h3 className="text-xl font-semibold">Dostawa na budowę</h3>
                            <p className="mt-2">
                                Możliwość dostarczenia produktów bezpośrednio na plac budowy oszczędza mi cenny czas, który musiałbym poświęcić na zakupy stacjonarne.
                            </p>
                        </div>
                    </div>
                    {/* Dodaj więcej kart z ikonami dla pozostałych cech */}
                </div>
            </section>
        </div>
    );
}

