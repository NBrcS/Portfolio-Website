import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CourseHotbarComponent } from './component/course-hotbar/course-hotbar.component';
import { ProjectHotbarComponent } from './component/project-hotbar/project-hotbar.component';
import { CourseCardComponent } from './component/course-card/course-card.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { ImageSliderComponent } from './utils/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CourseHotbarComponent,
    ProjectHotbarComponent,
    CourseCardComponent,
    ProjectCardComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
