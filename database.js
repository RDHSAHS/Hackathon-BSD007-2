/*
1. CPU
2. MOTHER
3. RAM
4. GPU
5. STORAGE
6. PSU
7. CASING
*/

const cpu = [
  {
    id: 1,
    name: 'Intel Core i5-13400',
    price: 3_200_000
  },
  {
    id: 2,
    name: 'AMD Ryzen 5 7600',
    price: 3_250_000
  },
  {
    id: 3,
    name: 'AMD Ryzen 7 7800X3D',
    price: 6_100_000
  },
  {
    id: 4,
    name: 'Intel Core i7-13700K',
    price: 5_550_000
  },
  {
    id: 5,
    name: 'AMD Ryzen 9 7950X3D',
    price: 10_700_500
  },
  {
    id: 6,
    name: 'Intel Core i9-13900K',
    price: 8_500_000
  }
];

const motherboard = [
  {
    id: 1,
    name: 'Gigabyte Z790 Aorus Xtreme',
    price: 10_500_000
  },
  {
    id: 2,
    name: 'Gigabyte Z690 Aorus Pro',
    price: 5_500_000
  },
  {
    id: 3,
    name: 'ASRock Z690 Extreme WiFi 6E',
    price: 3_000_000
  },
  {
    id: 4,
    name: 'MSI MAG B760M Mortar Wi-Fi',
    price: 2_800_000
  },
  {
    id: 5,
    name: 'Asus Prime H610M-A D4',
    price: 1_500_000
  }
];

const ram = [
  {
    id: 1,
    name: 'G.Skill Trident Z5 Neo RGB DDR5-6000 (2 x 16GB)',
    price: 1_800_000
  },
  {
    id: 2,
    name: 'G.Skill Trident Z5 RGB DDR5-6000 (2 x 16GB)',
    price: 1_500_000
  },
  {
    id: 3,
    name: 'Samsung DDR5-4800 (2 x 16GB)',
    price: 655_000
  },
  {
    id: 4,
    name: 'Corsair Vengeance RGB Pro DDR4-320 (2 x 32GB',
    price: 3_250_000
  },
  {
    id: 5,
    name: 'Patriot Viper Steel DDR4-3600 (2 x 32GB)',
    price: 1_600_000
  }
]

const gpu = [
  {
    id: 1,
    name: 'MSI Gaming GeForce RTX 4090 24GB GDRR6X 384-Bit HDMI',
    price: 25_200_000
  },
  {
    id: 2,
    name: 'MSI Gaming Radeon RX 7900 XTX 24GB GDDR6 PCI Express 4.0 ATX Video Card RX 7900 XTX GAMING TRIO CLASSIC 24G',
    price: 15_000_000
  },
  {
    id: 3,
    name: 'Sapphire 11310-01-20G Pulse AMD Radeon RX 6600 Gaming Graphics Card with 8GB GDDR6, AMD RDNA 2',
    price: 3_400_000
  },
  {
    id: 4,
    name: 'PowerColor Fighter AMD Radeon RX 6650 XT Graphics Card with 8GB GDDR6 Memory',
    price: 3_750_000
  },
  {
    id: 5,
    name: 'ZOTAC Gaming GeForce RTX 4070 Ti Trinity OC DLSS 3 12GB GDDR6X 192-bit 21 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-D40710J-10P',
    price: 12_500_000
  }
]

const storage = [
  {
    id: 1,
    name: 'Samsung 990 Pro (2TB) SSD',
    price: 2_425_000
  },
  {
    id: 2,
    name: 'WD Black SN850X 2TB',
    price: 1_815_000
  },
  {
    id: 3,
    name: 'WD Black SN850X 4TB',
    price: 4_555_000
  },
  {
    id: 4,
    name: 'Nextorage Japan 4TB SSD for PS5 and PC',
    price: 4_250_500
  },
  {
    id: 5,
    name: '4TB TeamGroup MP34 M.2 PCIe 3.0 SSD',
    price: 2_425_000
  }
]

const psu = [
  {
    id: 1,
    name: 'Corsair CX450',
    price: 915_000
  },
  {
    id: 2,
    name: 'Corsair CX550F RGB',
    price: 1_375_000
  },
  {
    id: 3,
    name: 'Corsair RM550x',
    price: 1_675_000
  },
  {
    id: 4,
    name: 'XPG Core Reactor 650W',
    price: 1_372_000
  },
  {
    id: 5,
    name: 'Cooler Master V750 Gold V2',
    price: 2_300_000
  }
]

const casing = [
  {
    id: 1,
    name: 'Fractal Design North',
    price: 2_275_000
  },
  {
    id: 2,
    name: 'Fractal Design Meshify 2 Compact',
    price: 1_950_000
  },
  {
    id: 3,
    name: 'Phanteks Eclipse G360A',
    price: 1_525_000
  },
  {
    id: 4,
    name: 'NZXT H7 Flow',
    price: 1_655_000
  },
  {
    id: 5,
    name: 'Cooler Master HAF 700 Evo',
    price: 6_410_000
  }
]