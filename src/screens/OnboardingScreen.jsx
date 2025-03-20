import {
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import OnboardingItem from '../components/OnboardingItem';
import Pagination from '../components/Pagination';
import {resetAndNavigate} from '../utils/NavigationUtil';
import CustomButton from '../components/CustomButton';
import {wp} from '../utils/Constants';

const onboardingData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg',
    description: 'Well-Designed & Professional Templates To Get Paid Faster',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/17555909/pexels-photo-17555909/free-photo-of-cup-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Simply Manage Clients, Items & Multiple Businesses in Office Place',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg',
    description:
      'Generate Invoices Faster, Easier & More Beautiful Than Ever Before',
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/17555909/pexels-photo-17555909/free-photo-of-cup-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Drive Business Decision with Powerful Reporting Tool',
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  });

  const handleNext = () => {
    if (currentIndex === onboardingData.length - 1) {
      resetAndNavigate('TemplateSlide');
    } else if (currentIndex < onboardingData.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={({item, index}) => (
          <OnboardingItem item={item} index={index} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        ref={slideRef}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        viewabilityConfigCallbackPairs={
          useRef([
            {
              viewabilityConfig: viewConfigRef.current,
              onViewableItemsChanged: onViewableItemsChanged.current,
            },
          ]).current
        }
      />
      <Pagination slides={onboardingData} scrollX={scrollX} />
      <CustomButton
        title={currentIndex === onboardingData.length - 1 ? 'Continue' : 'Next'}
        style={styles.nextButton}
        onPress={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#007BFF',
    alignSelf: 'center',
    marginTop: 20,
    width: wp(80),
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
  },
});

export default OnboardingScreen;
