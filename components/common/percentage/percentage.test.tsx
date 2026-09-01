import { render } from '@testing-library/react-native';

import Percentage from '@/components/common/percentage/percentage';

jest.mock('@/components/ui/icon-symbol', () => {
  const { Text } = jest.requireActual('react-native');
  return { IconSymbol: ({ name }: { name: string }) => <Text>{name}</Text> };
});

describe('<Percentage />', () => {
  it('renders an up arrow for a positive percentage', async () => {
    const { getByText } = await render(<Percentage percentage={5} />);

    expect(getByText('arrow.up')).toBeTruthy();
    expect(getByText('5%')).toBeTruthy();
  });

  it('renders a down arrow for a negative percentage', async () => {
    const { getByText } = await render(<Percentage percentage={-5} />);

    expect(getByText('arrow.down')).toBeTruthy();
    expect(getByText('-5%')).toBeTruthy();
  });

  it('renders a down arrow for a zero percentage', async () => {
    const { getByText } = await render(<Percentage percentage={0} />);

    expect(getByText('arrow.down')).toBeTruthy();
  });
});
