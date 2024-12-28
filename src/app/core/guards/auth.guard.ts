import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  const token = localStorage.getItem('token');
  if(token != null && token != '' && service.verificaToken()){
    return true;
  }
  else {
    service.loggout();
    router.navigateByUrl("login");
    return false;
  }
};
