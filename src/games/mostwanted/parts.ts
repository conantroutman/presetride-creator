interface IHood {
  id: number;
  name: string;
}

export const Hoods: IHood[] = [
  {
    id: 16,
    name: 'Colix',
  },
  {
    id: 13,
    name: 'Fusion',
  },
  {
    id: 6,
    name: 'Overdial',
  },
  {
    id: 7,
    name: 'Trident',
  },
  {
    id: 17,
    name: 'Airomax',
  },
  {
    id: 20,
    name: 'DJM Hyde',
  },
  {
    id: 2,
    name: 'Double-V',
  },
  {
    id: 4,
    name: 'Speed',
  },
  {
    id: 3,
    name: 'Tri-Slot',
  },
  {
    id: 23,
    name: 'Factor X',
  },
  {
    id: 26,
    name: 'Speedline',
  },
  {
    id: 32,
    name: 'Tremor',
  },
  {
    id: 5,
    name: 'G-Force',
  },
  {
    id: 9,
    name: 'Mongoose',
  },
  {
    id: 21,
    name: 'Eraser',
  },
  {
    id: 31,
    name: 'Tsunami',
  },
  {
    id: 10,
    name: 'Twister',
  },
];

interface ISpoiler {
  id: number;
  name: string;
  category: string;
}

interface ISpoilers {
  sport: ISpoiler[];
  tuner: ISpoiler[];
}

export const Spoilers: ISpoilers = {
  sport: [
    {
      id: 31,
      name: 'Groundmaster',
      category: 'Sport',
    },
    {
      id: 8,
      name: 'Reaper',
      category: 'Sport',
    },
    {
      id: 18,
      name: 'Slingshot',
      category: 'Sport',
    },
    {
      id: 41,
      name: 'Fishtail',
      category: 'Sport',
    },
    {
      id: 2,
      name: 'Rocker 5',
      category: 'Sport',
    },
    {
      id: 42,
      name: 'Viper',
      category: 'Sport',
    },
    {
      id: 15,
      name: 'Banshee',
      category: 'Sport',
    },
    {
      id: 7,
      name: 'Ripper',
      category: 'Sport',
    },
    {
      id: 3,
      name: 'Airforce',
      category: 'Sport',
    },
    {
      id: 11,
      name: 'Dragon',
      category: 'Sport',
    },
    {
      id: 16,
      name: 'Mystic',
      category: 'Sport',
    },
    {
      id: 34,
      name: 'Dynamo',
      category: 'Sport',
    },
    {
      id: 43,
      name: 'Edge',
      category: 'Sport',
    },
    {
      id: 17,
      name: 'Specter',
      category: 'Sport',
    },
  ],
  tuner: [
    {
      id: 4,
      name: 'Arrow',
      category: 'Tuner',
    },
    {
      id: 5,
      name: 'Barracuda',
      category: 'Tuner',
    },
    {
      id: 32,
      name: 'Switchblade',
      category: 'Tuner',
    },
    {
      id: 1,
      name: 'Jorgen',
      category: 'Tuner',
    },
    {
      id: 44,
      name: 'Lynx',
      category: 'Tuner',
    },
    {
      id: 40,
      name: 'Scarab',
      category: 'Tuner',
    },
    {
      id: 9,
      name: 'Borra',
      category: 'Tuner',
    },
    {
      id: 29,
      name: 'Fishtail',
      category: 'Tuner',
    },
    {
      id: 10,
      name: 'Ghost',
      category: 'Tuner',
    },
    {
      id: 26,
      name: 'Tornado',
      category: 'Tuner',
    },
    {
      id: 36,
      name: 'Joker',
      category: 'Tuner',
    },
    {
      id: 13,
      name: 'Tandem',
      category: 'Tuner',
    },
    {
      id: 6,
      name: 'Wildfire',
      category: 'Tuner',
    },
    {
      id: 30,
      name: 'Impact',
      category: 'Tuner',
    },
    {
      id: 27,
      name: 'Venom',
      category: 'Tuner',
    },
    {
      id: 38,
      name: 'Phoenix',
      category: 'Tuner',
    },
  ],
};

