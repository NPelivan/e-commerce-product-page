import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  cartPopup = false;
  navPopup = false;
  constructor(public appService: AppServiceService) {}

  ngOnInit(): void {}
}
