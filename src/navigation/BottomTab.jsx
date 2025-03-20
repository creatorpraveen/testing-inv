import {Platform} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InvoiceScreen from '../screens/InvoiceScreen';
import EstimateScreen from '../screens/EstimateScreen';
import ClientScreen from '../screens/ClientScreen';
import ItemScreen from '../screens/ItemScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? 10 : 10,
          paddingBottom: Platform.OS === 'ios' ? 10 : 10,
          height: 95,
          borderTopWidth: 0.5,
          borderColor: theme.colors.placeholder,
          backgroundColor: theme.colors.background,
          position: 'absolute',
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.placeholder,
        headerShadowVisible: false,
        // tabBarShowLabel: false,
        tabBarLabelStyle: {fontSize: 14},
      })}>
      <Tab.Screen
        name="Invoices"
        component={InvoiceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-document-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Estimates"
        component={EstimateScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-cabinet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Clients"
        component={ClientScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="sitemap-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="dots-horizontal" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
