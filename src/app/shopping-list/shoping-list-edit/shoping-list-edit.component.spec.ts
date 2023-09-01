import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListEditComponent } from './shoping-list-edit.component';

describe('ShopingListEditComponent', () => {
  let component: ShopingListEditComponent;
  let fixture: ComponentFixture<ShopingListEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingListEditComponent]
    });
    fixture = TestBed.createComponent(ShopingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
