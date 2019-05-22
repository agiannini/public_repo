import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { DataComponent } from './data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { FormsModule } from '@angular/forms';

// Allows app to reload the page
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Used by RouterModule in imports
const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'contact/:id', component: ContactinfoComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TableComponent,
    DataComponent,
    ContactinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,          // Allows access to the REST API
    FormsModule,
    RouterModule.forRoot(     // Handles routing according to specifications
      routes
    )
  ],

  // Allows app to reload on the same page
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
