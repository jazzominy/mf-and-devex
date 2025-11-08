import { Component } from '@angular/core';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-remote',
  standalone: true,
  imports: [DxButtonModule, DxDataGridModule],
  template: `
    <div style="padding: 20px;">
      <h2>Remote App with DevExtreme</h2>
      
      Here is a grid (check console if it does not load)
      <dx-data-grid 
        [dataSource]="employees"
        [columns]="['ID', 'FirstName', 'LastName', 'Position']"
        [showBorders]="true"
        style="margin-top: 20px;">
      </dx-data-grid>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remote';
  
  employees = [
    { ID: 1, FirstName: 'John', LastName: 'Heart', Position: 'CEO' },
    { ID: 2, FirstName: 'Olivia', LastName: 'Peyton', Position: 'Sales Assistant' },
    { ID: 3, FirstName: 'Robert', LastName: 'Reagan', Position: 'CMO' },
  ];

  onButtonClick() {
    console.log('DevExtreme button clicked in remote app!');
  }
}
