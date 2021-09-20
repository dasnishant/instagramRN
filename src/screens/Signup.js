import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import { sagaUserSignUp } from '../actions';

const loginValidationSchema = yup.object({
  email: yup.string().required().email(),
  displayName: yup.string().required(),
  password: yup.string().required().min(6),
});

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        displayName: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={values => {
        dispatch(
          sagaUserSignUp({
            email: values.email,
            password: values.password,
            displayName: values.displayName,
            navigation: navigation,
          }),
        );
      }}>
      {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.logoText}>Instagram</Text>
          <TextInput
            style={styles.emailInput}
            placeholder={'Email'}
            value={values.email}
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}></TextInput>
          {touched.email && errors.email && (
            <Text style={{color: 'red'}}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.emailInput}
            placeholder={'Display Name'}
            value={values.displayName}
            onBlur={handleBlur('displayName')}
            onChangeText={handleChange('displayName')}></TextInput>
          {touched.displayName && errors.displayName && (
            <Text style={{color: 'red'}}>{errors.displayName}</Text>
          )}

          <TextInput
            style={styles.emailInput}
            placeholder={'Password'}
            secureTextEntry
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}></TextInput>
          {touched.password && errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}

          <TouchableOpacity
            style={styles.signupBtn}
            activeOpacity={0.6}
            onPress={handleSubmit}>
            <Text style={{color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signupFooter}>
            <Text>
              Already have an account?
              <Text
                style={{color: 'darkblue', fontWeight: '700'}}
                onPress={() => navigation.navigate('login')}
                suppressHighlighting>
                Log In
              </Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: '600',
    marginTop: 250,
    marginBottom: 20,
  },
  emailInput: {
    height: 50,
    width: '85%',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  signupBtn: {
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0084FF',
    borderRadius: 5,
    marginTop: 10,
  },
  signupFooter: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderTopWidth: 1,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Signup;
