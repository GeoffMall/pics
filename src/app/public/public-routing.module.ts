import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { SkateboardComponent } from './skateboard/skateboard.component';
import { MathComponent } from './math/math.component';
import { CryptoComponent } from './crypto/crypto.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent, children:
    [
      {path: 'skateboard', component: SkateboardComponent},
      {path: 'math', component: MathComponent},
      {path: 'crypto', component: CryptoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
