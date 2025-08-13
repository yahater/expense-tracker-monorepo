import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';   // needed for *ngFor and date pipe
import { UsersService } from '../../services/users.service';

@Component({
  standalone: true,               // make this component standalone
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule],        // import CommonModule for *ngFor
  providers: [DatePipe]           // if you use date pipes in template
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
