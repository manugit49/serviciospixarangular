import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { ServicePersonajes } from './services/service.personajes';
import { provideHttpClient } from '@angular/common/http';
import { CreateComponent } from './components/create-component/create-component';
import { DeleteComponent } from './components/delete-component/delete-component';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, CreateComponent, DeleteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServicePersonajes, provideHttpClient(), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
