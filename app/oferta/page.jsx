import React from 'react';

function Oferta() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Korzyści z korzystania z naszych pianek montażowych
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-xl font-bold mb-4">Wysoka wydajność</h2>
          <p>
            Oszczędź czas i pieniądze dzięki naszej pianie o wysokiej wydajności.
            Jedna puszka wystarczy na więcej połączeń.
          </p>
        </div>
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-xl font-bold mb-4">Szybkie schnięcie</h2>
          <p>
            Nasza pianka schnie błyskawicznie, co pozwala na szybkie kontynuowanie pracy.
          </p>
        </div>
        {/* Dodaj kolejne sekcje dla pozostałych korzyści */}
      </div>
    </div>
  );
}

export default Oferta;
