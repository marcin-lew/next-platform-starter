import React from 'react';

const Oferta = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Jak zrozumieliśmy twoją sytuację?</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Wydajność</h2>
          <p>Wysoka wydajność pianki oznacza, że z jednej puszki jestem w stanie wykonać więcej uszczelnień, co bezpośrednio przekłada się na oszczędność czasu i pieniędzy.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Szybkie schnięcie</h2>
          <p>Krótki czas schnięcia umożliwia szybką obróbkę pianki, co pozwala mi uniknąć opóźnień i sprawnie przejść do kolejnych etapów montażu.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Niska rozprężność</h2>
          <p>Pianka o niskiej rozprężności minimalizuje ryzyko odkształceń futryn czy ram, co chroni mnie przed reklamacjami i dodatkowymi kosztami.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Wysoka gęstość</h2>
          <p>Gęsta pianka, bez pęcherzy powietrza, zapewnia lepszą izolację termiczną i akustyczną, co przekłada się na komfort i zadowolenie moich klientów.</p>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mb-6">Współpraca z dostawcami</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Szybka wysyłka</h2>
          <p>Gwarantowana dostawa zamówień złożonych do godziny 12 już następnego dnia pozwala mi uniknąć przestojów w pracy i dotrzymać terminów realizacji projektów.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Dostawa na budowę</h2>
          <p>Możliwość dostarczenia produktów bezpośrednio na plac budowy oszczędza mi cenny czas, który musiałbym poświęcić na zakupy stacjonarne.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Natychmiastowy kontakt</h2>
          <p>Dostępność i szybka reakcja dostawcy w sytuacjach kryzysowych daje mi pewność, że ewentualne problemy zostaną rozwiązane natychmiast, bez wpływu na moją pracę.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Rabaty ilościowe</h2>
          <p>System rabatów za większe zamówienia to dla mnie dodatkowa oszczędność, która pozwala mi optymalizować koszty prowadzenia działalności.</p>
        </div>
      </section>
    </div>
  );
};

export default Oferta;