export const RoofScoops = [
  {
    id: 11,
    name: 'Airstream',
  },
  {
    id: 10,
    name: 'Blastback',
  },
  {
    id: 14,
    name: 'Cyclone',
  },
  {
    id: 13,
    name: 'Headwind',
  },
  {
    id: 12,
    name: 'Jetstream',
  },
  {
    id: 1,
    name: 'Northeast',
  },
  {
    id: 5,
    name: 'Riptide',
  },
  {
    id: 15,
    name: 'Tempest',
  },
  {
    id: 17,
    name: 'Twister',
  },
  {
    id: 9,
    name: 'Windtunnel',
  },
  {
    id: 18,
    name: 'Typhoon',
  },
];

export interface IRim {
  name: string;
  style: number;
}

export interface IRimBrand {
  name: string;
  id: string;
  rims: IRim[];
}

export const Wheels: IRimBrand[] = [
  {
    name: '5Zigen',
    id: '5ZIGEN',
    rims: [
      {
        name: 'FN01C',
        style: 1,
      },
      {
        name: 'Supersix',
        style: 2,
      },
      {
        name: '5ZR',
        style: 3,
      },
      {
        name: 'GN+',
        style: 4,
      },
      {
        name: 'Gravis 1',
        style: 5,
      },
    ],
  },
  {
    name: 'ADR',
    id: 'ADR',
    rims: [
      {
        name: 'Adrenaline',
        style: 1,
      },
      {
        name: 'Empire',
        style: 2,
      },
      {
        name: 'GT-Sport',
        style: 3,
      },
      {
        name: 'M Sport',
        style: 4,
      },
      {
        name: 'Sokudo8',
        style: 5,
      },
    ],
  },
  {
    name: 'BBS',
    id: 'BBS',
    rims: [
      {
        name: 'GT',
        style: 1,
      },
      {
        name: 'RS GT',
        style: 2,
      },
      {
        name: 'LM',
        style: 3,
      },
      {
        name: 'CH',
        style: 4,
      },
      {
        name: 'RK',
        style: 5,
      },
      {
        name: 'RX',
        style: 6,
      },
    ],
  },
  {
    name: 'Enkei',
    id: 'ENKEI',
    rims: [
      {
        name: 'NT03+M',
        style: 1,
      },
      {
        name: 'J Speed 3',
        style: 2,
      },
      {
        name: 'ES-Tarmac',
        style: 3,
      },
      {
        name: 'WRC Tarmac',
        style: 4,
      },
    ],
  },
  {
    name: 'König',
    id: 'KONIG',
    rims: [
      {
        name: 'Blatant',
        style: 1,
      },
      {
        name: 'Imagine',
        style: 2,
      },
      {
        name: 'Theory',
        style: 3,
      },
    ],
  },
  {
    name: 'Löwenhart',
    id: 'LOWENHART',
    rims: [
      {
        name: 'LDR',
        style: 3,
      },
      {
        name: 'XIR',
        style: 1,
      },
      {
        name: 'BR5',
        style: 2,
      },
    ],
  },
  {
    name: 'O.Z.',
    id: 'OZ',
    rims: [
      {
        name: 'Superleggera',
        style: 1,
      },
      {
        name: 'Superturismo',
        style: 2,
      },
      {
        name: 'Opera',
        style: 3,
      },
      {
        name: 'Superleggera III (Multipiece)',
        style: 4,
      },
      {
        name: 'Leonardo',
        style: 5,
      },
    ],
  },
  {
    name: 'Racing Hart',
    id: 'RACINGHART',
    rims: [
      {
        name: 'Multi C4',
        style: 1,
      },
      {
        name: 'CX',
        style: 2,
      },
      {
        name: 'CP',
        style: 3,
      },
      {
        name: 'CR',
        style: 4,
      },
    ],
  },
  {
    name: 'Ro Ja',
    id: 'ROJA',
    rims: [
      {
        name: 'Formula 1',
        style: 1,
      },
      {
        name: 'Formula 7',
        style: 2,
      },
      {
        name: 'Formula 2',
        style: 3,
      },
    ],
  },
  {
    name: 'Volk',
    id: 'VOLK',
    rims: [
      {
        name: 'TE37',
        style: 1,
      },
      {
        name: 'CE28',
        style: 2,
      },
      {
        name: 'GT-P',
        style: 3,
      },
    ],
  },
];
