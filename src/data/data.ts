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
        image: require('../assets/images/cat.png'),
        text: ' Lorem ipsum dolo sit 1',
        textColor: '#F8DAC2',
        backgroundColor: '#4F7942',
    },

    {
        id: 2,
        image: require('../assets/images/raven.png'),
        text: ' Lorem ipsum dolo sit 2',
        textColor: '#F8DAC2',
        backgroundColor: '#1D428A',
    },

    {
        id: 3,
        image: require('../assets/images/horse.png'),
        text: ' Lorem ipsum dolo sit 3',
        textColor: '#F8DAC2',
        backgroundColor: '#FEBE10',
    },
];

export default data;