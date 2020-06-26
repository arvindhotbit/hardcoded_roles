import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';

import { InterlistManagementComponent } from './interlist-management/interlist-management.component';
import { InternallistDefinationComponent } from './interlist-management/internallist-defination/internallist-defination.component';
import { InternallistWatchlistComponent } from './interlist-management/internallist-watchlist/internallist-watchlist.component';
import { AppRoutingModule } from './app-routing.module';
import { BlacklistBicComponent } from './blacklist-bic/blacklist-bic.component';
import { NeutralWordsComponent } from './neutral-words/neutral-words.component';
import { SanctionedCitiesComponent } from './sanctioned-cities/sanctioned-cities.component';
import { HighRiskCountriesComponent } from './high-risk-countries/high-risk-countries.component';
import { ZoneVsGlobalComponent } from './zone-vs-global/zone-vs-global.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateGuard } from './activate.guard';
import { MatchScoreComponent } from './match-score/match-score.component';
import { ExPaymentScreeningComponent } from './ex-payment-screening/ex-payment-screening.component';
import { DeleteGoodGuyComponent } from './delete-good-guy/delete-good-guy.component';
import { NameScreeningFieldsComponent } from './name-screening-fields/name-screening-fields.component';
import { PaymentScreeningForEPHComponent } from './payment-screening-for-eph/payment-screening-for-eph.component';
import { PaymentScreeningForAdkComponent } from './payment-screening-for-adk/payment-screening-for-adk.component';
import { CaseListingComponent } from './case-listing/case-listing.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { FilterPipe } from './filter.pipe';
import { AuthserviceService } from './auth/authservice.service';
import { UserDirective } from './directive/user.directive';
import { UserRoleDirective } from './directive/user-role.directive';
import { CheckerDirective } from './directive/checker.directive';
import { MakersDirective } from './directive/makers.directive';
import { TestDirective } from './directive/test.directive';
@NgModule({
  declarations: [
    AppComponent,
    InterlistManagementComponent,
    InternallistDefinationComponent,
    InternallistWatchlistComponent,
    BlacklistBicComponent,
    NeutralWordsComponent,
    SanctionedCitiesComponent,
    HighRiskCountriesComponent,
    ZoneVsGlobalComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MatchScoreComponent,
    ExPaymentScreeningComponent,
    DeleteGoodGuyComponent,
    NameScreeningFieldsComponent,
    PaymentScreeningForEPHComponent,
    PaymentScreeningForAdkComponent,
    CaseListingComponent,
    CaseDetailComponent,
    FilterPipe,
    UserDirective,
    UserRoleDirective,
    CheckerDirective,
    MakersDirective,
    TestDirective,

  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ActivateGuard,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
