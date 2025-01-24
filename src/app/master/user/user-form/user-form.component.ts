import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\d{10}$')] // Validates 10-digit numbers
      ],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User Form Data:', this.userForm.value);
      // Add logic to send data to the backend
    } else {
      this.userForm.markAllAsTouched(); // Highlight all errors
    }
  }
}
