import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMarketComponent } from './search-market.component';

describe('SearchMarketComponent', () => {
  let component: SearchMarketComponent;
  let fixture: ComponentFixture<SearchMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
