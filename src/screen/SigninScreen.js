import React from 'react'
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SigninScreen = ({navigation}) => {
    
    
    return (
       <View style={styles.container}>
      
            <AuthForm headerText='Sign In for Tracker' 
            onSubmit={(email)=>navigation.navigate('Load',{email:email})}  
            
            sbuttontext="SignIn"/>
            
       <NavLink text="Not Registered ,Use Signup instead" routeName='Signup'/>
       </View>
    )
}
SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 140
    }
})

export default SigninScreen;