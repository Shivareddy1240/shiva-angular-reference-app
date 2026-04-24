import { TestBed } from '@angular/core/testing';
import { demoGuard } from './demo.guard';
describe('demoGuard', () => { it('allows demo route', () => { TestBed.runInInjectionContext(() => { expect(demoGuard({} as never, {} as never)).toBeTrue(); }); }); });
