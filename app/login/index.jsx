import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

export default function LoginScreen() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <Image
        style={{
          width: '100%',
          height: 500,
        }}
        source={require('./../../assets/images/login.png')}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'poppinsBold',
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          Ready to make a new Friend?
        </Text>
        <Text
          style={{
            fontFamily: 'poppinsMedium',
            fontSize: 18,
            textAlign: 'center',
            color: Colors.GRAY,
          }}
        >
          Let's adopt a pet which you like and make their life happy
        </Text>
        <Pressable
          href="/home"
          style={{
            padding: 14,
            marginTop: 50,
            backgroundColor: Colors.PRIMARY,
            width: '100%',
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontFamily: 'poppinsMedium',
              fontSize: 20,
            }}
          >
<<<<<<< HEAD
            Let's start 2
=======
            Let's start
>>>>>>> c4808653c96caa04d1f0f3edd5c1f624d5c5f35e
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
