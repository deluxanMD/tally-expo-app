import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    card: {
      padding: 16,
      borderRadius: 16,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
  });
