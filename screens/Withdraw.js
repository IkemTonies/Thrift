import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {SafeArea} from '../utils/safearea';
import { Theme } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';

export function Withdraw () {
    return(
    <SafeArea>
       <ScrollView>
        <View style={styles.contanier}>
        <View style={styles.send}>
            <Text style={styles.send2}>30 free transfers left</Text>
            <FontAwesomeIcon icon={faCircleInfo} size={35}
                    color={'purple'}/>
            </View> 
            <Text style={styles.send3}>Available balance:₦50,000</Text>  
            </View>
            <View style={styles.contanier2}>
        <View style={styles.send1}>
            <Text style={styles.send4}>₦2,000</Text>
            
        </View> 
        <TouchableOpacity>
        <View style={styles.withD1}>
            <Text style={styles.withD3}>Withdraw</Text>
        </View>
        </TouchableOpacity>
        
        </View>
        </ScrollView>
        </SafeArea>
    )
}
const styles = StyleSheet.create({
    contanier:{
        justifyContent:'center',
        alignItems:'center',

    },
    send:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        backgroundColor:Theme.colors.purple300,
        height:70,
        width:300,
        borderRadius:40,
        marginBottom:5
    },
    send2:{
        fontSize:20,
        fontWeight:'bold',
        color:'purple',
    },
    send3:{
        fontSize:20,
        marginBottom:25,
        
    },
    contanier2:{
        justifyContent:'center',
        alignItems:'center',

    },
    send1:{
        justifyContent:'space-around',
        alignItems:'center',
        height:120,
        width:360,
        borderRadius:10,
        borderColor:Theme.colors.purple500,
        borderWidth:2,
        marginBottom:80,
       
    },
    send4:{
        fontSize:40,
    },
    withD1:{
        height:70,
        width:350,
        backgroundColor:Theme.colors.purple500,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
})