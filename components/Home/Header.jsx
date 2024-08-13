import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

export default function Header() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Ionicons name="location-sharp" size={36} color={Colors.PRIMARY} />
        <Text
          style={{
            fontFamily: 'poppinsMedium',
            fontSize: 18,
            gap: 4,
          }}
        >
          Timisoara, Romania
        </Text>
      </View>
      <View>
        <Ionicons name="search" size={32} color="black" />
      </View>
    </View>
  );
}
