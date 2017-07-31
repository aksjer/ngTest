import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookResolverService } from './book-resolver.service';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, resolve: {
      books: BookResolverService
    }
  }
];
