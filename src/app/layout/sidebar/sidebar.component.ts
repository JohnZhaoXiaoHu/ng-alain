import { Component } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd";
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector   : 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.scss']
})
export class SidebarComponent {
    constructor(public settings: SettingsService, public msgSrv: NzMessageService) {
    }
}
