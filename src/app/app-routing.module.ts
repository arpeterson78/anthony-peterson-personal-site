import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GamingComponent } from './gaming/gaming.component';
import { TradingComponent } from './trading/trading.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-about-me', component: AboutMeComponent },
  { path: 'app-gaming', component: GamingComponent },
  { path: 'app-trading', component: TradingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
