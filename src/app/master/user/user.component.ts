import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // Define columns for the table
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  // Example user data
  users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];

  constructor(private router : Router) {}

  ngOnInit(){}

  viewUser(id: number){
    alert(`Viewing details for user ID: ${id}`);
  }

  editUser(id: number): void {
    alert(`Editing user ID: ${id}`);
  }

  addUser(){
    this.router.navigate(['user-add']);
  }

  deleteUser(id: number){
    const confirmed = confirm(`Are you sure you want to delete user ID: ${id}?`);
    if (confirmed) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}
