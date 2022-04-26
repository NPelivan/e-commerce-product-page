import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  popupImage = false;

  image: any = '../../assets/images/image-product-1.jpg';

  firstImage() {
    this.image = '../../assets/images/image-product-1.jpg';
  }

  secondImage() {
    this.image = '../../assets/images/image-product-2.jpg';
  }

  thirdImage() {
    this.image = '../../assets/images/image-product-3.jpg';
  }

  fourthImage() {
    this.image = '../../assets/images/image-product-4.jpg';
  }

  nextImage() {
    if (this.image === '../../assets/images/image-product-1.jpg') {
      this.secondImage();
    } else if (this.image === '../../assets/images/image-product-2.jpg') {
      this.thirdImage();
    } else if (this.image === '../../assets/images/image-product-3.jpg') {
      this.fourthImage();
    } else if (this.image === '../../assets/images/image-product-4.jpg') {
      this.firstImage();
    }
  }

  previousImage() {
    if (this.image === '../../assets/images/image-product-4.jpg') {
      this.thirdImage();
    } else if (this.image === '../../assets/images/image-product-3.jpg') {
      this.secondImage();
    } else if (this.image === '../../assets/images/image-product-2.jpg') {
      this.firstImage();
    } else if (this.image === '../../assets/images/image-product-1.jpg') {
      this.fourthImage();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
