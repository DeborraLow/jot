import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryEmojisComponent } from './entry-emojis.component';

describe('EntryEmojisComponent', () => {
  let component: EntryEmojisComponent;
  let fixture: ComponentFixture<EntryEmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryEmojisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
