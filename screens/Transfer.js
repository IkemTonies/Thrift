import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SafeArea} from '../utils/safearea';
import { Theme } from '../utils/theme';

export function Transfer ({navigation,route}) {
    
    return(
        <SafeArea>
            <ScrollView>
                
                <View style={styles.jessE}>
                    <Text style={styles.jess}>Jessica Ellision</Text>
                    <Text style={styles.elli}>@jessellion</Text>
                    <Image source={require('../assets/profile-pix.jpg')} style={styles.img}/>
                </View>
                <View style={styles.Amt1}>
                    <Text style={styles.Amt2}>Amount</Text>
                    <Text style={styles.Amt3}>$140</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.Amt2}>Note</Text>
                    <Text style={styles.Amt3}>Plumbing Service</Text>
                    <View style={styles.line2}></View>
                    <Text style={styles.free}>This transaction is FREE</Text>
                    <View style={styles.impot}>
                    <Text style={styles.impot2}>Important:</Text>
                    <Text style={styles.impot3}>Check the @ChipperTag before sending</Text>
                    
                    

                    </View>
                    <TouchableOpacity>
                        <View style={styles.send}>
                            <Text style={styles.send2}>Send</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
            
        </SafeArea>
    )
}
const styles = StyleSheet.create({
    
    jessE:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:40
    },
    jess:{
        fontSize:25,
        fontWeight:'bold'
    },
    elli:{
        fontSize:25,
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
        marginTop:10,
        marginBottom:50,
    },
    Amt1:{
        left:10,
    },
    Amt2:{
        fontSize:20,
        fontWeight:'500',
    },
    Amt3:{
        fontSize:20,
        fontWeight:'500',
        marginTop:20,
    },
    line:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        borderColor:'gray'
    },
    line2:{
        borderWidth:1,
        marginTop:10,
        borderColor:'gray'
        
    },
    free:{
        color:'green',
        marginTop:3,
        fontSize:17,
        marginBottom:30,
    },
    impot:{
        justifyContent:'center',
        alignItems:'center',
    },
    impot2:{
        fontSize:20,
        fontWeight:'600'
    },
    impot3:{
        fontSize:15,
        marginBottom:15,
        
    },
    send:{
        height:70,
        width:350,
        backgroundColor:Theme.colors.purple500,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20

    },
    send2:{
        color:'#fff',
        fontSize:25
    }


})