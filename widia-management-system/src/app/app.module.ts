import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavBrandComponent } from './components/nav-brand/nav-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
// import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ToasterComponent } from './components/toaster/toaster/toaster.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { QRCodeModule } from 'angular2-qrcode';
import { QrgenComponent } from './components/pages/qrgen/qrgen.component';
import { PageQrgenComponent } from './pages/page-qrgen/page-qrgen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBrandComponent,
    DashboardPageComponent,
    UserPageComponent,
    ProductListComponent,
    ProductDetailComponent,
    // ProductEditComponent,
    ProductFormComponent,
    ToasterComponent,
    UserListComponent,
    UserFormComponent,
    QrgenComponent,
    PageQrgenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
