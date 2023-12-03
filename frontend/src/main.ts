import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/template/header/header.component'
import { FooterComponent } from './app/components/template/footer/footer.component'
import { NavComponent } from './app/components/template/nav/nav.component'


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));  

 bootstrapApplication(NavComponent, appConfig)
  .catch((err) => console.error(err)); 
