import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './if/if.component';
import { LighteningComponent } from './lightening/lightening.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { ReversePipe } from './reverse.pipe';
import { SearchPipe } from './search.pipe';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { HttpClientModule } from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    BindingsComponent,
    IfComponent,
    LighteningComponent,
    UsePipesComponent,
    ReversePipe,
    SearchPipe,
    UseSvcComponent,
    UseHttpComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
