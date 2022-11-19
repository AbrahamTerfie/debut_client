import {StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NowPlaying, Lessons, LikedSongs, Stats} from './Screens/Home';
import Setting from './Screens/Utils/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Themes} from './Styles/index';
import {Provider} from 'react-redux';
import store from './Store/Store';
import {useSelector} from 'react-redux';
import {RootState} from './Store/RootReducer';

function TabIcon({
  name,
  color,
  size,
}: {
  name?: any;
  color?: string;
  size?: number;
}) {
  return <Ionicons name={name} color={color} size={size} />;
}

const BottomTab = createBottomTabNavigator();

function AppContainer() {
  const theme = useSelector((state: RootState) => state.uiStore);
  const {normalize} = Themes;
  return (
    <BottomTab.Navigator
      initialRouteName="Now Playing"
      screenOptions={{
        tabBarActiveTintColor: theme.secondary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: {backgroundColor: theme.background},
        tabBarIconStyle: {fontSize: normalize(20)},
        headerStyle: {backgroundColor: theme.background},
        headerTitleStyle: {color: theme.text},
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons
              name="cloudy-night-outline"
              size={normalize(15)}
              color={theme.text}
              style={{marginRight: normalize(15)}}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <BottomTab.Screen
        name="Now_Playing"
        component={NowPlaying}
        options={{
          tabBarIcon: ({color, size}) =>
            TabIcon({name: 'musical-note', color, size}),
          tabBarLabel: 'Now Playing',
          headerTitle: 'Now Playing',
        }}
      />
      <BottomTab.Screen
        name="Lessons"
        component={Lessons}
        options={{
          tabBarIcon: ({color, size}) =>
            TabIcon({name: 'book-outline', color, size}),
        }}
      />
      <BottomTab.Screen
        name="Liked_Songs"
        component={LikedSongs}
        options={{
          tabBarIcon: ({color, size}) =>
            TabIcon({name: 'heart-outline', color, size}),
          tabBarLabel: 'Liked Songs',
          headerTitle: 'Liked Songs',
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({color, size}) =>
            TabIcon({name: 'stats-chart-outline', color, size}),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) =>
            TabIcon({name: 'settings-outline', color, size}),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
