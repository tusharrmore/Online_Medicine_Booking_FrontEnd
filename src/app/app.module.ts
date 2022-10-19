import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MedicinepageComponent } from './medicinepage/medicinepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterUserComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    MedicinepageComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GooglePayButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
