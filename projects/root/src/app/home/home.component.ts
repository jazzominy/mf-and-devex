import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DxButtonModule, DxTextBoxModule],
  template: `
    <div style="padding: 20px;">
      <h1>Root App with DevExtreme</h1>
      <p>This is the host application using Module Federation</p>
      
      Here is a text box (check console if it does not load)
      <dx-text-box 
        placeholder="Enter some text..."
        [showClearButton]="true"
        style="margin-bottom: 20px;">
      </dx-text-box>
      
      <div style="margin-top: 20px;">
        <dx-button 
          text="Back to Home" 
          type="default"
          (onClick)="goHome()"
          [visible]="false">
        </dx-button>
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }
}