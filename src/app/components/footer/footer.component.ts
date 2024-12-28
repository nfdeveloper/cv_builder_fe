import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private router: Router, private authService: AuthService){ }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}
