export const metadata = {
    title: 'Oferta'
};

export default function Oferta() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Jak zrozumieliśmy twoją sytuację?</h1>
            <p className="mb-4">
                Jako montażysta okien i drzwi, priorytetem jest dla mnie efektywność i jakość pracy.
            </p>
            <p className="mb-4">
                Dlatego przy wyborze pianki montażowej zwracam uwagę na kilka kluczowych cech:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Wydajność:</strong> Wysoka wydajność pianki oznacza, że z jednej puszki jestem w stanie wykonać więcej uszczelnień, co bezpośrednio przekłada się na oszczędność czasu i pieniędzy.</li>
                <li><strong>Szybkie schnięcie:</strong> Krótki czas schnięcia umożliwia szybką obróbkę pianki, co pozwala mi uniknąć opóźnień i sprawnie przejść do kolejnych etapów montażu.</li>
                <li><strong>Niska rozprężność:</strong> Pianka o niskiej rozprężności minimalizuje ryzyko odkształceń futryn czy ram, co chroni mnie przed reklamacjami i dodatkowymi kosztami.</li>
                <li><strong>Wysoka gęstość:</strong> Gęsta pianka, bez pęcherzy powietrza, zapewnia lepszą izolację termiczną i akustyczną, co przekłada się na komfort i zadowolenie moich klientów.</li>
                <li><strong>Stabilność wymiarowa:</strong> Pianka, która po utwardzeniu zachowuje swoje pierwotne wymiary, eliminuje konieczność poprawek i przyspiesza moją pracę.</li>
                <li><strong>Odporność na kruszenie:</strong> Odporność na naprężenia i wibracje to gwarancja trwałości wykonanego uszczelnienia, co daje mi pewność, że moja praca będzie służyć klientom przez lata.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Współpracując z dostawcami, kluczowe są dla mnie:</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Szybka wysyłka:</strong> Gwarantowana dostawa zamówień złożonych do godziny 12 już następnego dnia pozwala mi uniknąć przestojów w pracy i dotrzymać terminów realizacji projektów.</li>
                <li><strong>Dostawa na budowę:</strong> Możliwość dostarczenia produktów bezpośrednio na plac budowy oszczędza mi cenny czas, który musiałbym poświęcić na zakupy stacjonarne.</li>
                <li><strong>Natychmiastowy kontakt:</strong> Dostępność i szybka reakcja dostawcy w sytuacjach kryzysowych daje mi pewność, że ewentualne problemy zostaną rozwiązane natychmiast, bez wpływu na moją pracę.</li>
                <li><strong>Rabaty ilościowe:</strong> System rabatów za większe zamówienia to dla mnie dodatkowa oszczędność, która pozwala mi optymalizować koszty prowadzenia działalności.</li>
            </ul>
        </div>
    );
}
