import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonRoutes } from 'src/global.routes';
import { SessionsPage } from './sessions';

const routes: Routes = [
  {
    path: '',
    component: SessionsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsPageRoutingModule {}
