import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit {

  public sidebar_menu: boolean = false;

  public show: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  
  toggle() {
    this.sidebar_menu = !this.sidebar_menu;
    
    this.show = !this.show;
    return false;
  }
}

