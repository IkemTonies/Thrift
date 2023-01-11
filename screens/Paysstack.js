import { Text } from 'react-native';
import {SafeArea} from '../utils/safearea';

export function Paystack ({navigation,route}) {
    const { productPrice,productName,discount} = route.params;
    console.log(productPrice,productName,discount);
    <SafeArea>
        <Text>Price for {productName} is {productPrice}</Text>
    </SafeArea>
}