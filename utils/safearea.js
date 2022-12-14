import{ Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export function SafeArea ({children}){
    return(
        <SafeAreaView style={style.areaContainer}>
            {children}
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    areaContainer:{
        flex:1,
        paddingHorizontal:8,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight + 4 : 4, 
        
    }
})

// Note you can leave the marginTop:Platform.OS === 'android' 
// ? StatusBar.currentHeight + 20 :null, 
        