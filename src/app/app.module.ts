import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { BasicGetAPiService } from 'src/services/Api/basicGet.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BasicGetAPiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
