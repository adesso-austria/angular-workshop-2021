import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';
import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';
import { RoundTripValidatorDirective } from './validation/round-trip-validator.directive';
import { AsyncFlightValidatorDirective } from './validation/async-flight-validator.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CityPipe, CityValidatorDirective, AsyncCityValidatorDirective, RoundTripValidatorDirective, AsyncFlightValidatorDirective],
  exports: [CityPipe, CityValidatorDirective, AsyncCityValidatorDirective, RoundTripValidatorDirective, AsyncFlightValidatorDirective]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
