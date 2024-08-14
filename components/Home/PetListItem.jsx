import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function PetListItem({ pet }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/pet-details',
          params: pet,
        })
      }
      style={{
        backgroundColor: '#FFF',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8, // For Android shadow
      }}
    >
      {/* left part */}
      <View>
        <Image
          source={{ uri: pet?.imageUrl }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 16,
            backgroundColor: Colors.LIGHT_GRAY, // Placeholder color before the image loads
          }}
        />
      </View>
      {/* right part */}
      <View
        style={{
          marginLeft: 16,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 22,
            color: Colors.DARK_TEXT,
          }}
        >
          {pet.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: Colors.MEDIUM_TEXT,
            marginTop: 4,
          }}
        >
          {pet.breed}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: Colors.LIGHT_TEXT,
            marginTop: 2,
          }}
        >
          {pet.gender}, {pet.age} years old
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: Colors.MEDIUM_TEXT,
              marginLeft: 6,
            }}
          >
            {pet.distance} km away
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
