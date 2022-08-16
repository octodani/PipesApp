import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el local de la app
import localES from '@angular/common/locales/es';
import localIT from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localES );
registerLocaleData( localIT );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
