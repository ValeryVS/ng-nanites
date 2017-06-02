import { browser, element, by } from 'protractor';

describe('NG Nanites E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should send message', () => {
    expect(() => element(by.css('button')).click()).not.toThrow();
  });

});
