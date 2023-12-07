import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCreateComponent } from './calendario-create.component';

describe('CalendarioCreateComponent', () => {
  let component: CalendarioCreateComponent;
  let fixture: ComponentFixture<CalendarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
