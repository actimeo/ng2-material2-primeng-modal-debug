import { Component } from '@angular/core';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { Dialog } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES, Dialog]
})
export class AppComponent {
  displayInside: boolean = false;
  displayOutside: boolean = false;

  showDialogInside() {
    this.displayInside = true;
  }

  showDialogOutside() {
    this.displayOutside = true;
  }
}
