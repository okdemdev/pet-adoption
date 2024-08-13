import { View, Text, Image, TouchableOpacity } from 'react-native';
import { db } from '../../config/FirebaseConfig';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { FlatList } from 'react-native';
import Colors from '@/constants/Colors';

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dogs');

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setCategoryList([]);
    const snapshot = await getDocs(collection(db, 'Category'));
    snapshot.forEach((doc) => {
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: 'poppinsMedium',
          fontSize: 16,
          marginBottom: 8,
        }}
      >
        Pet Categories
      </Text>

      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item.name;

          return (
            <TouchableOpacity onPress={() => handleCategorySelect(item.name)}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: isSelected ? Colors.PRIMARY : 'lightgray', // Change background color based on selection
                  marginRight: 10,
                  borderRadius: 50, // Changed to make it circular
                  padding: 6,
                }}
              >
                <Image
                  source={{ uri: item?.imageUrl }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20, // Circular image
                    backgroundColor: isSelected ? 'white' : 'gray', // Change based on selection
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'poppinsMedium',
                    fontSize: 16,
                    color: isSelected ? 'white' : 'black', // Change text color based on selection
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}
                >
                  {item?.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
