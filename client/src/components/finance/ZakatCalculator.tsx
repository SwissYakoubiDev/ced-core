import React, { useState, useEffect } from 'react';

/**
 * 🟩 [FINANCE] Module Calculateur de Zakat al-Mal
 * Projet : CED-Core / Institut Yamina
 * Éthique : Zero-Knowledge (Calcul 100% Client-Side)
 * Conformité : Taux fixe 2.5% sur le capital éligible (Nissab atteint)
 * Sécurité : Aucune donnée ne quitte le navigateur (Amanah).
 */

interface ZakatState {
  savings: number;
  goldValue: number;
  silverValue: number;
  businessAssets: number;
  debts: number;
}

const ZakatCalculator: React.FC = () => {
  const [values, setValues] = useState<ZakatState>({
    savings: 0,
    goldValue: 0,
    silverValue: 0,
    businessAssets: 0,
    debts: 0,
  });

  const [zakatDue, setZakatDue] = useState<number>(0);
  const [nissabReached, setNissabReached] = useState<boolean>(false);

  // 🟩 [FINANCE] Seuil de Nissab (Basé sur 85g d'Or - Valeur indicative à mettre à jour)
  // 85 grams * ~65 CHF/USD (exemple statique pour démo)
  const NISSAB_THRESHOLD = 85 * 65; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    // 🟩 [FINANCE] 1. Calcul du capital total éligible
    const totalAssets =
      values.savings +
      values.goldValue +
      values.silverValue +
      values.businessAssets;

    // 🟩 [FINANCE] 2. Soustraction des dettes immédiates (Exigibles maintenant)
    const netWealth = totalAssets - values.debts;

    // 🟩 [FINANCE] 3. Vérification du Nissab
    const reached = netWealth >= NISSAB_THRESHOLD;
    setNissabReached(reached);

    // 🟩 [FINANCE] 4. Calcul de la Zakat (2.5%) si seuil atteint
    if (reached && netWealth > 0) {
      // Calcul précis, arrondi à 2 décimales pour l'affichage
      setZakatDue(parseFloat((netWealth * 0.025).toFixed(2)));
    } else {
      setZakatDue(0);
    }
  }, [values]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border-t-4 border-emerald-500">
      <h2 className="text-2xl font-bold text-emerald-700 mb-2">
        🟩 Calculateur de Zakat al-Mal
      </h2>
      <p className="text-sm text-gray-600 mb-6 flex items-center">
        <span className="mr-2">🔒</span> 
        Confidentialité (Amanah) : Aucun donnée n'est envoyée au serveur. 
        Le calcul s'effectue uniquement dans votre navigateur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* 🟩 [FINANCE] Champs de saisie */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Épargne liquide (CHF/USD/EUR)</label>
          <input
            type="number"
            name="savings"
            value={values.savings || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="0.00"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Valeur Or & Argent</label>
          <input
            type="number"
            name="goldValue"
            value={values.goldValue || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="0.00"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Actifs Commerciaux</label>
          <input
            type="number"
            name="businessAssets"
            value={values.businessAssets || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="0.00"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dettes immédiates (-)</label>
          <input
            type="number"
            name="debts"
            value={values.debts || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="0.00"
            min="0"
          />
        </div>
      </div>

      {/* 🟩 [FINANCE] Résultat */}
      <div className={`p-4 rounded-md text-center ${nissabReached ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50 border border-gray-200'}`}>
        {!nissabReached ? (
          <p className="text-gray-600">
            Le seuil de Nissab n'est pas atteint avec ces valeurs. 
            <br/><span className="text-xs">(Seuil estimé : ~{NISSAB_THRESHOLD.toFixed(2)} units)</span>
          </p>
        ) : (
          <div>
            <p className="text-emerald-800 font-semibold mb-1">Zakat à payer :</p>
            <p className="text-4xl font-bold text-emerald-600">{zakatDue.toFixed(2)} <span className="text-lg">CHF</span></p>
            <p className="text-xs text-emerald-600 mt-2">Taux appliqué : 2.5% exact</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZakatCalculator;
