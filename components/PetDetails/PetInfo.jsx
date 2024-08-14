import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PetInfo({ pet }) {
  return (
    <View
      style={{
        marginTop: 100,
      }}
    >
      {/* Pet info */}
      <View
        style={{
          gap: 4,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'poppinsBold',
            }}
          >
            {pet.name}
          </Text>
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
          <Text
            style={{
              fontFamily: 'poppinsBold',
              color: 'gray',
            }}
          >
            {pet.breed}
          </Text>
          <Text
            style={{
              fontFamily: 'poppinsBold',
              color: 'gray',
            }}
          >
            {pet.age} months old
          </Text>
        </View>
      </View>
      {/* Pet image - Horizontally scrollable */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          padding: 20,
          justifyContent: 'center',
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <View style={{ width: 300, alignItems: 'center' }}>
            <Image
              source={{ uri: pet.imageUrl }}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
              }}
            />
          </View>
          <View style={{ width: 300, alignItems: 'center' }}>
            <Image
              source={{ uri: pet.imageUrl }}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
              }}
            />
          </View>
          <View style={{ width: 300, alignItems: 'center' }}>
            <Image
              source={{ uri: pet.imageUrl }}
              style={{
                height: 300,
                width: 300,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
