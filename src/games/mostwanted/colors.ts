type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

type GLOSS = `GLOSS_L1_COLOR${number}${number}`;
type METALLIC = `METAL_L1_COLOR${number}${number}`;
type PEARL = `PEARL${number}_PAINT`;
type CHROME = `CHROME${number}${number}_PAINT`;
type MATTE = `MATTE${number}${number}_PAINT`;
type RIMS = `RIMS_L${number}_COLOR${number}${number}`;
type VINYL = `VINYL_L${number}_COLOR${number}${number}`;

export type Paint = GLOSS | METALLIC | PEARL | CHROME | MATTE | RIMS | VINYL;

export interface IPaint {
  name: Paint;
  color: Color;
}

export interface IPaints {
  gloss: IPaint[];
  metallic: IPaint[];
  pearlescent: IPaint[];
  chrome: IPaint[];
  matte: IPaint[];
  [key: string]: IPaint[];
}

export interface IWindshieldTint {
  name: string;
  id: string;
}

export const Paints: IPaints = {
  gloss: [
    // 1 - 20
    {
      name: 'GLOSS_L1_COLOR01',
      color: '#FCFCFC',
    },
    {
      name: 'GLOSS_L1_COLOR02',
      color: '#4F4F4F',
    },
    {
      name: 'GLOSS_L1_COLOR03',
      color: '#FCF8E8',
    },
    {
      name: 'GLOSS_L1_COLOR04',
      color: '#E01B1B',
    },
    {
      name: 'GLOSS_L1_COLOR05',
      color: '#F27922',
    },
    {
      name: 'GLOSS_L1_COLOR06',
      color: '#F0B630',
    },
    {
      name: 'GLOSS_L1_COLOR07',
      color: '#FCD15B',
    },
    {
      name: 'GLOSS_L1_COLOR08',
      color: '#F0E356',
    },
    {
      name: 'GLOSS_L1_COLOR09',
      color: '#CDF268',
    },
    {
      name: 'GLOSS_L1_COLOR10',
      color: '#C5FC9A',
    },
    {
      name: 'GLOSS_L1_COLOR11',
      color: '#A4F5AB',
    },
    {
      name: 'GLOSS_L1_COLOR12',
      color: '#68F2AB',
    },
    {
      name: 'GLOSS_L1_COLOR13',
      color: '#68F2E7',
    },
    {
      name: 'GLOSS_L1_COLOR14',
      color: '#68C2F2',
    },
    {
      name: 'GLOSS_L1_COLOR15',
      color: '#689BF2',
    },
    {
      name: 'GLOSS_L1_COLOR16',
      color: '#5070BA',
    },
    {
      name: 'GLOSS_L1_COLOR17',
      color: '#BF5BFC',
    },
    {
      name: 'GLOSS_L1_COLOR18',
      color: '#F268F2',
    },
    {
      name: 'GLOSS_L1_COLOR19',
      color: '#F268B9',
    },
    {
      name: 'GLOSS_L1_COLOR20',
      color: '#D6422B',
    },

    // 21 - 40
    {
      name: 'GLOSS_L1_COLOR21',
      color: '#C0C9D1',
    },
    {
      name: 'GLOSS_L1_COLOR22',
      color: '#333333',
    },
    {
      name: 'GLOSS_L1_COLOR23',
      color: '#C9BFB5',
    },
    {
      name: 'GLOSS_L1_COLOR24',
      color: '#BD2626',
    },
    {
      name: 'GLOSS_L1_COLOR25',
      color: '#D15000',
    },
    {
      name: 'GLOSS_L1_COLOR26',
      color: '#D48D00',
    },
    {
      name: 'GLOSS_L1_COLOR27',
      color: '#F5C800',
    },
    {
      name: 'GLOSS_L1_COLOR28',
      color: '#F0E000',
    },
    {
      name: 'GLOSS_L1_COLOR29',
      color: '#90B521',
    },
    {
      name: 'GLOSS_L1_COLOR30',
      color: '#6DFC00',
    },
    {
      name: 'GLOSS_L1_COLOR31',
      color: '#41A349',
    },
    {
      name: 'GLOSS_L1_COLOR32',
      color: '#21B56B',
    },
    {
      name: 'GLOSS_L1_COLOR33',
      color: '#21B5A6',
    },
    {
      name: 'GLOSS_L1_COLOR34',
      color: '#2184B5',
    },
    {
      name: 'GLOSS_L1_COLOR35',
      color: '#2D4FB5',
    },
    {
      name: 'GLOSS_L1_COLOR36',
      color: '#223C8C',
    },
    {
      name: 'GLOSS_L1_COLOR37',
      color: '#800EC7',
    },
    {
      name: 'GLOSS_L1_COLOR38',
      color: '#B521B5',
    },
    {
      name: 'GLOSS_L1_COLOR39',
      color: '#D6007D',
    },
    {
      name: 'GLOSS_L1_COLOR40',
      color: '#A33718',
    },

    // 41 - 60
    {
      name: 'GLOSS_L1_COLOR41',
      color: '#B5B5B5',
    },
    {
      name: 'GLOSS_L1_COLOR42',
      color: '#15171F',
    },
    {
      name: 'GLOSS_L1_COLOR43',
      color: '#6B635B',
    },
    {
      name: 'GLOSS_L1_COLOR44',
      color: '#770A0F',
    },
    {
      name: 'GLOSS_L1_COLOR45',
      color: '#5E2600',
    },
    {
      name: 'GLOSS_L1_COLOR46',
      color: '#5E4200',
    },
    {
      name: 'GLOSS_L1_COLOR47',
      color: '#B1951A',
    },
    {
      name: 'GLOSS_L1_COLOR48',
      color: '#837F00',
    },
    {
      name: 'GLOSS_L1_COLOR49',
      color: '#465E00',
    },
    {
      name: 'GLOSS_L1_COLOR50',
      color: '#447122',
    },
    {
      name: 'GLOSS_L1_COLOR51',
      color: '#2A542E',
    },
    {
      name: 'GLOSS_L1_COLOR52',
      color: '#265E42',
    },
    {
      name: 'GLOSS_L1_COLOR53',
      color: '#005E56',
    },
    {
      name: 'GLOSS_L1_COLOR54',
      color: '#003E5E',
    },
    {
      name: 'GLOSS_L1_COLOR55',
      color: '#122A6B',
    },
    {
      name: 'GLOSS_L1_COLOR56',
      color: '#101666',
    },
    {
      name: 'GLOSS_L1_COLOR57',
      color: '#40125E',
    },
    {
      name: 'GLOSS_L1_COLOR58',
      color: '#5E125E',
    },
    {
      name: 'GLOSS_L1_COLOR59',
      color: '#5D0035',
    },
    {
      name: 'GLOSS_L1_COLOR60',
      color: '#5E0000',
    },

    // 61 - 80
    {
      name: 'GLOSS_L1_COLOR61',
      color: '#7B7B7B',
    },
    {
      name: 'GLOSS_L1_COLOR62',
      color: '#000000',
    },
    {
      name: 'GLOSS_L1_COLOR63',
      color: '#2A2824',
    },
    {
      name: 'GLOSS_L1_COLOR64',
      color: '#260000',
    },
    {
      name: 'GLOSS_L1_COLOR65',
      color: '#271202',
    },
    {
      name: 'GLOSS_L1_COLOR66',
      color: '#261A00',
    },
    {
      name: 'GLOSS_L1_COLOR67',
      color: '#261E00',
    },
    {
      name: 'GLOSS_L1_COLOR68',
      color: '#262400',
    },
    {
      name: 'GLOSS_L1_COLOR69',
      color: '#1C2600',
    },
    {
      name: 'GLOSS_L1_COLOR70',
      color: '#101C08',
    },
    {
      name: 'GLOSS_L1_COLOR71',
      color: '#002602',
    },
    {
      name: 'GLOSS_L1_COLOR72',
      color: '#002612',
    },
    {
      name: 'GLOSS_L1_COLOR73',
      color: '#002622',
    },
    {
      name: 'GLOSS_L1_COLOR74',
      color: '#001826',
    },
    {
      name: 'GLOSS_L1_COLOR75',
      color: '#00103A',
    },
    {
      name: 'GLOSS_L1_COLOR76',
      color: '#0A0E2E',
    },
    {
      name: 'GLOSS_L1_COLOR77',
      color: '#1A0826',
    },
    {
      name: 'GLOSS_L1_COLOR78',
      color: '#260826',
    },
    {
      name: 'GLOSS_L1_COLOR79',
      color: '#26081A',
    },
    {
      name: 'GLOSS_L1_COLOR80',
      color: '#320A0A',
    },
  ],

  metallic: [
    // 1 - 20
    {
      name: 'METAL_L1_COLOR01',
      color: '#FDFDFD',
    },
    {
      name: 'METAL_L1_COLOR02',
      color: '#4F4F4F',
    },
    {
      name: 'METAL_L1_COLOR03',
      color: '#FCF8E8',
    },
    {
      name: 'METAL_L1_COLOR04',
      color: '#E01B1B',
    },
    {
      name: 'METAL_L1_COLOR05',
      color: '#F27922',
    },
    {
      name: 'METAL_L1_COLOR06',
      color: '#F0B630',
    },
    {
      name: 'METAL_L1_COLOR07',
      color: '#FCD15B',
    },
    {
      name: 'METAL_L1_COLOR08',
      color: '#F0E356',
    },
    {
      name: 'METAL_L1_COLOR09',
      color: '#CDF268',
    },
    {
      name: 'METAL_L1_COLOR10',
      color: '#C5FC9A',
    },
    {
      name: 'METAL_L1_COLOR11',
      color: '#A4F5AB',
    },
    {
      name: 'METAL_L1_COLOR12',
      color: '#68F2AB',
    },
    {
      name: 'METAL_L1_COLOR13',
      color: '#68F2E7',
    },
    {
      name: 'METAL_L1_COLOR14',
      color: '#68C2F2',
    },
    {
      name: 'METAL_L1_COLOR15',
      color: '#689BF2',
    },
    {
      name: 'METAL_L1_COLOR16',
      color: '#5070BA',
    },
    {
      name: 'METAL_L1_COLOR17',
      color: '#BF5BFC',
    },
    {
      name: 'METAL_L1_COLOR18',
      color: '#F268F2',
    },
    {
      name: 'METAL_L1_COLOR19',
      color: '#F268B9',
    },
    {
      name: 'METAL_L1_COLOR20',
      color: '#D6422B',
    },

    // 21 - 40
    {
      name: 'METAL_L1_COLOR21',
      color: '#C0C9D1',
    },
    {
      name: 'METAL_L1_COLOR22',
      color: '#333333',
    },
    {
      name: 'METAL_L1_COLOR23',
      color: '#C9BFB5',
    },
    {
      name: 'METAL_L1_COLOR24',
      color: '#BD2626',
    },
    {
      name: 'METAL_L1_COLOR25',
      color: '#D15000',
    },
    {
      name: 'METAL_L1_COLOR26',
      color: '#D48D00',
    },
    {
      name: 'METAL_L1_COLOR27',
      color: '#F5C800',
    },
    {
      name: 'METAL_L1_COLOR28',
      color: '#F0E000',
    },
    {
      name: 'METAL_L1_COLOR29',
      color: '#90B521',
    },
    {
      name: 'METAL_L1_COLOR30',
      color: '#6DFC00',
    },
    {
      name: 'METAL_L1_COLOR31',
      color: '#41A349',
    },
    {
      name: 'METAL_L1_COLOR32',
      color: '#21B56B',
    },
    {
      name: 'METAL_L1_COLOR33',
      color: '#21B5A6',
    },
    {
      name: 'METAL_L1_COLOR34',
      color: '#2184B5',
    },
    {
      name: 'METAL_L1_COLOR35',
      color: '#2D4FB5',
    },
    {
      name: 'METAL_L1_COLOR36',
      color: '#223C8C',
    },
    {
      name: 'METAL_L1_COLOR37',
      color: '#800EC7',
    },
    {
      name: 'METAL_L1_COLOR38',
      color: '#B521B5',
    },
    {
      name: 'METAL_L1_COLOR39',
      color: '#D6007D',
    },
    {
      name: 'METAL_L1_COLOR40',
      color: '#A33718',
    },

    // 41 - 60
    {
      name: 'METAL_L1_COLOR41',
      color: '#B5B5B5',
    },
    {
      name: 'METAL_L1_COLOR42',
      color: '#15171F',
    },
    {
      name: 'METAL_L1_COLOR43',
      color: '#6B635B',
    },
    {
      name: 'METAL_L1_COLOR44',
      color: '#770A0F',
    },
    {
      name: 'METAL_L1_COLOR45',
      color: '#5E2600',
    },
    {
      name: 'METAL_L1_COLOR46',
      color: '#5E4200',
    },
    {
      name: 'METAL_L1_COLOR47',
      color: '#B1951A',
    },
    {
      name: 'METAL_L1_COLOR48',
      color: '#837F00',
    },
    {
      name: 'METAL_L1_COLOR49',
      color: '#465E00',
    },
    {
      name: 'METAL_L1_COLOR50',
      color: '#447122',
    },
    {
      name: 'METAL_L1_COLOR51',
      color: '#2A542E',
    },
    {
      name: 'METAL_L1_COLOR52',
      color: '#265E42',
    },
    {
      name: 'METAL_L1_COLOR53',
      color: '#005E56',
    },
    {
      name: 'METAL_L1_COLOR54',
      color: '#003E5E',
    },
    {
      name: 'METAL_L1_COLOR55',
      color: '#122A6B',
    },
    {
      name: 'METAL_L1_COLOR56',
      color: '#101666',
    },
    {
      name: 'METAL_L1_COLOR57',
      color: '#40125E',
    },
    {
      name: 'METAL_L1_COLOR58',
      color: '#5E125E',
    },
    {
      name: 'METAL_L1_COLOR59',
      color: '#5D0035',
    },
    {
      name: 'METAL_L1_COLOR60',
      color: '#5E0000',
    },

    // 61 - 80
    {
      name: 'METAL_L1_COLOR61',
      color: '#7B7B7B',
    },
    {
      name: 'METAL_L1_COLOR62',
      color: '#000000',
    },
    {
      name: 'METAL_L1_COLOR63',
      color: '#2A2824',
    },
    {
      name: 'METAL_L1_COLOR64',
      color: '#260000',
    },
    {
      name: 'METAL_L1_COLOR65',
      color: '#271202',
    },
    {
      name: 'METAL_L1_COLOR66',
      color: '#261A00',
    },
    {
      name: 'METAL_L1_COLOR67',
      color: '#261E00',
    },
    {
      name: 'METAL_L1_COLOR68',
      color: '#262400',
    },
    {
      name: 'METAL_L1_COLOR69',
      color: '#1C2600',
    },
    {
      name: 'METAL_L1_COLOR70',
      color: '#101C08',
    },
    {
      name: 'METAL_L1_COLOR71',
      color: '#002602',
    },
    {
      name: 'METAL_L1_COLOR72',
      color: '#002612',
    },
    {
      name: 'METAL_L1_COLOR73',
      color: '#002622',
    },
    {
      name: 'METAL_L1_COLOR74',
      color: '#001826',
    },
    {
      name: 'METAL_L1_COLOR75',
      color: '#00103A',
    },
    {
      name: 'METAL_L1_COLOR76',
      color: '#0A0E2E',
    },
    {
      name: 'METAL_L1_COLOR77',
      color: '#1A0826',
    },
    {
      name: 'METAL_L1_COLOR78',
      color: '#260826',
    },
    {
      name: 'METAL_L1_COLOR79',
      color: '#26081A',
    },
    {
      name: 'METAL_L1_COLOR80',
      color: '#320A0A',
    },
  ],

  pearlescent: [
    // Pearlescent
    {
      name: 'PEARL1_PAINT',
      color: '#3C3C9D',
    },
    {
      name: 'PEARL2_PAINT',
      color: '#9D3C3C',
    },
    {
      name: 'PEARL3_PAINT',
      color: '#3C9D3C',
    },
    {
      name: 'PEARL4_PAINT',
      color: '#3C9D9D',
    },
    {
      name: 'PEARL5_PAINT',
      color: '#9D9D3C',
    },
    {
      name: 'PEARL6_PAINT',
      color: '#9D3C9D',
    },
    {
      name: 'PEARL7_PAINT',
      color: '#3C3C9D',
    },
    {
      name: 'PEARL8_PAINT',
      color: '#9D3C3C',
    },
    {
      name: 'PEARL9_PAINT',
      color: '#3C9D3C',
    },
    {
      name: 'PEARL10_PAINT',
      color: '#9D9D3C',
    },
    {
      name: 'PEARL11_PAINT',
      color: '#3C9D3C',
    },
    {
      name: 'PEARL12_PAINT',
      color: '#9D3C3C',
    },
    {
      name: 'PEARL13_PAINT',
      color: '#9D3C3C',
    },
    {
      name: 'PEARL14_PAINT',
      color: '#9D9D3C',
    },
    {
      name: 'PEARL15_PAINT',
      color: '#C50000',
    },
    {
      name: 'PEARL16_PAINT',
      color: '#0000C5',
    },
    {
      name: 'PEARL17_PAINT',
      color: '#00C500',
    },
    {
      name: 'PEARL18_PAINT',
      color: '#C50093',
    },
    {
      name: 'PEARL19_PAINT',
      color: '#C59300',
    },
    {
      name: 'PEARL20_PAINT',
      color: '#93C500',
    },
  ],

  chrome: [
    // Chrome
    {
      name: 'CHROME01_PAINT',
      color: '#D9D9D9',
    },
    {
      name: 'CHROME02_PAINT',
      color: '#939393',
    },
    {
      name: 'CHROME03_PAINT',
      color: '#141414',
    },
    {
      name: 'CHROME04_PAINT',
      color: '#CF0606',
    },
    {
      name: 'CHROME05_PAINT',
      color: '#D35000',
    },
    {
      name: 'CHROME06_PAINT',
      color: '#F5D900',
    },
    {
      name: 'CHROME07_PAINT',
      color: '#2A542E',
    },
    {
      name: 'CHROME08_PAINT',
      color: '#2184B5',
    },
    {
      name: 'CHROME09_PAINT',
      color: '#24188B',
    },
    {
      name: 'CHROME10_PAINT',
      color: '#260000',
    },
  ],

  matte: [
    // Matte
    {
      name: 'MATTE01_PAINT',
      color: '#D9D9D9',
    },
    {
      name: 'MATTE02_PAINT',
      color: '#939393',
    },
    {
      name: 'MATTE03_PAINT',
      color: '#141414',
    },
    {
      name: 'MATTE04_PAINT',
      color: '#CF0606',
    },
    {
      name: 'MATTE05_PAINT',
      color: '#D35000',
    },
    {
      name: 'MATTE06_PAINT',
      color: '#F5D900',
    },
    {
      name: 'MATTE07_PAINT',
      color: '#2A542E',
    },
    {
      name: 'MATTE08_PAINT',
      color: '#2184B5',
    },
    {
      name: 'MATTE09_PAINT',
      color: '#24188B',
    },
    {
      name: 'MATTE10_PAINT',
      color: '#260000',
    },
  ],
};

