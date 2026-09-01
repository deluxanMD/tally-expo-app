import { render } from '@testing-library/react-native';

import { ThemedText } from '@/components/themed-text';

describe('<ThemedText />', () => {
  it('renders the given text', async () => {
    const { getByText } = await render(<ThemedText>Hello, Tally!</ThemedText>);

    expect(getByText('Hello, Tally!')).toBeTruthy();
  });
});
