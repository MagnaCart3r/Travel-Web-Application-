export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  category: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SearchFilters {
  destination: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  budget: number;
  category: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: 'completed' | 'pending' | 'refunded';
  type: 'booking' | 'refund' | 'payment';
}

export interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit' | 'paypal';
  lastFour?: string;
  expiryDate?: string;
  isDefault: boolean;
  provider: string;
}