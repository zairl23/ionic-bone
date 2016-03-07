import {Platform, Page, ActionSheet, NavController} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  // provide Angular with metadata about things it should inject in the constructor
  static get parameters() {
    return [[Platform], [NavController]];
  }
  constructor(platform, nav) {
    this.platform = platform;
    this.nav = nav;
  }
  openMenu() {
    let buttonHandler = (index) => {
      console.log('Button clicked', index);
      if (index == 1) { return false; }
      return true;
    }

    if (this.platform.is('android')) {
      var androidSheet = {
        title: 'Albums',
        buttons: [
          {
            text: 'Delete',
            style: 'destructive',
            icon: 'md-trash',
            handler: () => {
              console.log('Destructive clicked');
            }
          },
          { text: 'Share',
            handler: buttonHandler,
            icon: 'share'
          },
          { text: 'Play',
            handler: buttonHandler,
            icon: 'arrow-dropright-circle'
          },
          { text: 'Favorite',
            handler: buttonHandler,
            icon: 'md-heart-outline'
          },
          {
            text: 'Cancel',
            style: 'cancel',
            icon: 'md-close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ],
      };
    }

  let actionSheet = ActionSheet.create({
    buttons: [
      {
        text: 'Delete',
        style: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },
      {
        text: 'Share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Play',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancel',
        style: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  this.nav.present(actionSheet);
  }

  onPageWillLeave() {
  actionSheet && actionSheet.dismiss();
  }
}
