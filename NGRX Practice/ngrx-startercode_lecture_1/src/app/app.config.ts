import { ApplicationConfig, provideZoneChangeDetection, provideExperimentalZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { groceryReducer } from './store/reducers/grocery.reducer';
import { bucketReducer } from './store/reducers/bucket.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    // ⚙️ Angular zone change detection setup (performance optimize karta hai)
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 📦 Routing configuration
    provideRouter(routes),

    // 🗃️ NgRx Store setup (yahan reducers define hote hai)
    provideStore({
       groceries:groceryReducer,
       myBucket:bucketReducer
    }),

    // ⚡ NgRx Effects setup (API call aur async logic yahan likhte hai)
    provideEffects(),

    // 🛠️ NgRx Store DevTools config for debugging
    provideStoreDevtools({
      maxAge: 3,              // 🔁 Last 25 state changes yaad rakhega (undo/redo ke liye)
      logOnly: !isDevMode(),  // 🔒 Production mode mein sirf log karega, state ko edit nahi kar paoge
      autoPause: true,        // 🛑 Tab inactive hone par recording stop kar dega (performance ke liye)
      trace: false,           // 🐛 Agar true hota to har action ke stack trace deta (jyada detailed debug)
      traceLimit: 75,         // 🔍 Trace ki max limit — agar trace true hota to max 75 function trace dikhata
      connectInZone: true     // 🔄 Angular zone ke andar connect karta hai (change detection se linked)
    })
  ]
};
