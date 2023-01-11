import { AppContext } from '../utils/globals';
import { Image, StyleSheet, Text, View } from 'react-native';
import {SafeArea} from '../utils/safearea';
import { PassionsConflict_400Regular } from '@expo-google-fonts/passions-conflict';
import { useState,useEffect, useCallback,useContext } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Theme } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-paper';
 


export function Profile () {
    const [appIsReady, setAppIsReady] = useState(false);
    const {userName} = useContext(AppContext);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({PassionsConflict_400Regular});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
    return(
    <SafeArea>
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>{userName.fname}</Text>
                </View>
                <View>
                    <Image  style={styles.imgBox}
                    source={require('../assets/profile-pix.jpg')}/>
                </View>
            </View>
            
            <View style={styles.box2}>
                <View style={styles.hary1}>
                    <Text style={styles.hary2}>{userName.fname}</Text>
                </View>
                <View style={styles.edy1}>
                    <Text style={styles.edy2}>{userName.lname}</Text>
                </View>

            </View>
                <View style={styles.singer}>
                    <Text style={styles.singerT}>Verified-Member </Text>
                    <FontAwesomeIcon icon={faCircleCheck} size={25}
                    color={'#2192FF'}/>
                </View>
                <View style={styles.transactionHits}>
                    <View style={styles.hit}>
                        <Text style={styles.hitTitle}>Credits</Text>
                        <Text style={styles.hitvalue}>2.53m</Text>
                    </View>
                    <View style={styles.hit}>
                        <Text style={styles.hitTitle}>Debits</Text>
                        <Text style={styles.hitvalue}>10,000</Text>
                    </View>
                    <View style={styles.hit}>
                        <Text style={styles.hitTitle}>Loans</Text>
                        <Text style={styles.hitvalue}>3</Text>
                    </View>
                </View>
            <View style={styles.box4}>
                <Text style={styles.box4i}>Thrift is the best, they offer soft loans too and you can 
                    withdraw from your investment at any time, support team are always here to give you the best
                    customer supports. You can also download the App from Andriod store and Apple store.</Text>

            </View>

        </View>
    </SafeArea>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    box1:{
        flex:3,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    imgBox:{
        height:280,
        width:210,
        borderRadius:15
    },
    textBox:{
        paddingTop:260,
    },
    text:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'PassionsConflict_400Regular',
        color:Theme.colors.purple700,
    },
    box2:{
        flex:1.,
        backgroundColor:'#fff'
    },
    hary1:{
        left:10

    },
    hary2:{
        fontSize:35,
        fontWeight:'bold'
    },
    edy1:{
        left:10

    },
    edy2:{
        fontSize:35,
        fontWeight:'bold'
    },
    transactionHits:{
        marginVertical:Theme.sizes[2],
        flexDirection:'row',
        justifyContent:'space-between'
    },
    hitTitle:{
        color:Theme.colors.gray200,
        fontSize:Theme.fonts.fontSizePoint.h5,
        marginBottom:Theme.sizes[2]
    },
    hitvalue:{
        fontSize:Theme.fonts.fontSizePoint.h5,
    },
    singer:{
        flex:0.3,
        backgroundColor:'#fff',
        left:10,
        flexDirection:'row',
        alignItems:'center',
    },
    singerT:{
        fontSize:20,
        fontWeight:'bold'
    },
    box4:{
        flex:1.5,
        backgroundColor:Theme.colors.purple300,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Theme.colors.purple700
    },
    box4i:{
        fontSize:15,
        fontWeight:'500'
    }
    
})