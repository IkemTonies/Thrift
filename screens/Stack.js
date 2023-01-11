import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { About } from './About';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import { Profile } from './Profile';
import { Loan } from './Loan';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { MyHome } from './Home';
import { Paystack } from './Paysstack';
import { Intro } from './Intro';




const Stack = createNativeStackNavigator();

export function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:false}}>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Deposit' component={Deposit} options={{headerShown:true}}/>
            <Stack.Screen name='Withdraw' component={Withdraw} options={{headerShown:true}}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Loan' component={Loan}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Sign in' component={Signin} options={{headerShown:true}}/>
            <Stack.Screen name='My Home' component={MyHome}/>
            <Stack.Screen name='Pay Online' component={Paystack}/>
            <Stack.Screen name='Intro' component={Intro}/>
        </Stack.Navigator>
    )
}