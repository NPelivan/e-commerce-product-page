import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public appService: AppServiceService) {}

  ngOnInit(): void {}
}
