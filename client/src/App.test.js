import { render, screen } from '@testing-library/react';
import Table from './Table';

import { MOCK_ELEMENT_LIST, MOCK_COLUMNS } from './test/mocks';

describe('Table component', () => {
  it('should display accounts data', () => {
    // given
    const { container } = render(
      <Table columns={MOCK_COLUMNS} data={MOCK_ELEMENT_LIST} />
    );

    // then
    for (const account of MOCK_ELEMENT_LIST) {
      expect(container).toHaveTextContent(account.name);
      expect(container).toHaveTextContent(account.profitLoss);
      expect(container).toHaveTextContent(account.accFullType);
    }
  });
});
