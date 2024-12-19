import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingTableComponent } from './components/pricing-table/pricing-table.component';
import { FormsModule } from '@angular/forms';
import { PricingButtonComponent } from './components/pricing-button/pricing-button.component';
import { PricingToggleComponent } from './components/pricing-toggle/pricing-toggle.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PricingTableComponent,
    PricingButtonComponent,
    PricingToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
