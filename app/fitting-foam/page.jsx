import { FaShippingFast, FaHandsHelping, FaClock, FaShieldAlt, FaTachometerAlt, FaTools } from 'react-icons/fa';

export default function FittingFoam() {
    return (
        <div className="bg-background p-6 text-black">
            {/* Nagłówek strony */}
            <div className="text-center">
                <h1 className="text-h1 font-bold text-blue mb-4">
                    Jak zrozumieliśmy twoją sytuację?
                </h1>
                <p className="text-p1 text-darkGrey">
                    Jako montażysta okien i drzwi, priorytetem jest dla mnie efektywność i jakość pracy.
                </p>
            </div>

            {/* Kluczowe cechy pianki */}
            <div className="mt-10">
                <h2 className="text-h2 font-bold text-black mb-6">Kluczowe cechy pianki montażowej</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Wydajność */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaTachometerAlt className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Wydajność</h3>
                            <p className="text-p2">
                                Z jednej puszki jestem w stanie wykonać więcej uszczelnień, co oszczędza czas i pieniądze.
                            </p>
                        </div>
                    </div>

                    {/* Szybkie schnięcie */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaClock className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Szybkie schnięcie</h3>
                            <p className="text-p2">
                                Krótki czas schnięcia pozwala mi szybko przejść do kolejnych etapów montażu.
                            </p>
                        </div>
                    </div>

                    {/* Niska rozprężność */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaShieldAlt className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Niska rozprężność</h3>
                            <p className="text-p2">
                                Minimalizuje ryzyko odkształceń ram i futryn, zapewniając trwałość montażu.
                            </p>
                        </div>
                    </div>

                    {/* Wysoka gęstość */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaTools className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Wysoka gęstość</h3>
                            <p className="text-p2">
                                Pianka bez pęcherzy powietrza zapewnia lepszą izolację termiczną i akustyczną.
                            </p>
                        </div>
                    </div>

                    {/* Stabilność wymiarowa */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaHandsHelping className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Stabilność wymiarowa</h3>
                            <p className="text-p2">
                                Pianka zachowuje swoje wymiary po utwardzeniu, eliminując konieczność poprawek.
                            </p>
                        </div>
                    </div>

                    {/* Odporność na kruszenie */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaShieldAlt className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Odporność na kruszenie</h3>
                            <p className="text-p2">
                                Odporna na naprężenia i wibracje, co gwarantuje trwałość uszczelnienia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kluczowe cechy współpracy */}
            <div className="mt-16">
                <h2 className="text-h2 font-bold text-black mb-6">Kluczowe cechy współpracy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Szybka wysyłka */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaShippingFast className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Szybka wysyłka</h3>
                            <p className="text-p2">
                                Zamówienia złożone do godziny 12 dostarczane są już następnego dnia.
                            </p>
                        </div>
                    </div>

                    {/* Dostawa na budowę */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaTools className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Dostawa na budowę</h3>
                            <p className="text-p2">
                                Produkty dostarczane bezpośrednio na plac budowy oszczędzają czas.
                            </p>
                        </div>
                    </div>

                    {/* Kontakt i rabaty */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <FaHandsHelping className="text-blue text-4xl mr-4" />
                        <div>
                            <h3 className="text-h3 font-bold mb-2">Natychmiastowy kontakt</h3>
                            <p className="text-p2">
                                Szybka reakcja dostawcy oraz rabaty ilościowe pozwalają na optymalizację kosztów.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
