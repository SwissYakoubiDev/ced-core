import React from 'react';
// 🟩 [FINANCE] Import du module Zakat (Zero-Knowledge)
import ZakatCalculator from './components/finance/ZakatCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* 🟦 [INFRA] En-tête simple pour le contexte */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-emerald-800">CED HalalTech™</h1>
        <p className="text-gray-600">Module Pilote : Zakat al-Mal</p>
      </header>

      {/* 🟩 [FINANCE] Intégration du Calculateur */}
      <main className="w-full max-w-4xl">
        <ZakatCalculator />
      </main>

      {/* 🟦 [INFRA] Pied de page */}
      <footer className="mt-12 text-sm text-gray-400">
        <p>🇨🇭 Hébergé en Suisse (Infomaniak) | Conforme Charia & LPD</p>
      </footer>
    </div>
  );
}

export default App;
