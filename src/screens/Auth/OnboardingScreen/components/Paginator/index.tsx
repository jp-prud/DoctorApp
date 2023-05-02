import {View, Animated, useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';

interface PaginatorProps {
  data: Array<any>;
  scrollX: Animated.Value;
}

export function Paginator({data, scrollX}: PaginatorProps) {
  const {width} = useWindowDimensions();

  const theme = useTheme();

  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={{
              width: dotWidth,
              opacity,
              height: 10,
              borderRadius: 5,
              backgroundColor: theme.COLORS.BLUE,
              marginHorizontal: 8,
            }}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}
