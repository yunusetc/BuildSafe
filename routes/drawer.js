import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import drawerMenu from './drawerMenu';

import HomeStack from './homeStack';
import BossStack from './bossStack';
import AboutStack from './aboutStack';
import JobsStack from './jobsStack';
import HealthStack from './healthStack';
import StokStack from './stokStack';
import { Form } from 'formik';



const RootDrawerNavigator = createDrawerNavigator({
      AnaSayfa: {
        screen: HomeStack
      },
      Kontrol: {
        screen: AboutStack 
      },
      Mudur: {
        screen: BossStack
      },
      Durum: {
        screen: JobsStack
      },
      Stok: {
        screen: StokStack
      },
      Health: {
        screen: HealthStack
      },
      },{
          drawerWidth:230,
          contentComponent : drawerMenu

});


export default createAppContainer(RootDrawerNavigator);