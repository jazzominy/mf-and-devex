import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxButtonModule],
  template: `
    <div style="padding: 20px;">
      <nav style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
        <dx-button 
          text="Home" 
          type="default"
          [disabled]="isCurrentRoute('/home')"
          (onClick)="navigateToHome()"
          style="margin-right: 10px;">
        </dx-button>
        
        <dx-button 
          text="Remote App" 
          type="success"
          [disabled]="isCurrentRoute('/remote')"
          (onClick)="navigateToRemote()">
        </dx-button>
      </nav>
      
      <div style="min-height: 400px; border: 1px solid #eee; padding: 20px; border-radius: 4px;">
        <router-outlet />
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToRemote() {
    this.router.navigate(['/remote']);
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }
}
