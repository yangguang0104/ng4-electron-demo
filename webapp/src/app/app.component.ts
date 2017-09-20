import { Component } from '@angular/core';

import { remote } from 'electron'

const dialog = remote.dialog

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectFolder() {
    dialog.showOpenDialog({
      title: 'Select a folder',
      properties: ["openDirectory"],
    }, (folderPaths) => {
      if (typeof folderPaths === 'undefined') {
        console.log('No folder selected');
        return;
      } else {
        console.log(folderPaths)
      }
    })
  }
}
