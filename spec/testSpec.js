/*global jasmine, beforeEach, it, describe*/
var webdriver = require('selenium-webdriver'),
  until = webdriver.until,
  By = webdriver.By;

describe('Testing the test', function () {
  var driver;

  beforeEach(function () {
    driver = new webdriver.Builder().forBrowser('chrome').build();
  });

  it('should get the title of a page', function (done) {
    driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000).then(function () {
      done();
    });
  });
});
