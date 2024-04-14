import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-3ffad","appId":"1:41021622700:web:01cd710e735ee1b2a65209","storageBucket":"dabubble-3ffad.appspot.com","apiKey":"AIzaSyA85XBxthQeX9fRr-Z_KTDKJ8WeGM-njNA","authDomain":"dabubble-3ffad.firebaseapp.com","messagingSenderId":"41021622700"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
