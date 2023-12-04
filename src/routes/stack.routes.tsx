import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '@screens/Profile'
import { Login } from '@screens/Login'
import { Home } from '@screens/Home'

export type StackRouteParamList = {
  Home: undefined
  Login: undefined
  Profile: undefined
}

const Stack = createNativeStackNavigator<StackRouteParamList>()

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
