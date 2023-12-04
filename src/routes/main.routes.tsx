import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'

export function MainRoutes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
