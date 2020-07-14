import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context} from '../context/DataContext'


const SignupScreen = () => {
    const {postu}=useContext(Context)
    
    
 return (
        <View style={styles.container}>
      
            <AuthForm headerText='Sign Up ' 
             onSubmit={email=>postu([0,1,2,3,4,5,6,7,8,9],[],[],email)} 
            sbuttontext="SignUp"/>
            
       <NavLink text="Already Registered ,Use Signin instead" routeName='Signin'/>

        </View>

    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 140
    }
})

export default SignupScreen