import React from 'react';
import { CreditCard, PlusCircle, Trash2, Wallet } from 'lucide-react';
import type { PaymentMethod } from '../../types';

const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'credit',
    lastFour: '4242',
    expiryDate: '12/24',
    isDefault: true,
    provider: 'Visa',
  },
  {
    id: '2',
    type: 'paypal',
    isDefault: false,
    provider: 'PayPal',
  },
];

export default function PaymentMethods() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
        <button className="btn-primary flex items-center">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New
        </button>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {method.type === 'credit' ? (
                <CreditCard className="h-8 w-8 text-primary-600" />
              ) : (
                <Wallet className="h-8 w-8 text-primary-600" />
              )}
              <div>
                <p className="font-medium text-gray-900">
                  {method.type === 'credit'
                    ? `${method.provider} •••• ${method.lastFour}`
                    : method.provider}
                </p>
                {method.expiryDate && (
                  <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
                )}
                {method.isDefault && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800">
                    Default
                  </span>
                )}
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-red-500">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}