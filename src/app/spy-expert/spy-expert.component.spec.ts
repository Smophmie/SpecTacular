import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AdvicesService } from './core/services/advices/advices.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {SpyExpertComponent} from "./spy-expert.component";
import {Advice} from "./core/models/advice";

describe('SpyExpertComponent', () => {
  let adviceService: AdvicesService;
  let httpTesting: HttpTestingController;
  let fixture: ComponentFixture<SpyExpertComponent>;
  let component: SpyExpertComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    adviceService = TestBed.inject(AdvicesService);
    fixture = TestBed.createComponent(SpyExpertComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTesting.verify();
  });
  it('should return expected advice (httpclient called once)', () => {
    const mockAdvice: Advice = { slip: { id: 1, advice: 'Test advice' } };

    fixture.detectChanges();

    const req = httpTesting.expectOne('https://api.adviceslip.com/advice');
    expect(req.request.method).toBe('GET');

    req.flush(mockAdvice);

    expect(component.advice).toEqual(mockAdvice);
  });

  it('should properly handle request error', () => {
  });
});
