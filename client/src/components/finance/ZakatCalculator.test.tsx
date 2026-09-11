import { render, screen, fireEvent } from '@testing-library/react';
import ZakatCalculator from './ZakatCalculator';

/**
 * 🟩 [FINANCE] Tests Unitaires - Calculateur de Zakat
 * Projet : CED-Core / Institut Yamina
 * Objectif : Prouver l'exactitude mathématique (Adl) et la réactivité.
 */

describe('🟩 ZakatCalculator Component', () => {
  
  test('devrait afficher le titre et le message de confidentialité', () => {
    render(<ZakatCalculator />);
    expect(screen.getByText(/🟩 Calculateur de Zakat al-Mal/i)).toBeInTheDocument();
    expect(screen.getByText(/Confidentialité \(Amanah\)/i)).toBeInTheDocument();
  });

  test('devrait calculer 2.5% exact si le Nissab est atteint', () => {
    render(<ZakatCalculator />);
    
    // On entre 6000 (supérieur au seuil de ~5525)
    const savingsInput = screen.getByPlaceholderText('0.00');
    fireEvent.change(savingsInput, { target: { value: '6000' } });

    // 6000 * 0.025 = 150
    expect(screen.getByText(/150.00 CHF/i)).toBeInTheDocument();
  });

  test('ne devrait rien afficher comme montant à payer si le Nissab n\'est pas atteint', () => {
    render(<ZakatCalculator />);
    
    // On entre 1000 (inférieur au seuil)
    const savingsInput = screen.getByPlaceholderText('0.00');
    fireEvent.change(savingsInput, { target: { value: '1000' } });

    expect(screen.getByText(/Le seuil de Nissab n'est pas atteint/i)).toBeInTheDocument();
  });

  test('devrait soustraire les dettes avant de calculer la Zakat', () => {
    render(<ZakatCalculator />);
    
    const inputs = screen.getAllByPlaceholderText('0.00');
    // Épargne : 10000, Dettes : 4000 => Net : 6000 => Zakat : 150
    fireEvent.change(inputs[0], { target: { value: '10000' } });
    fireEvent.change(inputs[3], { target: { value: '4000' } });

    expect(screen.getByText(/150.00 CHF/i)).toBeInTheDocument();
  });
});
