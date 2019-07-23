import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7120c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default routes;
