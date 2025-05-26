
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBooksScreen from './screens/MyBooksScreen';
import ReadingListScreen from './screens/ReadingListScreen';
import ProfileScreen from './screens/ProfileScreen';


const BottomTabsNavigator = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <NavigationContainer>
        <BottomTabsNavigator.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#177F10FF",
          tabBarInactiveTintColor: "#CCC",
          sceneStyle: {
            paddingTop: 50,
            padding: 20
          },
          tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />
        }}>
          <BottomTabsNavigator.Screen
            name='ReadingList'
            component={ReadingListScreen}
            options={{
              title: 'Library',
              tabBarIcon: ({ focused }) =>
                <Ionicons color={focused ? "green" : "#CCC"}
                  name='book'
                  size={24} />
            }}
          />
          <BottomTabsNavigator.Screen
            name='MyBooks'
            component={MyBooksScreen}
            options={{
              title: 'My Books',
              tabBarIcon: ({ focused }) =>
                <Ionicons color={focused ? "green" : "#CCC"}
                  name='library'
                  size={24} />
            }} />
          <BottomTabsNavigator.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                <Ionicons color={focused ? "green" : "#CCC"}
                  name='person'
                  size={24} />
            }}
          />
        </BottomTabsNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

});
