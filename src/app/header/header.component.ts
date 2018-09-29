import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() { 
      $(window).scroll(function() {
        if($(this).scrollTop() > 180) { 
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
      });
    });
  }
}
