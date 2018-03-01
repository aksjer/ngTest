import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookService } from './book-service.service';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { BookResolverService } from './book-resolver.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { AuthorizationDirective } from './authorization.directive';
import { AuthorizationService } from './authorization.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorizationDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    JwtInterceptorService,
    BookService,
    BookResolverService,
    { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptorService, multi: true },
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
