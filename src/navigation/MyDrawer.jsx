import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import BottomTab from './BottomTab';
import {wp} from '../utils/Constants';
import CollabScreen from '../features/drawer/CollabScreen';
import ProfileScreen from '../features/tabs/ProfileScreen';
import SettingsScreen from '../features/drawer/SettingsScreen';
import LogoDark from '../assets/images/logo_dark.png';
import LogoLight from '../assets/images/logo_light.png';

const Drawer = createDrawerNavigator();

const dummyUser = {
  name: 'Haizy D’souza',
  username: '@haizydaizy',
  followers: '1.2K',
  following: 37,
  profile: require('../assets/images/profile.webp'),
};

const CustomDrawer = props => {
  const theme = useTheme();
  const mode = useColorScheme();
  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <View style={styles.userMeta}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={styles.profileContainer}>
            <Image source={dummyUser.profile} style={styles.profile} />
            <View style={styles.userData}>
              <TouchableOpacity
                onPress={() => console.log('show followers sheet')}>
                <Text style={[styles.name, {color: theme.colors.text}]}>
                  {dummyUser.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('show following sheet')}>
                <Text style={[styles.username, {color: theme.colors.text}]}>
                  {dummyUser.username}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={styles.userFollow}>
            <TouchableOpacity
              onPress={() => console.log('show following sheet')}>
              <Text
                style={[
                  styles.userFollowText,
                  {color: theme.colors.placeholder_text},
                ]}>
                {dummyUser.followers} Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('show following sheet')}>
              <Text
                style={[
                  styles.userFollowText,
                  {color: theme.colors.placeholder_text},
                ]}>
                {dummyUser.following} Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.drawerItem, {marginTop: 16}]}
          onPress={() => props.navigation.navigate('Collab')}>
          <Icon name="at-outline" size={28} color={theme.colors.text} />
          <Text style={[styles.drawerText, {color: theme.colors.text}]}>
            Collab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('BottomTab')}>
          <Icon name="bookmark-outline" size={28} color={theme.colors.text} />
          <Text style={[styles.drawerText, {color: theme.colors.text}]}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={28} color={theme.colors.text} />
          <Text style={[styles.drawerText, {color: theme.colors.text}]}>
            Settings
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <View style={styles.brand}>
        <Image
          source={mode === 'dark' ? LogoDark : LogoLight}
          style={styles.logo}
        />
      </View>
    </>
  );
};

const MyDrawer = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          borderRadius: -20,
          backgroundColor: theme.colors.background,
          width: wp(75),
        },
        sceneContainerStyle: {
          backgroundColor: '#fff',
          borderRadius: 0,
        },
      }}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Collab" component={CollabScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    flex: 1,
  },
  userMeta: {
    gap: 4,
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    alignItems: 'center',
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  userData: {},
  name: {
    fontSize: 18,
    fontFamily: 'Commissioner-Regular',
  },
  username: {
    fontSize: 16,
    fontFamily: 'Commissioner-Regular',
  },
  userFollow: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
  },
  userFollowText: {
    fontSize: 16,
    fontFamily: 'Commissioner-Regular',
    fontWeight: 500,
  },
  drawerItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  drawerText: {
    fontSize: 16,
    fontFamily: 'Commissioner-Regular',
  },
  brand: {
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
  logo: {
    width: wp(30),
    resizeMode: 'contain',
  },
});

export default MyDrawer;
