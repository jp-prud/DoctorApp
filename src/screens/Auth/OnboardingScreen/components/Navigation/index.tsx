import {View} from 'react-native';

import {Button} from '@components/atomic/Button';

interface NavigationProps {
  handleNextSlide(): void;
}

export function Navigation({handleNextSlide}: NavigationProps) {
  return (
    <View style={{flex: 1}}>
      <Button onPress={handleNextSlide} title="Avançar" size="5X" />
    </View>
  );
}
