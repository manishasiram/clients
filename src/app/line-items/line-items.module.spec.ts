import { LineItemsModule } from './line-items.module';

describe('LineItemsModule', () => {
  let lineItemsModule: LineItemsModule;

  beforeEach(() => {
    lineItemsModule = new LineItemsModule();
  });

  it('should create an instance', () => {
    expect(lineItemsModule).toBeTruthy();
  });
});
