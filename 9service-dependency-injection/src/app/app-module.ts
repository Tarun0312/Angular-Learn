import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './header/home/home';
import { Sidebar } from './header/home/sidebar/sidebar';
import { Hero } from './header/home/hero/hero';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    Sidebar,
    Hero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
