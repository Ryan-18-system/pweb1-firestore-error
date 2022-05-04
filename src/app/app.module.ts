import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {UsuarioModule} from './usuario/usuario.module';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from './shared/pipes/pipes.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {InterceptorModule} from './interceptor/interceptor.module';
// tslint:disable-next-line:import-spacing
import  {FirestoreModule} from './firestore/firestore.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        UsuarioModule,
        HttpClientModule,
        InterceptorModule,
        PipesModule,
        MatSnackBarModule,
        FirestoreModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
