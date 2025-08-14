// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], // Added RouterLink here
  template: `
    <div class="app-container">
      <nav class="navbar">
        <h1>Budget Tracker</h1>
        <ul class="nav-links">
          <li><a routerLink="/users">Users</a></li>
          <li><a routerLink="/categories">Categories</a></li>
          <li><a routerLink="/expenses">Expenses</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .navbar {
      background: #2563eb;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .navbar h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      transition: background-color 0.2s;
      cursor: pointer;
    }
    
    .nav-links a:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    
    .nav-links a.active {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .main-content {
      flex: 1;
      padding: 2rem;
      background: #f8fafc;
    }
  `]
})
export class AppComponent {
  title = 'Budget Tracker';
}