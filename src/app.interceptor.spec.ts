import { LoggingInterceptor } from './app.interceptor';

describe('AppInterceptor', () => {
  it('should be defined', () => {
    expect(new LoggingInterceptor()).toBeDefined();
  });
});
