import { View, Text, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { FlatList } from 'react-native';

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    setSliderList([]);
    const snapshot = await getDocs(collection(db, 'Sliders'));
    snapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((sliderList) => [...sliderList, doc.data()]);
    });
  };

  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <FlatList
        data={sliderList}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item?.imageUrl }}
              style={{
                width: Dimensions.get('screen').width * 0.9,
                height: 170,
                borderRadius: 15,
                marginRight: 15,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
