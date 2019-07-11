import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { HomeComponent  } from './components/home/home.component';
import { ResultComponent  } from './components/result/result.component';

const APP_ROUTES: Routes = [
    { path : '',  component: HomeComponent },
    { path : 'result',  component: ResultComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
