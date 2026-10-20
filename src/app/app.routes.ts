import { AuthComponent } from './layout/auth.component/auth.component';
import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank.component/blank.component';
import { blankGuard } from './core/guards/blank/blank-guard';
import { authGuard } from './core/guards/auth/auth-guard';


export const routes: Routes = [
  {path: "", component: AuthComponent, canActivate: [blankGuard], children: [
    {path: "login", loadComponent: () => import("./pages/login.component/login.component").then(c => c.LoginComponent), title: "Login"},
    {path: "signup", loadComponent: () => import("./pages/signup.component/signup.component").then(c => c.SignupComponent), title: "Sign Up"},
    {path: "forgot-password", loadComponent: () => import("./pages/forgot-password.component/forgot-password.component").then(c => c.ForgotPasswordComponent), title: "Forgot Password"},
    {path: '', redirectTo: "login", pathMatch: "full"}
  ]},

  {path: '', component: BlankComponent, canActivate: [authGuard], children: [
    {path: "home", loadComponent: () => import("./pages/home.component/home.component").then(c => c.HomeComponent), title: "Home"},
    {path: "details", loadComponent: () => import("./pages/details.component/details.component").then(c => c.DetailsComponent), title: "Details"},
    {path: 'categories', loadComponent: () => import("./pages/categories.component/categories.component").then(c => c.CategoriesComponent), title: "Categories"},
    {path: 'cart', loadComponent: () => import("./pages/cart.component/cart.component").then(c => c.CartComponent), title: "Cart"},
    {path: "brands", loadComponent: () => import("./pages/brands.component/brands.component").then(c => c.BrandsComponent), title: "Brands"},
    {path: "checkout", loadComponent: () => import("./pages/checkout.component/checkout.component").then(c => c.CheckoutComponent), title: "Checkout"},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: '**', loadComponent: () => import("./pages/notfound.component/notfound.component").then(c => c.NotfoundComponent), title: "Not Found"}
  ]},

];
