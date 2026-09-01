import { render } from '@testing-library/react-native';

import MonthlySpent from '@/components/common/monthly-spent/monthly-spent';

describe('<MonthlySpent />', () => {
  it('renders the title, amount, percentage, and categories correctly', async () => {
    const { getByText } = await render(
      <MonthlySpent
        title="Spent in September"
        amount={2148.98}
        percentage={14}
        categories={[50, 30, 20, 10, 50, 25, 10]}
      />
    );

    expect(getByText('Spent in September')).toBeTruthy();
    expect(getByText('$2,148.98')).toBeTruthy();
    expect(getByText('14%')).toBeTruthy();
  });
});