export const RimPaints: IPaint[] = [
  {
    name: 'RIMS_L1_COLOR01',
    color: '#FCFCFC',
  },
  {
    name: 'RIMS_L1_COLOR02',
    color: '#EDF0DD',
  },
  {
    name: 'RIMS_L1_COLOR03',
    color: '#B8CDD0',
  },
  {
    name: 'RIMS_L1_COLOR04',
    color: '#B1B3B0',
  },
  {
    name: 'RIMS_L1_COLOR05',
    color: '#6C6C6C',
  },
  {
    name: 'RIMS_L1_COLOR06',
    color: '#2E2E2E',
  },
  {
    name: 'RIMS_L1_COLOR07',
    color: '#010101',
  },
  {
    name: 'RIMS_L1_COLOR08',
    color: '#B9A04C',
  },
  {
    name: 'RIMS_L1_COLOR09',
    color: '#836833',
  },
  {
    name: 'RIMS_L1_COLOR10',
    color: '#544317',
  },
  {
    name: 'RIMS_L1_COLOR11',
    color: '#272109',
  },
  {
    name: 'RIMS_L1_COLOR12',
    color: '#C40701',
  },
  {
    name: 'RIMS_L1_COLOR13',
    color: '#DA4C00',
  },
  {
    name: 'RIMS_L1_COLOR14',
    color: '#F9E512',
  },
  {
    name: 'RIMS_L1_COLOR15',
    color: '#193D19',
  },
  {
    name: 'RIMS_L1_COLOR16',
    color: '#1E82B6',
  },
  {
    name: 'RIMS_L1_COLOR17',
    color: '#201888',
  },
  {
    name: 'RIMS_L1_COLOR18',
    color: '#2A0145',
  },
  {
    name: 'RIMS_L1_COLOR19',
    color: '#C9037A',
  },
  {
    name: 'RIMS_L1_COLOR20',
    color: '#9E2300',
  },
  {
    name: 'RIMS_L2_COLOR01',
    color: '#FCFCFC',
  },
  {
    name: 'RIMS_L2_COLOR02',
    color: '#EDF0DD',
  },
  {
    name: 'RIMS_L2_COLOR03',
    color: '#B8CDD0',
  },
  {
    name: 'RIMS_L2_COLOR04',
    color: '#B1B3B0',
  },
  {
    name: 'RIMS_L2_COLOR05',
    color: '#6C6C6C',
  },
  {
    name: 'RIMS_L2_COLOR06',
    color: '#2E2E2E',
  },
  {
    name: 'RIMS_L2_COLOR07',
    color: '#010101',
  },
  {
    name: 'RIMS_L2_COLOR08',
    color: '#B9A04C',
  },
  {
    name: 'RIMS_L2_COLOR09',
    color: '#836833',
  },
  {
    name: 'RIMS_L2_COLOR10',
    color: '#544317',
  },
  {
    name: 'RIMS_L2_COLOR11',
    color: '#272109',
  },
  {
    name: 'RIMS_L2_COLOR12',
    color: '#C40701',
  },
  {
    name: 'RIMS_L2_COLOR13',
    color: '#DA4C00',
  },
  {
    name: 'RIMS_L2_COLOR14',
    color: '#F9E512',
  },
  {
    name: 'RIMS_L2_COLOR15',
    color: '#193D19',
  },
  {
    name: 'RIMS_L2_COLOR16',
    color: '#1E82B6',
  },
  {
    name: 'RIMS_L2_COLOR17',
    color: '#201888',
  },
  {
    name: 'RIMS_L2_COLOR18',
    color: '#2A0145',
  },
  {
    name: 'RIMS_L2_COLOR19',
    color: '#C9037A',
  },
  {
    name: 'RIMS_L2_COLOR20',
    color: '#9E2300',
  },
  {
    name: 'RIMS_L3_COLOR01',
    color: '#FCFCFC',
  },
  {
    name: 'RIMS_L3_COLOR02',
    color: '#EDF0DD',
  },
  {
    name: 'RIMS_L3_COLOR03',
    color: '#B8CDD0',
  },
  {
    name: 'RIMS_L3_COLOR04',
    color: '#B1B3B0',
  },
  {
    name: 'RIMS_L3_COLOR05',
    color: '#6C6C6C',
  },
  {
    name: 'RIMS_L3_COLOR06',
    color: '#2E2E2E',
  },
  {
    name: 'RIMS_L3_COLOR07',
    color: '#010101',
  },
  {
    name: 'RIMS_L3_COLOR08',
    color: '#B9A04C',
  },
  {
    name: 'RIMS_L3_COLOR09',
    color: '#836833',
  },
  {
    name: 'RIMS_L3_COLOR10',
    color: '#544317',
  },
  {
    name: 'RIMS_L3_COLOR11',
    color: '#272109',
  },
  {
    name: 'RIMS_L3_COLOR12',
    color: '#C40701',
  },
  {
    name: 'RIMS_L3_COLOR13',
    color: '#DA4C00',
  },
  {
    name: 'RIMS_L3_COLOR14',
    color: '#F9E512',
  },
  {
    name: 'RIMS_L3_COLOR15',
    color: '#193D19',
  },
  {
    name: 'RIMS_L3_COLOR16',
    color: '#1E82B6',
  },
  {
    name: 'RIMS_L3_COLOR17',
    color: '#201888',
  },
  {
    name: 'RIMS_L3_COLOR18',
    color: '#2A0145',
  },
  {
    name: 'RIMS_L3_COLOR19',
    color: '#C9037A',
  },
  {
    name: 'RIMS_L3_COLOR20',
    color: '#9E2300',
  },
];

