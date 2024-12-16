import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, useWindowDimensions } from "react-native";
import React from 'react';
import { Container } from "@shopify/react-native-skia/lib/typescript/src/renderer/Container";
import Animated, { interpolateColor, SharedValue, useDerivedValue, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type Props = {
    handlePress: () => void;
    buttonVal: SharedValue<number>;
};

const CustomButton = ({handlePress, buttonVal}: Props) => {
    const {height: SCREEN_HEIGHT} = useWindowDimensions()

     // Animated background color based on buttonVal.value
     const animatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
          buttonVal.value,
          [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
          ['#1D428A', '#4F7942', '	#A020F0'],
        );

        return {
            backgroundColor,
        };
    });

    const buttonAnimationStyle = useAnimatedStyle(() => {
        return {
          width:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withSpring(260)
              : withSpring(120),
          height:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withSpring(80)
              : withSpring(120),
        };
      });

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={[styles.container, animatedColor, buttonAnimationStyle]}>
                <Image
                    style={styles.btnArrow} 
                    source={require('../assets/images/arrow3.png')} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        bottom: 100,
        width: 150,
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    btnArrow:
    {
        height: 100,
        width: 100,
    }
})