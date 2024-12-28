import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Login } from '../../core/models/usuario/login.model';
import { AuthService } from '../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{ 

  loginForms: any = FormGroup;
  login: Login = new Login();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  entrar(){
    this.login = this.loginForms.value;

    this.authService.login(this.login).subscribe({
      next: (res) => {
        this.authService.setDados(res);
        this.router.navigate([""]);
      },
      error: (error) => this.messageService.add({
        severity: 'error',
        summary: 'Login erro',
        detail: 'Usuário e/ou senha incorretos.'
      })
    })
  }

}
