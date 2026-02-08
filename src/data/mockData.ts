export const policies = {
  "test": {
    user: {
      name: "0",
      email: "0",
    },
    policy: {
      policyNumber: "0",
      category: "0",
      vehicle: "0",
      startDate: "0",
    },
  },
  "MOTN123456": {
    user: {
      name: "Jun",
      email: "jun@jun.com.au",
    },
    policy: {
      policyNumber: "MOTN123456",
      category: "Motor",
      vehicle: "Toyota Yaris Cross",
      startDate: "01/01/2026",
    },
  },

  "HOM8888999": {
    user: {
      name: "Test User",
      email: "test@test.com.au",
    },
    policy: {
      policyNumber: "HOM8888999",
      category: "Home",
      product: "Apartment",
      startDate: "08/02/2026",
    },
  },
};

export const credentialsByEmail: Record<string, string> = {
  "jun@jun.com.au": "12345",
  "test@test.com.au": "54321",
};
