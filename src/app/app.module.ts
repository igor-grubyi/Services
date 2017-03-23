import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VisualComponent } from './visual.component/visual.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './directivs/highlight.directive';

import { DataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    VisualComponent,
    UsersComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
