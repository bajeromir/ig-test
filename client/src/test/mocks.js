export const MOCK_ELEMENT_FIRST = {
  _id: '5d9ddef4915161280000853c',
  id: 2,
  name: 'New Spread bet',
  default: false,
  funds: 1000,
  profitLoss: -679,
  accountType: 'IGSB',
  isDemo: false,
  currency: '$',
  accFullType: 'Spread bet account',
};

export const MOCK_ELEMENT_SECOND = {
  _id: '5d9ddef4915161280000853b',
  id: 1,
  name: 'Spread bet',
  default: true,
  funds: 10000,
  profitLoss: 0.23,
  accountType: 'IGSB',
  isDemo: false,
  currency: '$',
  accFullType: 'Spread bet account',
};

export const MOCK_ELEMENT_THIRD = {
  _id: '5d9ddef4915161280000853e',
  id: 4,
  name: 'CFD - demo',
  default: false,
  funds: 20000000,
  profitLoss: 16679,
  accountType: 'IGCFD',
  isDemo: true,
  currency: '€',
  accFullType: 'Spread bet account',
};

export const MOCK_ELEMENT_LIST = [
  MOCK_ELEMENT_FIRST,
  MOCK_ELEMENT_SECOND,
  MOCK_ELEMENT_THIRD,
];

export const MOCK_COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Profit & Loss',
    accessor: 'profitLoss',
  },
  {
    Header: 'Account Type',
    accessor: 'accFullType',
  },
];
