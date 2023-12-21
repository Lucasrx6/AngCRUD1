import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolinaComponent } from './gasolina.component';

describe('GasolinaComponent', () => {
  let component: GasolinaComponent;
  let fixture: ComponentFixture<GasolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasolinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
