
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HomeService } from '../services/home.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  selectedVideo: File | undefined;

  constructor(public home: HomeService,) {}

  ngOnInit(): void {
    this.home.GetAllHome();
    this.home.GetAllFeatures();
    this.home.GetAllAbout();
    this.home.GetAllTeammembers();
    this.home.Get4topfeedback();
  }



  onFileSelected(event: any) {
    this.selectedVideo = event.target.files[0];
  }


  ngAfterViewInit(): void {
    this.initializeSlider('.swiper-container'); // Initialize the first slider
    this.initializeCategorySlider('.single-row-slider'); // Initialize the category slider
  }

  
 

 
  private initializeSlider(selector: string): void {
    const swiper = new Swiper(selector, {
      // Swiper options for the first slider
    });
  }
 
  private initializeCategorySlider(selector: string): void {
    const categorySwiper = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: `${selector} .single-row-arrow-next`,
        prevEl: `${selector} .single-row-arrow-prev`
      }
    });
  }


}