import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutocrudComponent } from './produtocrud.component';

describe('ProdutocrudComponent', () => {
  let component: ProdutocrudComponent;
  let fixture: ComponentFixture<ProdutocrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutocrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
