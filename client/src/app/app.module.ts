import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { SetService } from './services/set.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { SpinnerService } from './services/spinner.service';
import { PopupService } from './services/popup.service';
import { ReviewService } from './services/review.service';
import { UserService } from './services/user.service';
import { PageTitleStrategy } from './services/pageTitleStrategy.service';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SetModule } from './set/set.module';
import { ReviewModule } from './review/review.module';

import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule,
    AuthModule,
    SetModule,
    ReviewModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    SetService,
    AuthService,
    TokenService,
    SpinnerService,
    PopupService,
    ReviewService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
