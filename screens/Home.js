import { useContext } from 'react';
import { AppContext } from '../utils/globals';
import { View,Text,TouchableOpacity,StyleSheet,Image, Dimensions } from 'react-native';
import { SafeArea } from '../utils/safearea';
import { Theme } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard,faWallet, faUser, faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard as faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Deposit} from './Deposit';
import { History} from './History';
import { Profile} from './Profile';
import Carousel from 'react-native-reanimated-carousel';

const carouselImgUrl = [
    require('../assets/events/diabetes-day.jpg'),
    require('../assets/events/marketing-agency.jpg'),
    require('../assets/events/urban-music.jpg'),

]


 function Home ({navigation}) {
    const {userName} = useContext(AppContext);
    const screenWidth = Dimensions.get('screen').width; //for Carousel
    return (
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Text style={styles.welcomeNote}>Hi,{userName.fname} {userName.lname}</Text>
                        <Image source={require('../assets/profile-pix.jpg')} 
                        style={styles.profileImg}/>
                    </View>
                    <View style={styles.transact}>
                        <View style={styles.transHeaderInfo}>
                            <View style={styles.transHeaderTextBox}>
                                <Text style={styles.transBoxTitle}>Wallet actions</Text>
                                <Text style={styles.transBoxInfo}>
                                    Contribute or make a withdrawal
                                </Text>
                            </View>
                            <FontAwesomeIcon icon={faWallet} color='#fff' size={Theme.sizes[4]}/>
                        </View>
                        <View style={styles.transActionsBox}>
                            <TouchableOpacity style={styles.deposit}
                            onPress={() => navigation.navigate('Deposit')}>
                                <Text style={styles.depositText}>Deposite</Text>
                                <FontAwesomeIcon icon={faCreditCard}
                                size={Theme.fonts.fontSizePoint.h3}
                                color={Theme.colors.maroon700}/>
                                
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.withdraw}
                            onPress={() => navigation.navigate('Withdraw')}>
                                <Text style={styles.withdrawText}>Withdraw</Text>
                                <FontAwesomeIcon icon={faCreditCardAlt}/>
                                <FontAwesomeIcon icon={faCreditCard} 
                                size={Theme.fonts.fontSizePoint.h4}
                                color={Theme.colors.maroon700}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.events}>
                    <Carousel
                    loop
                    width={screenWidth - 20}
                    height='100%'
                    autoPlay={true}
                    data={carouselImgUrl}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        <Image style={styles.imgBox} 
                    source={carouselImgUrl[index]}/>
                    
                )}
            />
                    
                </View>
                <View style={styles.transactions}>
                    <View style={styles.Rtransactions}>
                    <Text style={{fontSize:20}}>Recent Transactions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('History')}>
                            <Text style={{fontSize:20,color:Theme.colors.maroon700}}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.depo}>
                        <FontAwesomeIcon icon={faUser} size={25}/>
                        <View style={styles.depo2}>
                            <Text style={{fontSize:20,color:Theme.colors.purple700}}>Deposite to self</Text>
                            <Text>23/12/22 at 13:38</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:20,fontWeight:'600'}}>₦45000</Text>
                        </View>
                    </View>
                    <View style={styles.depo}>
                        <FontAwesomeIcon icon={faUpLong} size={25}/>
                        <View style={styles.depo2}>
                            <Text style={{fontSize:20,color:Theme.colors.purple700}}>Transfer to John</Text>
                            <Text>22/12/22 at 16:01</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:20,fontWeight:'600'}}>₦15000</Text>
                        </View>
                    </View>
                    <View style={styles.depo}>
                        <FontAwesomeIcon icon={faDownLong} size={25}/>
                        <View style={styles.depo2}>
                            <Text style={{fontSize:20,color:Theme.colors.purple700}}>Transfer from Ada</Text>
                            <Text>23/12/22 at 13:38</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:20,fontWeight:'600'}}>₦8000</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </SafeArea>
    )
}
// this functional components handle botton-tabs navigator
const Tab = createBottomTabNavigator();

export function MyHome(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Deposit') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'History') {
                iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor:Theme.colors.maroon700,
          tabBarInactiveTintColor: Theme.colors.maroon900,
        })}
      >
        <Tab.Screen name="Home" component={Home}options={{headerShown:false}} />
        <Tab.Screen name="Deposit" component={Deposit} options={{headerShown:false}} />
        <Tab.Screen name="History" component={History} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      </Tab.Navigator>
    )
}

const transactions = [
    {docId:1,amount:4500,transType:'Deposit',timestamp:1671008607},
    {docId:2,amount:19000,transType:'Deposit',timestamp:1671009607},
    {docId:3,amount:19000,transType:'Deposit',timestamp:1671000707},
    {docId:4,amount:19000,transType:'Withdrawal',timestamp:1671000757},
    {docId:5,amount:19000,transType:'Deposit',timestamp:1671000777}
]


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:2.2
    },
    profile:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    welcomeNote:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    profileImg:{
        width:36,
        height:36,
        borderRadius:50
    },
    transact:{
        flex:5,
        borderWidth:1,
        borderColor:Theme.colors.maroon900,
        borderRadius:10,
        marginVertical:Theme.sizes[2]
    },
    transHeaderInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:Theme.colors.maroon900,
        margin:Theme.sizes[1],
        borderRadius:10,
        padding:Theme.sizes[2]
    },
    transHeaderTextBox:{
        marginRight:Theme.sizes[1]
    },
    transBoxTitle:{
        color:'#fff',
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'
    },
    transBoxInfo:{
        color:'#fff',
        fontSize:Theme.fonts.fontSizePoint.body
    },
    transActionsBox:{
        flex:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:Theme.sizes[2],
        paddingVertical:Theme.sizes[2],
        backgroundColor: Theme.colors.maroon900
    },
    deposit:{
        flex:1,
        height:Theme.sizes[5],
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFC4C4',
        marginRight:3,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    depositText:{
        fontSize:Theme.fonts.fontSizePoint.caption,
        color:Theme.colors.maroon700
    },
    withdraw:{
        flex:1,
        height:Theme.sizes[5],
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFC4C4',
        marginRight:3,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
    },
    withdrawText:{
        fontSize:Theme.fonts.fontSizePoint.caption,
        color:Theme.colors.maroon700
    },
    events:{
        flex:2.0,
        
    },
    imgBox:{
        height:225,
        width:370,
        borderRadius:10
    },
    transactions:{
        flex:1.8,
        borderWidth:1,
        borderColor:Theme.colors.maroon300,
        borderRadius:10,
        padding:Theme.sizes[2],
        
        
    },
    Rtransactions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    depo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    depo2:{
        right:50,
    }
    
})