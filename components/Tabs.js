import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Home';
import About from '../screens/About';
import Search from '../screens/Search';
import { StyleSheet } from 'react-native';
import Details from './Details';


function Tabs() {
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const SearchStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Search Page" component={Search}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );

    const HomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelPosition: 'below-icon',
                tabBarActiveTintColor: '#2ebf91',
                tabBarStyle: {
                    height: 64,
                    padding: 8,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen name="Homepage" component={HomeStack}
                
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarLabelStyle: {
                        marginBottom: 8
                    }
                }}
            />
            <Tab.Screen name="Search" component={SearchStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" color={color} size={size} />
                    ),
                    tabBarLabelStyle: {
                        marginBottom: 8
                    }
                }}
            />
            <Tab.Screen name="About" component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" color={color} size={size} />
                    ),
                    tabBarLabelStyle: {
                        marginBottom: 8
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        //margin: 16,
    }
})

export default Tabs;