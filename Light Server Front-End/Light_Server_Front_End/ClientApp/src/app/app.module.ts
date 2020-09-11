// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ToastaModule } from 'ngx-toasta';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { ThemeManager } from './services/theme-manager';
import { LocalStoreManager } from './services/local-store-manager.service';
import { AuthStorage } from './services/auth-storage';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BannerDemoComponent } from './components/controls/banner-demo.component';
import { TodoDemoComponent } from './components/controls/todo-demo.component';
import { StatisticsDemoComponent } from './components/controls/statistics-demo.component';
import { NotificationsViewerComponent } from './components/controls/notifications-viewer.component';
import { SearchBoxComponent } from './components/controls/search-box.component';
import { UserInfoComponent } from './components/controls/user-info.component';
import { UserPreferencesComponent } from './components/controls/user-preferences.component';
import { UsersManagementComponent } from './components/controls/users-management.component';
import { RolesManagementComponent } from './components/controls/roles-management.component';
import { RoleEditorComponent } from './components/controls/role-editor.component';


/* Angular Material */
import { A11yModule } from '@angular/cdk/a11y';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

/* LDL components */
import { ColorPickerModule } from 'ngx-color-picker';

import { InstructionChooserComponent } from './components/ldl/instructions-ui/instruction-chooser.component';
import { PixelComponent } from './components/ldl/pixel.component';
import { DurationComponent } from './components/ldl/duration.component';
import { ProgramComponent } from './components/ldl/program.component';
import { ProgramBlocklyComponent } from './components/ldl/program-blockly.component';
import { InstructionComponent } from './components/ldl/instructions-ui/instruction.component';

import { InstructionRepeatComponent } from './components/ldl/instructions-ui/instruction-repeat.component';

import { Instruction0ClearComponent } from './components/ldl/instructions-ui/instruction-0-clear.component';
import { Instruction1SolidComponent } from './components/ldl/instructions-ui/instruction-1-solid.component';
import { Instruction2PatternComponent } from './components/ldl/instructions-ui/instruction-2-pattern.component';
import { Instruction3SliderComponent } from './components/ldl/instructions-ui/instruction-3-slider.component';
import { Instruction4FadeComponent } from './components/ldl/instructions-ui/instruction-4-fade.component';
import { Instruction5StochasticComponent } from './components/ldl/instructions-ui/instruction-5-stochastic.component';
import { InstructionService } from './components/ldl/instruction-class/instruction-service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    NgxDatatableModule,
    OAuthModule.forRoot(),
    ToastaModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule,


    /* LDL */
    ColorPickerModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    SettingsComponent,
    UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
    RolesManagementComponent, RoleEditorComponent,
    AboutComponent,
    NotFoundComponent,
    NotificationsViewerComponent,
    SearchBoxComponent,
    StatisticsDemoComponent, TodoDemoComponent, BannerDemoComponent,
    EqualValidator,
    LastElementDirective,
    AutofocusDirective,
    BootstrapTabDirective,
    BootstrapToggleDirective,
    BootstrapSelectDirective,
    BootstrapDatepickerDirective,
    GroupByPipe,


    /* LDL */
    PixelComponent,
    DurationComponent,
    ProgramComponent,
    ProgramBlocklyComponent,
    InstructionChooserComponent,
    InstructionComponent,

    InstructionRepeatComponent,

    Instruction0ClearComponent,
    Instruction1SolidComponent,
    Instruction2PatternComponent,
    Instruction3SliderComponent,
    Instruction4FadeComponent,
    Instruction5StochasticComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: OAuthStorage, useClass: AuthStorage },
    AlertService,
    ThemeManager,
    ConfigurationService,
    AppTitleService,
    AppTranslationService,
    NotificationService,
    NotificationEndpoint,
    AccountService,
    AccountEndpoint,
    LocalStoreManager,

    /* LDL */
    InstructionService
  ],
  bootstrap: [AppComponent],

  exports: [
    A11yModule,

    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class AppModule {
}
