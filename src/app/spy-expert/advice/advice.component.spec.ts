import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice'
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import {provideRouter, Router} from '@angular/router';
import {By} from "@angular/platform-browser";

describe('AdviceComponent', () => {

  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let router: Router;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice'}}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    router = TestBed.inject(Router);

    fixture.componentRef.setInput('advice', expectedAdvice);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should display the advice', () => {
    const adviceElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(adviceElement.textContent).toContain('fake advice');
  });

  // Use spy
  it('should redirect to the hate page', () => {
    spyOn(router, 'navigate');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(router.navigate).toHaveBeenCalledWith(['/hate', 2]);
  });
});
