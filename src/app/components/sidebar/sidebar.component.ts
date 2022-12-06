import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/manage-etudiants', title: 'Manage Etudiants',  icon:'person', class: '' },
    { path: '/manage-universities', title: 'Manage Universities',  icon:'content_paste', class: '' },
   // { path: '/manage-contracts', title: 'Manage Contracts',  icon:'library_books', class: '' },
   { path: '/manage-contrats', title: 'Manage Contracts',  icon:'library_books', class: '' },
    { path: '/manage-equipes', title: 'Manage Equipes',  icon:'bubble_chart', class: '' },
    { path: '/manage-departments', title: 'Manage Departments',  icon:'bubble_chart', class: '' }


   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
