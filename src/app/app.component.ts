import { Component, AfterViewInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'mailto';

  ngAfterViewInit(): void {
    const checkCanOpenUrl = async () => {
      const { value } = await AppLauncher.canOpenUrl({ url: 'mailto:example@example.com' });
      alert('Can open url: ' + value);
    };
    
    const openMailClient = async () => {
      await AppLauncher.openUrl({ url: 'mailto:example@example.com' });
    };

    checkCanOpenUrl()
    openMailClient()
    this.sendMail()
  }

  sendMail() {
    var sLink = "mailto:test@test.com?subject=test";
    //window.open(sLink, "emailWindow");
    window.location.href = sLink;
  }
}
