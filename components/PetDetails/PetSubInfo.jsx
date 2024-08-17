import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Modal,
  Linking,
  Image,
} from 'react-native';
import { Badge } from 'react-native-elements';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PetSubInfo({ pet }) {
  const [isNutritionModalVisible, setNutritionModalVisible] = useState(false);
  const [isHealthModalVisible, setHealthModalVisible] = useState(false);
  const [isInfoModalVisible, setInfoModalVisible] = useState(false); // New state for additional info

  const toggleNutritionModal = () => {
    setNutritionModalVisible(!isNutritionModalVisible);
  };

  const toggleHealthModal = () => {
    setHealthModalVisible(!isHealthModalVisible);
  };

  const toggleInfoModal = () => {
    setInfoModalVisible(!isInfoModalVisible); // Toggle additional info modal
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pet.address)}`;
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginLeft: 20,
          flexDirection: 'row',
          gap: 8,
        }}
      >
        {/* Badge for Nutrition */}
        <TouchableOpacity onPress={toggleNutritionModal}>
          <Badge
            value="About Nutrition"
            status="success"
            badgeStyle={styles.badge}
            textStyle={styles.badgeText}
          />
        </TouchableOpacity>
        {/* Badge for Health */}
        <TouchableOpacity onPress={toggleHealthModal}>
          <Badge
            value="About Health"
            status="success"
            badgeStyle={styles.badge}
            textStyle={styles.badgeText}
          />
        </TouchableOpacity>
        {/* Badge for Additional Info */}
        <TouchableOpacity onPress={toggleInfoModal}>
          <Badge
            value="More"
            status="success"
            badgeStyle={styles.badge}
            textStyle={styles.badgeText}
          />
        </TouchableOpacity>

        {/* Nutrition Modal */}
        <Modal visible={isNutritionModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{`About ${pet.name}'s Nutrition`}</Text>

              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Bad Nutrition Items */}
                <Text style={styles.sectionTitle}>{`Bad for ${pet.breed}s`}</Text>
                <View style={styles.badgeContainer}>
                  <Badge
                    value="Bones"
                    status="error"
                    badgeStyle={styles.badgeBad}
                    textStyle={styles.badgeTextBad}
                  />
                  <Badge
                    value="Chocolate"
                    status="error"
                    badgeStyle={styles.badgeBad}
                    textStyle={styles.badgeTextBad}
                  />
                  <Badge
                    value="Grapes"
                    status="error"
                    badgeStyle={styles.badgeBad}
                    textStyle={styles.badgeTextBad}
                  />
                </View>

                {/* Good Nutrition Items */}
                <Text style={styles.sectionTitle}>{`Good for ${pet.breed}s`}</Text>
                <View style={styles.badgeContainer}>
                  <Badge
                    value="Chicken"
                    status="success"
                    badgeStyle={styles.badgeGood}
                    textStyle={styles.badgeTextGood}
                  />
                  <Badge
                    value="Carrots"
                    status="success"
                    badgeStyle={styles.badgeGood}
                    textStyle={styles.badgeTextGood}
                  />
                  <Badge
                    value="Rice"
                    status="success"
                    badgeStyle={styles.badgeGood}
                    textStyle={styles.badgeTextGood}
                  />
                  <Badge
                    value="Cereals"
                    status="success"
                    badgeStyle={styles.badgeGood}
                    textStyle={styles.badgeTextGood}
                  />
                </View>
              </ScrollView>

              <Text
                style={styles.infoText}
              >{`For detailed information about ${pet.name}'s nutrition, contact the owner.`}</Text>
              <Button title="Close" onPress={toggleNutritionModal} color={Colors.PRIMARY} />
            </View>
          </View>
        </Modal>

        {/* Health Modal */}
        <Modal visible={isHealthModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{`About ${pet.name}'s Health`}</Text>

              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Health Info Items */}
                <Text style={styles.sectionTitle}>Health Status</Text>
                <View style={styles.badgeContainer}>
                  <Badge
                    value="Vaccinated"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                  <Badge
                    value="Neutered"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                  <Badge
                    value="No recored allergies"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                </View>
              </ScrollView>

              <Text
                style={styles.infoText}
              >{`For further health details about ${pet.name}, contact the owner.`}</Text>
              <Button title="Close" onPress={toggleHealthModal} color={Colors.PRIMARY} />
            </View>
          </View>
        </Modal>

        {/* Additional Info Modal */}
        <Modal visible={isInfoModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{`Additional Information about ${pet.name}`}</Text>

              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Additional Info Items */}
                <Text style={styles.sectionTitle}>Pet Documentation</Text>
                <View style={styles.badgeContainer}>
                  <Badge
                    value="International Passport"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                  <Badge
                    value="Microchipped"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                  <Badge
                    value="Neutered"
                    status="success"
                    badgeStyle={styles.badgeInfo}
                    textStyle={styles.badgeTextInfo}
                  />
                </View>
              </ScrollView>

              <Text
                style={styles.infoText}
              >{`For further details about ${pet.name}'s documentation, contact the owner.`}</Text>
              <Button title="Close" onPress={toggleInfoModal} color={Colors.PRIMARY} />
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
          marginHorizontal: 12,
          gap: 12,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#f7a7a6', // Light background color
          shadowColor: '#000', // Shadow color
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowOpacity: 0.2, // Shadow opacity
          shadowRadius: 4, // Shadow radius
          elevation: 4, // Shadow for Android
          activeOpacity: 0.8, // Click feedback
        }}
        onPress={openGoogleMaps}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            padding: 10,
            elevation: 4, // Shadow for Android
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
        >
          <Ionicons name="location-sharp" size={24} color={Colors.PRIMARY} />
        </View>
        <Text
          style={{
            fontFamily: 'poppinsMedium',
            fontSize: 18,
            color: '#333', // Darker text color for better contrast
            flex: 1,
          }}
        >
          {pet.address}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
          marginHorizontal: 12,
          gap: 12,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          shadowColor: '#000', // Shadow color
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowOpacity: 0.2, // Shadow opacity
          shadowRadius: 4, // Shadow radius
          elevation: 4, // Shadow for Android
          activeOpacity: 0.8, // Click feedback
        }}
      >
        <Image
          source={{ uri: pet.imageUrl }}
          style={{
            width: 65,
            height: 65,
            borderRadius: '100%',
          }}
        ></Image>
        <View>
          <Text>Damian</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = {
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    width: '85%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: Colors.PRIMARY,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: Colors.DARK_GRAY,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 10,
    gap: 8,
  },
  badge: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 12,
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
  },
  badgeBad: {
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTextBad: {
    color: 'white',
    fontSize: 14,
  },
  badgeGood: {
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTextGood: {
    color: 'white',
    fontSize: 14,
  },
  badgeInfo: {
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTextInfo: {
    color: 'white',
    fontSize: 14,
  },
  badgeWarning: {
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WARNING, // Assuming you have a warning color
  },
  badgeTextWarning: {
    color: 'white',
    fontSize: 14,
  },
  infoText: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
    color: Colors.TEXT_GRAY,
  },
  factsContainer: {
    marginVertical: 10,
  },
  fact: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.TEXT_GRAY,
  },
};
