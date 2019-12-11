// / <reference types='codeceptjs' />
type steps_file = typeof import('../../feature/js/step_file.js');
type adminPage = typeof import('../../feature/js/pages/admin.js');
type homePage = typeof import('../../feature/home/home');

declare namespace CodeceptJS {
  interface SupportObject {
    I: CodeceptJS.I;
    adminPage: adminPage;
    homePage: homePage;
  }
  interface CallbackOrder {
    [0]: CodeceptJS.I;
    [1]: adminPage;
    [2]: homePage;
  }
  interface Methods extends CodeceptJS.Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
