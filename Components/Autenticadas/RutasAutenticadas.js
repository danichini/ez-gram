
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Add from './Add';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Follow from './Follow';
import Profile from './Profile';


const RutasAutenticadas = createMaterialBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#000',
  barStyle: { backgroundColor: '#000' },
});

export default createAppContainer(RutasAutenticadas);