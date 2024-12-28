import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenubarModule,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  
  isLoggedIn$: Observable<boolean> | undefined;
  items: MenuItem[] | undefined;
  usuario: string = "";

  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.usuario = this.authService.getUsername() ?? "";
    this.items = [
      {
          label: 'Experiências',
          items: [
            {
                label: 'Minhas Experiências',
                icon: 'pi pi-bolt',
                command: () => {
                  this.router.navigate(["experiencias"])
                }
            },
            {
                label: 'Nova Experiência',
                icon:  'pi pi-server',
                command: () => {
                  this.router.navigate(["experiencias-criar"])
                }
            },
            {
              label: 'Projetos',
              icon:  'pi pi-server',
              items: [
                {
                  label: 'Meus Projetos',
                  icon: 'pi pi-bolt',
                  command: () => {
                    this.router.navigate(["projetos"])
                  }
                },
                {
                  label: 'Novo Projeto',
                  icon: 'pi pi-bolt',
                  command: () => {
                    this.router.navigate(["projetos-criar"])
                  }
                },    
              ]
            }
          ],
          
      },
      {
        label: 'Cursos',
        items: [
          {
              label: 'Meus Cursos',
              icon: 'pi pi-bolt',
              command: () => {
                this.router.navigate(["cursos"])
              }
          },
          {
              label: 'Novo Curso',
              icon:  'pi pi-server',
              command: () => {
                this.router.navigate(["cursos-criar"])
              }
          },
        ],
      },
      {
        label: 'Formações',
        items: [
          {
              label: 'Minhas Formações',
              icon: 'pi pi-bolt',
              command: () => {
                this.router.navigate(["formacoes"])
              }
          },
          {
              label: 'Nova Formação',
              icon:  'pi pi-server',
              command: () => {
                this.router.navigate(["formacoes-criar"])
              }
          },
        ],
      },
      {
          label: 'Currículos',
          // icon: 'pi pi-search',
          items: [
            {
              label: 'Meus Currículos',
              icon: 'pi pi-bolt',
              command: () => {
                this.router.navigate(["curriculos"])
              }
          },
          {
              label: 'Novo Currículo',
              icon:  'pi pi-server',
              command: () => {
                this.router.navigate(["curriculos-criar"])
              }
          },
          ]
      }
  ]
  }
}
