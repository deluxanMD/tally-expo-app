import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import Card from '@/components/common/card/card';

describe('<Card />', () => {
  it('renders the children correctly', async () => {
    const { getByText } = await render(
      <Card>
        <Text>Test Card</Text>
      </Card>
    );

    expect(getByText('Test Card')).toBeTruthy();
  });
});
