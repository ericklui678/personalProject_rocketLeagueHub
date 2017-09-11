import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// remember to import components
import { FollowingComponent } from './following/following.component';
import { NavsearchComponent } from './navsearch/navsearch.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: '', component: NavsearchComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'following', component: FollowingComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }