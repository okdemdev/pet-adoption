import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native';

export default function PetInfo({ pet }) {
  return (
    <View style={{ marginTop: 100 }}>
      {/* Pet info */}
      <View style={{ gap: 4 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}
        >
          <Text style={{ fontSize: 30, fontFamily: 'poppinsBold' }}>{pet.name}</Text>
          <Ionicons name="male" size={32} color="gray" />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}
        >
          <Text style={{ fontFamily: 'poppinsBold', color: 'gray' }}>{pet.breed}</Text>
          <Text style={{ fontFamily: 'poppinsBold', color: 'gray' }}>{pet.age} months old</Text>
        </View>
      </View>

      {/* Pet Images Link */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={{ uri: pet.imageUrl }}
            style={{
              width: 300,
              height: 300,
              borderRadius: 30,
            }}
          />
        </View>

        {/* Add more images as needed */}
        <View style={{ marginRight: 10 }}>
          <Image
            source={{ uri: pet.imageUrl }}
            style={{
              width: 300,
              height: 300,
              borderRadius: 30,
            }}
          />
        </View>

        <View style={{ marginRight: 10 }}>
          <Image
            source={{ uri: pet.imageUrl }}
            style={{
              width: 300,
              height: 300,
              borderRadius: 30,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