export const VinylPaints: IPaint[] = [
  // 1 - 20
  {
    name: 'VINYL_L1_COLOR01',
    color: '#FCFCFC',
  },
  {
    name: 'VINYL_L1_COLOR02',
    color: '#4F4F4F',
  },
  {
    name: 'VINYL_L1_COLOR03',
    color: '#FCF8E8',
  },
  {
    name: 'VINYL_L1_COLOR04',
    color: '#E01B1B',
  },
  {
    name: 'VINYL_L1_COLOR05',
    color: '#F27922',
  },
  {
    name: 'VINYL_L1_COLOR06',
    color: '#F0B630',
  },
  {
    name: 'VINYL_L1_COLOR07',
    color: '#FCD15B',
  },
  {
    name: 'VINYL_L1_COLOR08',
    color: '#F0E356',
  },
  {
    name: 'VINYL_L1_COLOR09',
    color: '#CDF268',
  },
  {
    name: 'VINYL_L1_COLOR10',
    color: '#C5FC9A',
  },
  {
    name: 'VINYL_L1_COLOR11',
    color: '#A4F5AB',
  },
  {
    name: 'VINYL_L1_COLOR12',
    color: '#68F2AB',
  },
  {
    name: 'VINYL_L1_COLOR13',
    color: '#68F2E7',
  },
  {
    name: 'VINYL_L1_COLOR14',
    color: '#68C2F2',
  },
  {
    name: 'VINYL_L1_COLOR15',
    color: '#689BF2',
  },
  {
    name: 'VINYL_L1_COLOR16',
    color: '#5070BA',
  },
  {
    name: 'VINYL_L1_COLOR17',
    color: '#BF5BFC',
  },
  {
    name: 'VINYL_L1_COLOR18',
    color: '#F268F2',
  },
  {
    name: 'VINYL_L1_COLOR19',
    color: '#F268B9',
  },
  {
    name: 'VINYL_L1_COLOR20',
    color: '#D6422B',
  },

  // 21 - 40
  {
    name: 'VINYL_L1_COLOR21',
    color: '#C0C9D1',
  },
  {
    name: 'VINYL_L1_COLOR22',
    color: '#333333',
  },
  {
    name: 'VINYL_L1_COLOR23',
    color: '#C9BFB5',
  },
  {
    name: 'VINYL_L1_COLOR24',
    color: '#BD2626',
  },
  {
    name: 'VINYL_L1_COLOR25',
    color: '#D15000',
  },
  {
    name: 'VINYL_L1_COLOR26',
    color: '#D48D00',
  },
  {
    name: 'VINYL_L1_COLOR27',
    color: '#F5C800',
  },
  {
    name: 'VINYL_L1_COLOR28',
    color: '#F0E000',
  },
  {
    name: 'VINYL_L1_COLOR29',
    color: '#90B521',
  },
  {
    name: 'VINYL_L1_COLOR30',
    color: '#6DFC00',
  },
  {
    name: 'VINYL_L1_COLOR31',
    color: '#41A349',
  },
  {
    name: 'VINYL_L1_COLOR32',
    color: '#21B56B',
  },
  {
    name: 'VINYL_L1_COLOR33',
    color: '#21B5A6',
  },
  {
    name: 'VINYL_L1_COLOR34',
    color: '#2184B5',
  },
  {
    name: 'VINYL_L1_COLOR35',
    color: '#2D4FB5',
  },
  {
    name: 'VINYL_L1_COLOR36',
    color: '#223C8C',
  },
  {
    name: 'VINYL_L1_COLOR37',
    color: '#800EC7',
  },
  {
    name: 'VINYL_L1_COLOR38',
    color: '#B521B5',
  },
  {
    name: 'VINYL_L1_COLOR39',
    color: '#D6007D',
  },
  {
    name: 'VINYL_L1_COLOR40',
    color: '#A33718',
  },

  // 41 - 60
  {
    name: 'VINYL_L1_COLOR41',
    color: '#B5B5B5',
  },
  {
    name: 'VINYL_L1_COLOR42',
    color: '#15171F',
  },
  {
    name: 'VINYL_L1_COLOR43',
    color: '#6B635B',
  },
  {
    name: 'VINYL_L1_COLOR44',
    color: '#770A0F',
  },
  {
    name: 'VINYL_L1_COLOR45',
    color: '#5E2600',
  },
  {
    name: 'VINYL_L1_COLOR46',
    color: '#5E4200',
  },
  {
    name: 'VINYL_L1_COLOR47',
    color: '#B1951A',
  },
  {
    name: 'VINYL_L1_COLOR48',
    color: '#837F00',
  },
  {
    name: 'VINYL_L1_COLOR49',
    color: '#465E00',
  },
  {
    name: 'VINYL_L1_COLOR50',
    color: '#447122',
  },
  {
    name: 'VINYL_L1_COLOR51',
    color: '#2A542E',
  },
  {
    name: 'VINYL_L1_COLOR52',
    color: '#265E42',
  },
  {
    name: 'VINYL_L1_COLOR53',
    color: '#005E56',
  },
  {
    name: 'VINYL_L1_COLOR54',
    color: '#003E5E',
  },
  {
    name: 'VINYL_L1_COLOR55',
    color: '#122A6B',
  },
  {
    name: 'VINYL_L1_COLOR56',
    color: '#101666',
  },
  {
    name: 'VINYL_L1_COLOR57',
    color: '#40125E',
  },
  {
    name: 'VINYL_L1_COLOR58',
    color: '#5E125E',
  },
  {
    name: 'VINYL_L1_COLOR59',
    color: '#5D0035',
  },
  {
    name: 'VINYL_L1_COLOR60',
    color: '#5E0000',
  },

  // 61 - 80
  {
    name: 'VINYL_L1_COLOR61',
    color: '#7B7B7B',
  },
  {
    name: 'VINYL_L1_COLOR62',
    color: '#000000',
  },
  {
    name: 'VINYL_L1_COLOR63',
    color: '#2A2824',
  },
  {
    name: 'VINYL_L1_COLOR64',
    color: '#260000',
  },
  {
    name: 'VINYL_L1_COLOR65',
    color: '#271202',
  },
  {
    name: 'VINYL_L1_COLOR66',
    color: '#261A00',
  },
  {
    name: 'VINYL_L1_COLOR67',
    color: '#261E00',
  },
  {
    name: 'VINYL_L1_COLOR68',
    color: '#262400',
  },
  {
    name: 'VINYL_L1_COLOR69',
    color: '#1C2600',
  },
  {
    name: 'VINYL_L1_COLOR70',
    color: '#101C08',
  },
  {
    name: 'VINYL_L1_COLOR71',
    color: '#002602',
  },
  {
    name: 'VINYL_L1_COLOR72',
    color: '#002612',
  },
  {
    name: 'VINYL_L1_COLOR73',
    color: '#002622',
  },
  {
    name: 'VINYL_L1_COLOR74',
    color: '#001826',
  },
  {
    name: 'VINYL_L1_COLOR75',
    color: '#00103A',
  },
  {
    name: 'VINYL_L1_COLOR76',
    color: '#0A0E2E',
  },
  {
    name: 'VINYL_L1_COLOR77',
    color: '#1A0826',
  },
  {
    name: 'VINYL_L1_COLOR78',
    color: '#260826',
  },
  {
    name: 'VINYL_L1_COLOR79',
    color: '#26081A',
  },
  {
    name: 'VINYL_L1_COLOR80',
    color: '#320A0A',
  },
];

