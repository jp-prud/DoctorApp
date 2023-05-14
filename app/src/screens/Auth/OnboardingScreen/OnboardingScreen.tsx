import React, {useRef, useState} from 'react';

import {Animated, FlatList, ListRenderItemInfo, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {OnboardingItemProps, OnboardingItem} from './components/OnboardingItem';
import {Paginator} from './components/Paginator';
import {Navigation} from './components/Navigation';

import {OnborardingScreenContent} from 'src/mocks/Onboarding';

import {Container, NavigationContainer} from './styles';

export function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  function renderOnboardingItem({
    item,
  }: ListRenderItemInfo<OnboardingItemProps>) {
    return <OnboardingItem {...item} />;
  }

  function handleClickToNextSlide() {
    if (currentIndex < OnborardingScreenContent.length - 1) {
      slidesRef?.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('account');
    }
  }
  return (
    <Container>
      <View style={{flex: 3}}>
        <FlatList
          data={OnborardingScreenContent}
          keyExtractor={item => item.title}
          renderItem={renderOnboardingItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={OnborardingScreenContent} scrollX={scrollX} />

      <NavigationContainer style={{flex: 1}}>
        {currentIndex != 0 && (
          <Navigation handleNextSlide={handleClickToNextSlide} />
        )}
      </NavigationContainer>
    </Container>
  );
}
