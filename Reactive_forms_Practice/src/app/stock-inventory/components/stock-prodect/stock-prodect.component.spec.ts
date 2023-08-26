import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProdectComponent } from './stock-prodect.component';

describe('StockProdectComponent', () => {
  let component: StockProdectComponent;
  let fixture: ComponentFixture<StockProdectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockProdectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
