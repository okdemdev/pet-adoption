import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function PetDetails() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
    });
  });
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          alignSelf: 'center',
          marginTop: 100,
        }}
      >
        {pet.name}
      </Text>
    </View>
  );
}
