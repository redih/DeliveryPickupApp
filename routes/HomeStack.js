import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTab from '../components/home/BottomTab';
import Account from '../screens/Account';
import Home from "../screens/Home";
import LoginBox from '../screens/LoginBox';

//import LoginBox2 from '../screens/LoginBox2';



const screens = {
Login:{
        screen: LoginBox
},

Home: {
    screen: Home
},

Account:{
    screen: Account


},



}


const RootStack = createStackNavigator(screens);



const AppContainer = createAppContainer(RootStack)

export default AppContainer;













