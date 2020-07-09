import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinalesComponent } from './finales/finales.component';
import { AdicionalesComponent } from './finales/adicionales/adicionales.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from '@laranda/lib-sysutil';
import { SysutilModule } from '@laranda/lib-sysutil';

@NgModule({
  declarations: [
    AppComponent,
    FinalesComponent,
    AdicionalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SysutilModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
