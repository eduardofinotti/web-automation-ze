/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type login_pagePage = typeof import('./pages/login_page.js');
type home_pagePage = typeof import('./pages/home_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, login_pagePage: login_pagePage, home_pagePage: home_pagePage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
