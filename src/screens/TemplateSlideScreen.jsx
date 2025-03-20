import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {wp} from '../utils/Constants';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import CustomSafeArea from '../components/CustomSafeArea';
import CustomButton from '../components/CustomButton';
import {resetAndNavigate} from '../utils/NavigationUtil';

const templates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const {width} = Dimensions.get('window');

const TemplateSlideScreen = () => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const RenderItem = useCallback(({item, index, scrollX}) => {
    const rnAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [-width * 0.15, 0, width * 0.15],
              Extrapolation.CLAMP,
            ),
          },
          {
            scale: interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [0.9, 1, 0.9],
              Extrapolation.CLAMP,
            ),
          },
        ],
      };
    });

    return (
      <Animated.View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(100),
          },
          rnAnimatedStyle,
        ]}>
        <View
          style={{
            width: wp(86),
            aspectRatio: 1 / 1.414,
            backgroundColor: 'lightgray',
            borderRadius: 6,
          }}
        />
      </Animated.View>
    );
  }, []);

  return (
    <CustomSafeArea>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select a Template</Text>
        <TouchableOpacity
          onPress={() => resetAndNavigate('BottomTab')}
          style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Animated.FlatList
          data={templates}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          contentContainerStyle={styles.listContainer}
          pagingEnabled
          bounces={false}
          keyExtractor={(_, i) => i.toString()}
          onScroll={onScrollHandler}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          initialScrollIndex={2}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>
      <CustomButton
        title="Select"
        style={styles.button}
        onPress={() => resetAndNavigate('BottomTab')}
      />
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    // gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  button: {
    marginBottom: 20,
    width: wp(80),
    alignSelf: 'center',
  },
});

export default TemplateSlideScreen;
