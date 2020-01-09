import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { StoreComponent } from './store/store.component';
import { MenuComponent } from './menu/menu.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRepositoryService } from './product-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    StoreComponent,
    MenuComponent,
    ProductFormComponent,
    EditProductDialogComponent  
  ],
  entryComponents: [
    EditProductDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
