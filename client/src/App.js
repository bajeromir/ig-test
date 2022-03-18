import { useEffect, useState, useMemo } from 'react';

import axios from 'axios';
import Table from './Table';
import Spinner from './misc/Spinner';
import './App.css';

function App() {
  const [state, setState] = useState({
    accounts: [],
    isLoaded: false,
  });

  const accountTypes = new Map();

  const getAccountTypes = async () => {
    const res = await axios('/accounttypes');
    res.data.forEach((el) => {
      accountTypes.set(el.id, el.title);
    });
  };

  const getAccounts = async () => {
    const res = await axios('/accounts');
    return res.data.map((el) => {
      return {
        ...el,
        accFullType: accountTypes.get(el.accountType),
      };
    });
  };

  const getInitialData = async () => {
    try {
      await getAccountTypes();
      let data = await getAccounts();
      setState({ accounts: [...data], isLoaded: true });
    } catch (err) {
      console.error(err);
    }
  };

  const noCurrencySortFactory = () => {
    const sortFunction = (a, b) => {
      let { values: avalues } = a;
      let { values: bvalues } = b;
      const aVal = avalues[`Profit & Loss`].slice(1);
      const bVal = bvalues[`Profit & Loss`].slice(1);
      return aVal < bVal ? -1 : 1;
    };
    return sortFunction;
  };

  const withoutCurrencySort = useMemo(noCurrencySortFactory, []);

  useEffect(() => {
    getInitialData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Profit & Loss',
        accessor: (row) => `${row.currency} ${row.profitLoss}`,
        sortType: withoutCurrencySort,
      },
      {
        Header: 'Account Type',
        accessor: 'accFullType',
      },
    ],
    []
  );

  const data = useMemo(() => state.accounts, [state]);

  if (!state.isLoaded) return <Spinner></Spinner>;

  return <Table columns={columns} data={data} />;
}

export default App;
