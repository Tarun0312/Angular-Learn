import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchComponent } from './components/container/search/search.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductComponent } from './components/container/product-list/product/product.component';
import { FilterComponent } from './components/container/product-list/filter/filter.component';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { FeaturedProductComponent } from './components/container/featured-product/featured-product.component';
import { SetBackgroundDirective } from './components/container/CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './components/container/CustomDirectives/highlight.directive';
import { AppHoverDirective } from './components/container/CustomDirectives/app-hover.directive';
import { SampleDirDirective } from './components/container/CustomDirectives/sample-dir.directive';
import { LearnViewEncapComponent } from './components/container/learn-view-encap/learn-view-encap.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedProductComponent,
    SetBackgroundDirective,
    HighlightDirective,
    AppHoverDirective,
    SampleDirDirective,
    LearnViewEncapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
