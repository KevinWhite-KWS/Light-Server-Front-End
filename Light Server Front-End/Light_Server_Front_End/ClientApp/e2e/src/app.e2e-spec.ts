// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Light_Server_Front_End', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Light_Server_Front_End');
  });
});
