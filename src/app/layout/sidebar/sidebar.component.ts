import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarSections = [
    {
      title: 'Main',
      items: [
        {label: 'Companies', icon: 'bi-briefcase-fill', link: '/companies'},
        {label: 'Contacts', icon: 'bi-people-fill', link: '/contacts'}
      ]
    },
    {
      title: 'Sales',
      items: [
        {label: 'Leads', icon: 'bi-person-check-fill', link: '#'},
        {label: 'Deals', icon: 'bi-wallet-fill', link: '#'}
      ]
    },
    {
      title: 'Support',
      items: [
        {label: 'Feedback', icon: 'bi-grid-3x3-gap-fill', link: '#'},
        {label: 'Help', icon: 'bi-question-circle-fill', link: '#'}
      ]
    }
  ];
}
