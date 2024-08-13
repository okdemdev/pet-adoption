import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  useFonts({
    poppins: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppinsMedium: require('./../assets/fonts/Poppins-Medium.ttf'),
    poppinsBold: require('./../assets/fonts/Poppins-Bold.ttf'),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
