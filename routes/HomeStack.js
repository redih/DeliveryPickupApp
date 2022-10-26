import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home";
import LoginBox from '../screens/LoginBox';
//import LoginBox2 from '../screens/LoginBox2';



const screens = {
Login:{
        screen: LoginBox
},

Home: {
    screen: Home
}

}


const RootStack = createStackNavigator(screens);



const AppContainer = createAppContainer(RootStack)

export default AppContainer;