export const WindshieldTint: IWindshieldTint[] = [
  {
    name: 'Light Black',
    id: 'WINDSHIELD_TINT_L1_BLACK',
  },
  {
    name: 'Light Green',
    id: 'WINDSHIELD_TINT_L1_GREEN',
  },
  {
    name: 'Medium Black',
    id: 'WINDSHIELD_TINT_L1_MED_BLACK',
  },
  {
    name: 'Medium Green',
    id: 'WINDSHIELD_TINT_L1_MED_GREEN',
  },
  {
    name: 'Medium Blue',
    id: 'WINDSHIELD_TINT_L1_BLUE',
  },
  {
    name: 'Medium Red',
    id: 'WINDSHIELD_TINT_L1_RED',
  },
  {
    name: 'Dark Black',
    id: 'WINDSHIELD_TINT_L2_BLACK',
  },
  {
    name: 'Dark Green',
    id: 'WINDSHIELD_TINT_L2_Green',
  },
  {
    name: 'Dark Blue',
    id: 'WINDSHIELD_TINT_L2_BLUE',
  },
  {
    name: 'Dark Red',
    id: 'WINDSHIELD_TINT_L2_RED',
  },
  {
    name: 'Dark Yellow',
    id: 'WINDSHIELD_TINT_L2_YELLOW',
  },
  {
    name: 'Dark Aqua',
    id: 'WINDSHIELD_TINT_L2_AQUA',
  },
  {
    name: 'Dark Coral',
    id: 'WINDSHIELD_TINT_L2_GRAPE',
  },
  {
    name: 'Dark Orange',
    id: 'WINDSHIELD_TINT_L2_ORANGE',
  },
  {
    name: 'Dark Magenta',
    id: 'WINDSHIELD_TINT_L2_PINK',
  },
  {
    name: 'Dark Lime',
    id: 'WINDSHIELD_TINT_L2_LIME',
  },
  {
    name: 'Dark Purple',
    id: 'WINDSHIELD_TINT_L2_LAVENDER',
  },
  {
    name: 'Dark Pearl Black',
    id: 'WINDSHIELD_TINT_L3_PEARL_BLACK',
  },
  {
    name: 'Dark Pearl Green',
    id: 'WINDSHIELD_TINT_L3_PEARL_GREEN',
  },
  {
    name: 'Dark Pearl Blue',
    id: 'WINDSHIELD_TINT_L3_PEARL_BLUE',
  },
  {
    name: 'Dark Pearl Red',
    id: 'WINDSHIELD_TINT_L3_PEARL_RED',
  },
  {
    name: 'Dark Pearl Yellow',
    id: 'WINDSHIELD_TINT_L3_PEARL_YELLOW',
  },
  {
    name: 'Dark Pearl Aqua',
    id: 'WINDSHIELD_TINT_L3_PEARL_AQUA',
  },
  {
    name: 'Dark Pearl Coral',
    id: 'WINDSHIELD_TINT_L3_PEARL_GRAPE',
  },
  {
    name: 'Dark Pearl Orange',
    id: 'WINDSHIELD_TINT_L3_PEARL_ORANGE',
  },
  {
    name: 'Dark Pearl Magenta',
    id: 'WINDSHIELD_TINT_L3_PEARL_PINK',
  },
  {
    name: 'Dark Pearl Lime',
    id: 'WINDSHIELD_TINT_L3_PEARL_LIME',
  },
  {
    name: 'Dark Pearl Purple',
    id: 'WINDSHIELD_TINT_L3_PEARL_LAVENDER',
  },
  {
    name: 'Dark Pearl Gold',
    id: 'WINDSHIELD_TINT_L3_PEARL_GOLD',
  },
];
