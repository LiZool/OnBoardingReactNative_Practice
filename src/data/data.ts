import { ImageProps } from 'react-native';

export interface OnboardingData {
    id: number;
    image: ImageProps;
    text: string;
    textColor: string;
    backgroundColor: string;
}

const data: OnboardingData[] = [
    {
        id: 1,
        image: require('../assets/images/exe0.png'),
        text: ' Work out with us ',
        textColor: '#F8DAC2',
        backgroundColor: '#4F7942',
    },

    {
        id: 2,
        image: require('../assets/images/exe1.png'),
        text: ' Get Fit ',
        textColor: '#F8DAC2',
        backgroundColor: '#1D428A',
    },

    {
        id: 3,
        image: require('../assets/images/exe2.png'),
        text: ' Live Healthy ',
        textColor: '#F8DAC2',
        backgroundColor: '#FEBE10',
    },
];

export default data;