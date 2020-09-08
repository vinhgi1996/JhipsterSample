import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterSampleSharedModule } from 'app/shared/shared.module';
import { JHipsterSampleCoreModule } from 'app/core/core.module';
import { JHipsterSampleAppRoutingModule } from './app-routing.module';
import { JHipsterSampleHomeModule } from './home/home.module';
import { JHipsterSampleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterSampleSharedModule,
    JHipsterSampleCoreModule,
    JHipsterSampleHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterSampleEntityModule,
    JHipsterSampleAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JHipsterSampleAppModule {}
