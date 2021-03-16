import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps62215057Navigator from '../features/Maps62215057/navigator';
import Maps63215056Navigator from '../features/Maps63215056/navigator';
import Maps64215055Navigator from '../features/Maps64215055/navigator';
import Maps65215054Navigator from '../features/Maps65215054/navigator';
import BlankScreen59215053Navigator from '../features/BlankScreen59215053/navigator';
import UserProfile215052Navigator from '../features/UserProfile215052/navigator';
import Maps215033Navigator from '../features/Maps215033/navigator';
import Settings215011Navigator from '../features/Settings215011/navigator';
import Settings214996Navigator from '../features/Settings214996/navigator';
import NotificationList214995Navigator from '../features/NotificationList214995/navigator';
import Maps214994Navigator from '../features/Maps214994/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps62215057: { screen: Maps62215057Navigator },
Maps63215056: { screen: Maps63215056Navigator },
Maps64215055: { screen: Maps64215055Navigator },
Maps65215054: { screen: Maps65215054Navigator },
BlankScreen59215053: { screen: BlankScreen59215053Navigator },
UserProfile215052: { screen: UserProfile215052Navigator },
Maps215033: { screen: Maps215033Navigator },
Settings215011: { screen: Settings215011Navigator },
Settings214996: { screen: Settings214996Navigator },
NotificationList214995: { screen: NotificationList214995Navigator },
Maps214994: { screen: Maps214994Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
