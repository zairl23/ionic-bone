import {Page} from 'ionic-framework/ionic';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;//http://ionicframework.com/docs/v2/api/components/toolbar/Toolbar/
    this.tab2Root = Page2;//http://ionicframework.com/docs/v2/components/#buttons
    this.tab3Root = Page3;//http://ionicframework.com/docs/v2/api/components/action-sheet/ActionSheet/
  }
}