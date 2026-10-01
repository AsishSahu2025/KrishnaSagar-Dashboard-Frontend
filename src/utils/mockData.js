// Static mock data and simulation helpers for Varanga Dashboard

export const mockUserProfile = {
  token: "mock-access-token-varanga-2024",
  name: "Bfl Labs Admin",
  Mob: "9876543210",
  id: "1",
  email: "admin@bfllabs.com",
};

export const mockContactDetails = {
  name: "Bfl Labs",
  mobile: "9876543210",
  email: "contact@bfllabs.com",
  address: "Varanga Pond Site, Hebri Taluk, Udupi District, Karnataka - 576108",
};

export const mockWeatherData = [
  {
    dt_txt: new Date().toISOString().replace("T", " ").substring(0, 19),
    main: {
      temp: 301.15, // ~28°C
      humidity: 74,
    },
    weather: [
      {
        icon: "02d",
        description: "scattered clouds",
      },
    ],
  },
];

// Helper to generate deterministic, realistic pond parameter data for any month/year
export const getMockGraphData = (month = 10, year = 2024) => {
  const m = parseInt(month, 10) || 10;
  const y = parseInt(year, 10) || 2024;

  // Base variation based on month and year seed
  const seed = (m * 7 + (y % 100) * 3) % 15;

  const week = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];

  const AQUATIC_MACROPYTES = [
    parseFloat((12.5 + seed * 0.4).toFixed(1)),
    parseFloat((15.2 + seed * 0.3).toFixed(1)),
    parseFloat((14.8 + seed * 0.5).toFixed(1)),
    parseFloat((18.1 + seed * 0.2).toFixed(1)),
    parseFloat((16.5 + seed * 0.4).toFixed(1)),
  ];

  const Chl_a = [
    parseFloat((22.4 + seed * 0.8).toFixed(1)),
    parseFloat((28.1 + seed * 0.6).toFixed(1)),
    parseFloat((31.5 + seed * 0.9).toFixed(1)),
    parseFloat((26.8 + seed * 0.5).toFixed(1)),
    parseFloat((24.2 + seed * 0.7).toFixed(1)),
  ];

  const Phycocyanin = [
    parseFloat((45.1 + seed * 1.1).toFixed(1)),
    parseFloat((49.3 + seed * 0.9).toFixed(1)),
    parseFloat((52.8 + seed * 1.2).toFixed(1)),
    parseFloat((48.0 + seed * 0.8).toFixed(1)),
    parseFloat((43.6 + seed * 1.0).toFixed(1)),
  ];

  const dissolved_oxygen = [
    parseFloat((6.8 + (seed % 4) * 0.2).toFixed(1)),
    parseFloat((7.2 + (seed % 3) * 0.2).toFixed(1)),
    parseFloat((6.5 + (seed % 5) * 0.2).toFixed(1)),
    parseFloat((7.0 + (seed % 4) * 0.2).toFixed(1)),
    parseFloat((7.4 + (seed % 3) * 0.2).toFixed(1)),
  ];

  const GCI = [
    Math.round(280 + seed * 5),
    Math.round(295 + seed * 4),
    Math.round(310 + seed * 6),
    Math.round(305 + seed * 3),
    Math.round(290 + seed * 5),
  ];

  return {
    week,
    AQUATIC_MACROPYTES,
    Chl_a,
    Phycocyanin,
    dissolved_oxygen,
    GCI,
  };
};
