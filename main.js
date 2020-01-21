(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh;\">\n  <mat-toolbar color=\"primary\" class=\"app-toolbar\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span>Hospital Management System</span>\n      <span class=\"example-spacer\"></span>\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n       <!-- <a href=\"#\" mat-button>\n          <mat-icon>notifications</mat-icon>\n          Notifications\n        </a>\n        <a href=\"#\" mat-button>\n          <mat-icon>message</mat-icon>\n          Messages\n        </a>-->\n        \n        <a routerLink=\"/register\"  mat-button>\n          <mat-icon>account_box</mat-icon>\n          Register\n        </a>\n        <a routerLink=\"/login\" mat-button>\n          <mat-icon>account_box</mat-icon>\n          Login\n        </a>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill>\n    <mat-sidenav #sidenav>\n      <mat-nav-list>\n      <!--  <a href=\"#\" mat-list-item>\n          <mat-icon>notifications</mat-icon>\n          Notifications\n        </a>\n        <a href=\"#\" mat-list-item>\n          <mat-icon>message</mat-icon>\n          Messages</a>\n        <a href=\"#\" mat-list-item>\n          <mat-icon>account_box</mat-icon>\n          My Account\n        </a>-->\n        <a routerLink=\"/register\"  mat-list-item>\n          <mat-icon>account_box</mat-icon>\n          Register\n        </a>\n        <a routerLink=\"/login\" mat-list-item>\n          <mat-icon>account_box</mat-icon>\n          Login\n        </a>\n        <a (click)=\"sidenav.toggle()\" mat-list-item>\n          <mat-icon>close</mat-icon> Close\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n \n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n  \n<mat-card >\n<mat-card-header>\n  <mat-card-title>Login</mat-card-title>\n</mat-card-header>\n<mat-card-content>\n    <!--<p>\n        <mat-form-field class=\"example-full-width\" style=\"margin-top: 14px;\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input type=\"email\" matInput name=\"email\" ngModel #email=\"ngModel\"  >\n            <mat-icon matSuffix>mail</mat-icon>\n        </mat-form-field>\n    </p>\n    <br>\n    <p>\n        <mat-form-field class=\"example-full-width\" style=\"margin-top: -55px;\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input type=\"password\" matInput name=\"password\" ngModel #password=\"ngModel\"  >\n               <mat-icon matSuffix>vpn_key</mat-icon>\n        </mat-form-field>\n    </p>\n\n  -->\n  \n\n  <form class=\"login-form\" name=\"form\" \n  (ngSubmit)=\"loginForm.form.valid && login()\" #loginForm=\"ngForm\" novalidate>                      \n  \n  <div class=\"form-group\" \n  [ngClass]=\"{ 'has-error': loginForm.submitted && !email.valid }\">\n      <table cellspacing=\"0\">\n        <tr>\n            <td>\n            <mat-form-field>\n               <span matPrefix><mat-icon style=\"width:1.5em;\">email &nbsp;</mat-icon> </span>\n            <input matInput type=\"email\"\n          \n            placeholder=\"Email\" \n           [(ngModel)]=\"LoginDetails.email\" \n            name=\"email\" #email=\"ngModel\"\n      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" \n                  required>\n          <mat-error *ngIf=\"email.errors?.required\">\n              Email is Required.\n</mat-error>\n<mat-error *ngIf=\"email.errors?.pattern\">\nEmail is Invalid\n</mat-error>\n          </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n        <td>\n          <mat-form-field>\n          <span matPrefix><mat-icon style=\"width:1.5em;\">lock</mat-icon> </span>\n          <input matInput type=\"password\" placeholder=\"Password\" \n          [(ngModel)]=\"LoginDetails.password\" \n          name=\"password\" #password=\"ngModel\" required>\n          <mat-error *ngIf=\"password.errors?.required\">\n                Password is Required\n          </mat-error>\n\n\n</mat-form-field></td>\n      </tr></table>\n    </div>\n    <button mat-raised-button type=\"submit\" color=\"primary\" >Login</button>\n\n      </form>\n</mat-card-content>\n  \n  <mat-divider></mat-divider>\n  <p style=\"font-size:0.8rem;text-align: right\">Not a Member?\n      <a routerLink=\"/register\" class=\"text ml-1 font-weight-bold\" style=\"color:red\">Register</a> \n    </p>\n</mat-card>\n</div>\n    </mat-sidenav-content>\n    \n  </mat-sidenav-container>\n  \n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/logout/logout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/logout/logout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh;\">\r\n    <mat-toolbar color=\"primary\" class=\"app-toolbar\">\r\n      <mat-toolbar-row>\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <span>Hospital Management System</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n          <!-- The following menu items will be hidden on both SM and XS screen sizes -->\r\n         <!-- <a href=\"#\" mat-button>\r\n            <mat-icon>notifications</mat-icon>\r\n            Notifications\r\n          </a>\r\n          <a href=\"#\" mat-button>\r\n            <mat-icon>message</mat-icon>\r\n            Messages\r\n          </a>-->\r\n          \r\n          <a routerLink=\"/register\"  mat-button>\r\n            <mat-icon>account_box</mat-icon>\r\n            Register\r\n          </a>\r\n          <a routerLink=\"/login\" mat-button>\r\n            <mat-icon>account_box</mat-icon>\r\n            Login\r\n          </a>\r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  \r\n    <mat-sidenav-container fxFlexFill>\r\n      <mat-sidenav #sidenav>\r\n        <mat-nav-list>\r\n        <!--  <a href=\"#\" mat-list-item>\r\n            <mat-icon>notifications</mat-icon>\r\n            Notifications\r\n          </a>\r\n          <a href=\"#\" mat-list-item>\r\n            <mat-icon>message</mat-icon>\r\n            Messages</a>\r\n          <a href=\"#\" mat-list-item>\r\n            <mat-icon>account_box</mat-icon>\r\n            My Account\r\n          </a>-->\r\n          <a routerLink=\"/register\"  mat-list-item>\r\n            <mat-icon>account_box</mat-icon>\r\n            Register\r\n          </a>\r\n          <a routerLink=\"/login\" mat-list-item>\r\n            <mat-icon>account_box</mat-icon>\r\n            Login\r\n          </a>\r\n          <a (click)=\"sidenav.toggle()\" mat-list-item>\r\n            <mat-icon>close</mat-icon> Close\r\n          </a>\r\n        </mat-nav-list>\r\n      </mat-sidenav> \r\n      \r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\r\n  \r\n      <div class=\"col-sm-6\">\r\n      <div class=\"card\"style=\"width:75%;align:center;\">\r\n          <div class=\"card-header card-header-tabs card-header-primary\">\r\n              <div class=\"nav-tabs-navigation\">\r\n                  <div class=\"nav-tabs-wrapper\">\r\n                      <h4><span class=\"nav-tabs-title\">Registration:</span></h4>\r\n                     <ul class=\"nav nav-tabs\" data-tabs=\"tabs\" >\r\n                          <li class=\"nav-item\">\r\n                              <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\r\n                                  <i class=\"material-icons\">person</i> Patient\r\n                                  <div class=\"ripple-container\"></div>\r\n                              </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\r\n                                  <i class=\"material-icons\">person_add</i> Doctor\r\n                                  <div class=\"ripple-container\"></div>\r\n                              </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                              <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\r\n                                  <i class=\"material-icons\">local_hospital</i>Hospital\r\n                                  <div class=\"ripple-container\"></div>\r\n                              </a>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <div class=\"tab-content\">\r\n                  <div class=\"tab-pane active\" id=\"profile\">\r\n                      <form class=\"register-form\" name=\"form\" \r\n              (ngSubmit)=\"registerForm.form.valid && Register()\"\r\n               #registerForm=\"ngForm\" novalidate>                      \r\n              \r\n                 <div class=\"row\"></div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Name\" \r\n                  name=\"username\" \r\n                  required\r\n                  ngModel\r\n                  #name=\"ngModel\" [(ngModel)]=\"RegisterDetails.name\">\r\n                  <mat-error *ngIf=\"name.hasError('required')\">\r\n                      Name is required.\r\n                    </mat-error>\r\n                </mat-form-field>  \r\n                \r\n                \r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Address\" \r\n                  name=\"address\" \r\n                  required\r\n                  ngModel\r\n                  #address=\"ngModel\" \r\n\r\n[(ngModel)]=\"RegisterDetails.address\"></textarea>\r\n                  <mat-error *ngIf=\"address.hasError('required')\">\r\n                      Address is required.\r\n                    </mat-error>\r\n                </mat-form-field>  \r\n                \r\n     <mat-form-field>\r\n      <input matInput placeholder=\"Phone No\" name=\"phone\"  maxlength=\"10\" required \r\n\r\nngModel #phone=\"ngModel\"[(ngModel)]=\"RegisterDetails.phone\" pattern=\"[0-9]+\">\r\n      <mat-error *ngIf=\"phone.hasError('required')\">\r\n          Phone No is required\r\n      </mat-error>\r\n      <mat-error *ngIf=\"phone.hasError('pattern')\">\r\n              phone No must be a number\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"age\"\r\n       name=\"age\"\r\n       required\r\n       ngModel\r\n       #age=\"ngModel\" [(ngModel)]=\"RegisterDetails.age\"\r\n       min=\"0\" max=\"100\" >\r\n  <mat-error *ngIf=\"age.hasError('required')\">\r\n    Age is required\r\n  </mat-error>\r\n\r\n    </mat-form-field>\r\n     <br>\r\n      <mat-radio-group  name=\"gender\" ngModel required #gender=\"ngModel\" \r\n\r\n[(ngModel)]=\"RegisterDetails.gender\">\r\n        <mat-radio-button value=\"M\" >Male</mat-radio-button>&nbsp;&nbsp;\r\n        <mat-radio-button value=\"F\">Female</mat-radio-button>\r\n      </mat-radio-group>\r\n  \r\n<mat-form-field>\r\n      <input matInput placeholder=\"Email Id\"\r\n      name=\"email\"\r\n      required\r\n      ngModel\r\n      #email=\"ngModel\" [(ngModel)]=\"RegisterDetails.email\"\r\n      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\r\n\r\n  \r\n      <mat-error *ngIf=\"email.errors?.required\">\r\n        Email is Required.\r\n</mat-error>\r\n<mat-error *ngIf=\"email.errors?.pattern\">\r\nEmail is Invalid\r\n</mat-error>  </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Password\" name=\"password\"required ngModel \r\n\r\n#password=\"ngModel\" [(ngModel)]=RegisterDetails.password>\r\n      <mat-error *ngIf=\"password.hasError('required')\">\r\n          Password is required\r\n     </mat-error>\r\n   \r\n    </mat-form-field> \r\n\r\n    <button mat-raised-button type=\"submit\"color=\"accent\">Register</button>\r\n \r\n                  <a routerLink=\"/login\" class=\"text ml-1 font-weight-bold\" \r\nstyle=\"color:red;float:right\">Login</a>\r\n                </form>\r\n\r\n                  </div>\r\n                 <!-- <div class=\"tab-pane\" id=\"messages\">\r\n                      <form class=\"register-form\" name=\"form\" \r\n                        (ngSubmit)=\"registerForm.form.valid && DocRegister()\"\r\n                         #registerForm=\"ngForm\" novalidate>                      \r\n                        \r\n                            \r\n                          <mat-form-field> \r\n                          <input matInput placeholder=\" Doctor Name\" \r\n                            name=\"name\" \r\n                            required\r\n                            ngModel\r\n                            #name=\"ngModel\" [(ngModel)]=\"DocRegisterDetails.name\">\r\n                            <mat-error *ngIf=\"name.hasError('required')\">\r\n                                Name is required.\r\n                              </mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field>\r\n                            <mat-label>specialization</mat-label>\r\n                            <select matNativeControl [(ngModel)]=\"DocRegisterDetails.dept\" name=\"dept\">\r\n                               <option *ngFor=\"let dept of depts\" [value]=\"dept.value\">\r\n                                {{dept.value}}\r\n                              </option>\r\n                            </select>\r\n                          </mat-form-field>\r\n                          \r\n              \r\n               \r\n              <mat-form-field>\r\n                  <input matInput \r\n                  placeholder=\"Educational Qualifications\"\r\n                   name=\"qual\"  maxlength=\"10\" required \r\n                   ngModel #edu=\"ngModel\"[(ngModel)]=\"DocRegisterDetails.qual\">\r\n                  <mat-error *ngIf=\"edu.hasError('required')\">\r\n                      Educationl Qualifications is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Phone No\" name=\"phone\" \r\n                     maxlength=\"10\" required ngModel #phone=\"ngModel\"[(ngModel)]=\"DocRegisterDetails.phone\" pattern=\"[0-9]+\">\r\n                    <mat-error *ngIf=\"phone.hasError('required')\">\r\n                        Phone No is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"phone.hasError('pattern')\">\r\n                            phone No must be a number\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                      <input matInput\r\n                       placeholder=\"Registration No\"\r\n                        name=\"regnumber\"  \r\n                        maxlength=\"25\" required ngModel #regnumber=\"ngModel\"\r\n                        [(ngModel)]=\"DocRegisterDetails.reg\">\r\n                      <mat-error *ngIf=\"regnumber.hasError('required')\">\r\n                          Registration No is required\r\n                      </mat-error>\r\n                            </mat-form-field>\r\n                \r\n                <mat-radio-group  name=\"gender\" ngModel required #gender=\"ngModel\" [(ngModel)]=\"DocRegisterDetails.gender\">\r\n                  <mat-radio-button value=\"M\" >Male</mat-radio-button>&nbsp;&nbsp;\r\n                  <mat-radio-button value=\"F\">Female</mat-radio-button>\r\n                </mat-radio-group>\r\n            \r\n          <mat-form-field>\r\n                <input matInput placeholder=\"Email Id\"\r\n                name=\"email\"\r\n                required\r\n                ngModel\r\n                #email=\"ngModel\" [(ngModel)]=\"DocRegisterDetails.email\"\r\n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\r\n          \r\n            \r\n                <mat-error *ngIf=\"email.errors?.required\">\r\n                  Email is Required.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"email.errors?.pattern\">\r\n          Email is Invalid\r\n          </mat-error>  </mat-form-field>\r\n            \r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" name=\"password\"required ngModel #password=\"ngModel\" [(ngModel)]=DocRegisterDetails.password>\r\n                <mat-error *ngIf=\"password.hasError('required')\">\r\n                    Password is required\r\n               </mat-error>\r\n             \r\n              </mat-form-field> \r\n          \r\n              <button mat-raised-button type=\"submit\"color=\"accent\">Register</button>\r\n           \r\n                            <a routerLink=\"/login\" class=\"text ml-1 font-weight-bold\" style=\"color:red;float:right\">Login</a>\r\n                          </form>\r\n          \r\n                  </div>-->\r\n                  <!--\r\n                  <div class=\"tab-pane\" id=\"settings\">\r\n                      <table class=\"table\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td>\r\n                                      <div class=\"form-check\">\r\n                                          <label class=\"form-check-label\">\r\n                                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                              <span class=\"form-check-sign\">\r\n                                                  <span class=\"check\"></span>\r\n                                              </span>\r\n                                          </label>\r\n                                      </div>\r\n                                  </td>\r\n                                  <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                  <td class=\"td-actions text-right\">\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">edit</i>\r\n                                      </button>\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">close</i>\r\n                                      </button>\r\n                                  </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>\r\n                                      <div class=\"form-check\">\r\n                                          <label class=\"form-check-label\">\r\n                                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                              <span class=\"form-check-sign\">\r\n                                                  <span class=\"check\"></span>\r\n                                              </span>\r\n                                          </label>\r\n                                      </div>\r\n                                  </td>\r\n                                  <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                  </td>\r\n                                  <td class=\"td-actions text-right\">\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">edit</i>\r\n                                      </button>\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">close</i>\r\n                                      </button>\r\n                                  </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>\r\n                                      <div class=\"form-check\">\r\n                                          <label class=\"form-check-label\">\r\n                                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                              <span class=\"form-check-sign\">\r\n                                                  <span class=\"check\"></span>\r\n                                              </span>\r\n                                          </label>\r\n                                      </div>\r\n                                  </td>\r\n                                  <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                  <td class=\"td-actions text-right\">\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">edit</i>\r\n                                      </button>\r\n                                      <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                          <i class=\"material-icons\">close</i>\r\n                                      </button>\r\n                                  </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>-->\r\n              </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n      </mat-sidenav-container>\r\n    \r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"http://www.navil.in\">\n                        Navil Soft\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://navil.in/about\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://navil.in/projects\">\n                        Projects\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://www.navil.in/contact\">\n                        Contact\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"http://www.navil.in\" target=\"_blank\">Navil Soft</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                 \n\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        \n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n           <!-- <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                    </button>\n                </div>\n            </form>-->\n            <ul class=\"navbar-nav\">\n               <!-- <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                    </div>\n                </li>--> \n                \n          <li class=\"nav-item\">\n                    <a routerLink=\"/logout\"  class=\"nav-link\" >\n                        <i class=\"material-icons\" title=\"logout\">person</i>\n                 </a>       \n                    \n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"http://www.navil.in\" class=\"simple-text\" target=\"_blank\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Navil Soft\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">dashboard</i>\n            </a>\n        </li>\n        <!--<li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>-->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delete-appointment/delete-appointment.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delete-appointment/delete-appointment.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div mat-dialog-container >\n   <div mat-dialog-content>\n   <p>\n   Are U Sure to Delete..</p> \n</div>\n<div mat-dialog-actions>\n    <button class=\"mat-raised-button\" matDialogClose>Cancel</button>\n  <button class=\"mat-raised-button mat-primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Yes</button>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-appointment/edit-appointment.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-appointment/edit-appointment.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"roledetails.role==='patient';then p else doctor\"></div>\n\n<ng-template #p>\n  <div mat-dialog-container >\n    <h2 mat-dialog-title>Edit Appointment Details</h2>\n    \n <div mat-dialog-content>\n  \n  <div class=\"row\">\n   <div class=\"col-md-6\"> \n      <mat-form-field >\n    <input matInput placeholder=\"Name\" \n    name=\"username\" \n    required\n    ngModel\n    #name=\"ngModel\" [(ngModel)]=\"data.name\">\n    <mat-error *ngIf=\"name.hasError('required')\">\n        Name is required.\n      </mat-error>\n      </mat-form-field>\n      </div>\n      <div class=\"col-md-6\">\n  <mat-form-field >\n    <input matInput placeholder=\"Age\" \n    name=\"username\" \n    required\n    ngModel\n    #name=\"ngModel\" [(ngModel)]=\"data.age\">\n    <mat-error *ngIf=\"name.hasError('required')\">\n        Name is required.\n      </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n                                      \n        <mat-form-field>\n       \n<input matInput placeholder=\"Phone Number\" \nname=\"phone\" \nrequired\nngModel\n#phone=\"ngModel\" [(ngModel)]=\"data.phone\">\n<mat-error *ngIf=\"phone.hasError('required')\">\n    Phone Number is required.\n  </mat-error>  </mat-form-field>\n \n         </div>\n<div class=\"col-md-6\" style=\"padding:4%\">\n                                       \n  <mat-radio-group \n  name=\"gender\"\n  \n   required [(value)]=\"data.gender\" (change)=\"radioChange($event)\">\n   <mat-radio-button value=\"M\" >Male</mat-radio-button>&nbsp;&nbsp;\n   <mat-radio-button value=\"F\">Female</mat-radio-button>\n </mat-radio-group>\n<mat-divider style=\"border-top-color:black\"></mat-divider>\n                            \n                       </div>\n\n</div>\n  \n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n  <mat-form-field>\n    <input type=\"text\" matInput [matDatepicker]=\"picker\"\n    \n    [ngModel]=\"data.date|date:'yyyy-MM-dd'\" \nname=\"date\" #date=\"ngModel\"  (ngModelChange)=\"changeDate($event)\"\nplaceholder=\"Choose a date\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6\">\n\n              <div class=\"ngx-timepicker-field-example\">\n    \n\n                <ngx-timepicker-field [(ngModel)]=\"data.time\" [controlOnly]=\"true\"></ngx-timepicker-field>\n         </div>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\"> \n    <mat-form-field >\n<mat-label>Hospitals</mat-label>\n    <mat-select (selectionChange)=\"applySelect($event)\" \n     [(value)]=\"data.hospid \"placeholder=\"Hospitals\">\n    <mat-option *ngFor=\"let hosp of hpls\" [value]=hosp.id >\n      {{hosp.name}}\n    </mat-option>\n  </mat-select>\n  </mat-form-field>\n\n\n  </div>\n<div class=\"col-md-6\">\n<mat-form-field>\n  <mat-select [(value)]=\"data.docid \"placeholder=\"Doctors\">\n  <mat-option *ngFor=\"let doc of doctors\" [value]=doc.id >\n    {{doc.name}}\n  </mat-option>\n</mat-select></mat-form-field>\n</div>\n</div>\n</div>\n<div mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"onNoClick()\">No Thanks</button>\n  <button class=\"mat-raised-button mat-primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n\n</ng-template>\n<ng-template #doctor>\n  \n  <div mat-dialog-container >\n    <h2 mat-dialog-title>Edit Appointment Details</h2>\n    \n <div mat-dialog-content>\n  \n  <div class=\"row\">\n   <div class=\"col-md-6\"> \n      <mat-form-field >\n    <input matInput placeholder=\"Name\" \n    name=\"username\" \n    required\n    ngModel\n    #name=\"ngModel\" [(ngModel)]=\"data.name\" disabled>\n    <mat-error *ngIf=\"name.hasError('required')\">\n        Name is required.\n      </mat-error>\n      </mat-form-field>\n      </div>\n      <div class=\"col-md-6\">\n  <mat-form-field >\n    <input matInput placeholder=\"Age\" \n    name=\"username\" \n    required\n    ngModel\n    #name=\"ngModel\" [(ngModel)]=\"data.age\" disabled>\n    <mat-error *ngIf=\"name.hasError('required')\">\n        Name is required.\n      </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n                                      \n        <mat-form-field>\n       \n<input matInput placeholder=\"Phone Number\" \nname=\"phone\" \nrequired\nngModel\n#phone=\"ngModel\" [(ngModel)]=\"data.phone\" disabled>\n<mat-error *ngIf=\"phone.hasError('required')\">\n    Phone Number is required.\n  </mat-error>  </mat-form-field>\n \n         </div>\n<div class=\"col-md-6\" style=\"padding:4%\">\n                                       \n  <mat-radio-group \n  name=\"gender\"\n  \n   required [(value)]=\"data.gender\" (change)=\"radioChange($event)\">\n   <mat-radio-button value=\"M\"  disabled=\"true\">Male</mat-radio-button>&nbsp;&nbsp;\n   <mat-radio-button value=\"F\" disabled=\"true\">Female</mat-radio-button>\n </mat-radio-group>\n<mat-divider style=\"border-top-color:black\"></mat-divider>\n                            \n                       </div>\n\n</div>\n  \n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n  <mat-form-field>\n    <input type=\"text\" matInput [matDatepicker]=\"picker\"\n    \n    [ngModel]=\"data.date|date:'yyyy-MM-dd'\" \nname=\"date\" #date=\"ngModel\"  (ngModelChange)=\"changeDate($event)\"\nplaceholder=\"Choose a date\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6\">\n  <mat-form-field>\n     \n    <input matInput placeholder=\"Timepicker\" \n    name=\"time\" \n    required\n    ngModel\n    #phone=\"ngModel\" [(ngModel)]=\"data.time\" disabled>\n</mat-form-field>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\"> \n    <mat-form-field >\n<mat-label>Hospitals</mat-label>\n    <mat-select (selectionChange)=\"applySelect($event)\" \n     [(value)]=\"data.hospid \"placeholder=\"Hospitals\" disabled=\"true\">\n    <mat-option *ngFor=\"let hosp of hpls\" [value]=hosp.id >\n      {{hosp.name}}\n    </mat-option>\n  </mat-select>\n  </mat-form-field>\n\n\n  </div>\n<div class=\"col-md-6\">\n<mat-form-field>\n  <mat-select [(value)]=\"data.docid \"placeholder=\"Doctors\" disabled=\"true\">\n  <mat-option *ngFor=\"let doc of doctors\" [value]=doc.id >\n    {{doc.name}}\n  </mat-option>\n</mat-select></mat-form-field>\n</div>\n</div>\n</div>\n<div mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"onNoClick()\">No Thanks</button>\n  <button class=\"mat-raised-button mat-primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-member/edit-member.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-member/edit-member.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1 mat-dialog-title>Edit Member Details</h1>\n  <div mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <mat-form-field >\n         <input matInput placeholder=\"Name\" \n         name=\"username\" \n         required\n         ngModel\n         #name=\"ngModel\" [(ngModel)]=\"data.name\">\n         <mat-error *ngIf=\"name.hasError('required')\">\n             Name is required.\n           </mat-error>\n           </mat-form-field>\n\n    </div>\n    <div class=\"col-md-4\">\n        <mat-form-field>\n           <input matInput placeholder=\"Age\" \n           name=\"firstname\" \n           required\n           ngModel\n           #name=\"ngModel\" [(ngModel)]=\"data.age\">\n           <mat-error *ngIf=\"name.hasError('required')\">\n               Age is required.\n             </mat-error>\n        </mat-form-field>\n \n     </div>\n     <div class=\"col-md-4\">\n         <br>\n         <mat-radio-group\n         name=\"gender\"\n          ngModel\n          #gender=\"ngModel\"\n          [(ngModel)]=\"data.gender\" required>\n           <mat-radio-button value=\"M\">Male</mat-radio-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n           <mat-radio-button value=\"F\">Female</mat-radio-button>\n         </mat-radio-group>\n         <mat-divider></mat-divider>\n           <mat-error *ngIf=\"name.hasError('required')\">\n               Gender is required.\n             </mat-error>\n        \n \n     </div>\n  \n  \n      <div class=\"col-md-4\">\n         <mat-form-field>\n            <input matInput placeholder=\"Phone\" \n            name=\"phone\" \n            required\n            ngModel\n            #name=\"ngModel\" [(ngModel)]=\"data.phone\">\n            <mat-error *ngIf=\"name.hasError('required')\">\n                Phone is required.\n              </mat-error>\n         </mat-form-field>\n  \n      </div>\n  <div class=\"col-md-4\">\n         <mat-form-field>\n            <input matInput placeholder=\"Email\" \n            name=\"firstname\" \n            ngModel\n            #name=\"ngModel\" [(ngModel)]=\"data.email\">\n            \n         </mat-form-field>\n         \n      </div>\n  </div>\n    \n  </div>\n  <mat-divider style=\"color:red\">\n\n\n  </mat-divider>\n  <div mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"onNoClick()\">No Thanks</button>\n  <button class=\"mat-raised-button mat-primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoice/invoice.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/printdetails/printdetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/printdetails/printdetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container >\n\t\t\t<h2 mat-dialog-title style=\"text-align: center;color: royalblue;\"><b>Invoice Details</b></h2>\n\t\t\t<div class=\"row\">\n<div class=\"col-md-12\">\n\t<h5 mat-dialog title style =\"text-align:left;margin-bottom:-12px;\"><b>Patient Name:{{data.patname}}</b></h5>\n\t<h5 mat-dialog title style =\"text-align-last: right;margin-bottom:-12px;\"><b>Date:{{d}}</b></h5>\t\n</div>\n</div>\n<br>\n\t<button mat-raised-button color=\"primary\" (click)=\"addElement()\">Add</button><br><br>\n\t\n\t<div class=\"example-container mat-elevation-z8\">\n\t<mat-table #table [dataSource]=\"dataSource\"style=\"width=100%\">\n\n\t\t<!-- Name Column -->\n\t\t<ng-container matColumnDef=\"desc\">\n\t\t\t<mat-header-cell *matHeaderCellDef style=\"color:blue;font-size:medium;\"> Description </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\">\n\t\t\t\t<mat-form-field floatLabel=\"never\" style=\"width:400px\">\n\t\t\t\t\t<input matInput  placeholder=\"Description\" [value]=\"element.desc\" [(ngModel)]=\"element.desc\">\n\t\t\t\t</mat-form-field>\n\t\t\t</mat-cell>\n\t\t\t<mat-footer-cell *matFooterCellDef></mat-footer-cell>\n\t\t</ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"cost\">\n\t\t\t<mat-header-cell *matHeaderCellDef style=\"color:blue;font-size:medium;\"> Cost </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\">\n\t\t\t\t<mat-form-field floatLabel=\"never\" style=\"width:100px\"> \n\t\t\t\t\t<input matInput placeholder=\"Cost\" [value]=\"element.cost\" [(ngModel)]=\"element.cost\">\n\t\t\t\t</mat-form-field>\n\t\t\t</mat-cell>\n\t\t\t<mat-footer-cell *matFooterCellDef style=\"color:blue;font-size:medium;font-weight: bold;\">Total:{{getTotalCost()|currency: 'INR'}} </mat-footer-cell>\n\t\t</ng-container>\n\n\n\t\t<ng-container matColumnDef=\"delete\">\n\t\t\t<mat-header-cell *matHeaderCellDef style=\"color:blue;font-size:medium;\">Actions </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element;let i = index;\">\n\t\t\t  \n\t\t\t  <button mat-icon-button (click)=\"rowIndex(i)\" matTooltip=\"Click to Delete\" class=\"iconbutton\" color=\"warn\">\n\t\t\t\t  <mat-icon aria-label=\"Delete\">delete</mat-icon>\n\t\t\t\t</button>\t\t\t\t\n\t\t\t</mat-cell>\n\t\t\t<mat-footer-cell *matFooterCellDef></mat-footer-cell>\n\t\n\t\t</ng-container>\n\t\t\n<br>\n\n\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns;sticky:true\"></mat-header-row>\n\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t<mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></mat-footer-row>\n  </mat-table>\n  \n</div>\n<div mat-dialog-actions>\n\t<button class=\"mat-raised-button\" (click)=\"onNoClick()\">No Thanks</button>\n\t<!--<button class=\"mat-raised-button\" (click)=\"submit()\">Submit</button>-->\n\t<button class=\"mat-raised-button mat-primary\"   (click)=\"submit()\" [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\n  </div>\n  \n</div>\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _date_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./date.adapter */ "./src/app/date.adapter.ts");
/* harmony import */ var _edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-member/edit-member.component */ "./src/app/edit-member/edit-member.component.ts");
/* harmony import */ var _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-appointment/edit-appointment.component */ "./src/app/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _delete_appointment_delete_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./delete-appointment/delete-appointment.component */ "./src/app/delete-appointment/delete-appointment.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _printdetails_printdetails_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./printdetails/printdetails.component */ "./src/app/printdetails/printdetails.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { CarouselModule } from 'ngx-bootstrap/carousel';





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["ModalModule"].forRoot(),
                //CarouselModule.forRoot(),  
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"],
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_25__["NgxMaterialTimepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__["AdminLayoutComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_24__["EditAppointmentComponent"],
                _delete_appointment_delete_appointment_component__WEBPACK_IMPORTED_MODULE_27__["DeleteAppointmentComponent"],
                _edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_23__["EditMemberComponent"],
                _printdetails_printdetails_component__WEBPACK_IMPORTED_MODULE_30__["PrintdetailsComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_31__["InvoiceComponent"]
            ],
            providers: [
                _services_patient_service__WEBPACK_IMPORTED_MODULE_18__["PatientService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_20__["LoginService"],
                _services_register_service__WEBPACK_IMPORTED_MODULE_21__["RegisterService"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_26__["BsModalService"],
                _services_appointment_service__WEBPACK_IMPORTED_MODULE_19__["AppointmentService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _date_adapter__WEBPACK_IMPORTED_MODULE_22__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: _date_adapter__WEBPACK_IMPORTED_MODULE_22__["APP_DATE_FORMATS"]
                },
            ],
            entryComponents: [
                _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_24__["EditAppointmentComponent"],
                _delete_appointment_delete_appointment_component__WEBPACK_IMPORTED_MODULE_27__["DeleteAppointmentComponent"],
                _edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_23__["EditMemberComponent"],
                _printdetails_printdetails_component__WEBPACK_IMPORTED_MODULE_30__["PrintdetailsComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] },
    { path: '', component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ] }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  height: 7vh;\n}\n\ndiv {\n  overflow: inherit;\n}\n\n.mat-sidenav-container {\n  background-image: url(\"/assets/img/bg3.jpg\");\n}\n\na {\n  text-decoration: none;\n  font-size: 75%;\n  white-space: normal;\n}\n\nbutton {\n  font-size: 100%;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-sidenav-content {\n  font-size: 100%;\n  text-align: center;\n}\n\n.login-main {\n  margin-top: 10%;\n}\n\nmat-card {\n  min-width: 20%;\n}\n\n.app-toolbar {\n  position: sticky;\n  position: -webkit-sticky;\n  /* For macOS/iOS Safari */\n  top: 0;\n  /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n  /* Ensure that your app's content doesn't overlap the toolbar */\n}\n\n.my-class {\n  background-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9GOlxcbm9kZWpzXFxob3NwX2FwcC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0EsV0FBQTtBQ0FBOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUVBLDRDQUFBO0FDREE7O0FES0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FER0U7RUFDQSxjQUFBO0FDQUY7O0FERUU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQTBCLHlCQUFBO0VBQzFCLE1BQUE7RUFBUSx5Q0FBQTtFQUNSLGFBQUE7RUFBZSwrREFBQTtBQ0luQjs7QURGQTtFQUFZLGdDQUFBO0FDTVoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtdG9vbGJhcntcclxuaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbi8vYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4vL21pbi1oZWlnaHQ6IDUzdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbi1tYWlue1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgbWF0LWNhcmR7XHJcbiAgbWluLXdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5hcHAtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxufVxyXG4ubXktY2xhc3MgeyBiYWNrZ3JvdW5kLWNvbG9yOnJlZCAhaW1wb3J0YW50O1xyXG4gIH0iLCIubWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDd2aDtcbn1cblxuZGl2IHtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9iZzMuanBnXCIpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDc1JTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBmb250LXNpemU6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLW1haW4ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiAyMCU7XG59XG5cbi5hcHAtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuXG4ubXktY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, snackBar, toastr) {
        this.router = router;
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.toastr = toastr;
        this.isCollapsed = true;
        this.LoginDetails = {
            email: '',
            password: ''
        };
        //  email:any=[];
        this.showSpinner = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        alert("welcome");
        this.loginService.getContacts(this.LoginDetails).subscribe(function (res) {
            if (res['status'] == true) {
                if (res['role'] == 'patient') {
                    _this.snackBar.open('Login successfully', 'ok', {
                        duration: 5000,
                    });
                    localStorage.setItem('currentUser', JSON.stringify({ email: _this.LoginDetails.email, password: _this.LoginDetails.password, role: res['role'] }));
                    _this.router.navigate(['/patient']);
                }
                else {
                    if (res['role'] == 'doctor') {
                        localStorage.setItem('currentUser', JSON.stringify({ email: _this.LoginDetails.email, password: _this.LoginDetails.password, role: res['role'] }));
                        _this.router.navigate(['/doctor']);
                    }
                }
            }
            else {
                _this.snackBar.open('Invalid Login', 'Ok', {
                    duration: 5000,
                });
                // alert("invalid user");
            }
        });
        /** spinner starts on init */
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());

;


/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  height: 7vh;\n}\n\ndiv {\n  overflow: inherit;\n}\n\n.mat-sidenav-container {\n  background-image: url(\"/assets/img/bg3.jpg\");\n}\n\na {\n  text-decoration: none;\n  font-size: 75%;\n  white-space: normal;\n}\n\nbutton {\n  font-size: 100%;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-sidenav-content {\n  font-size: 100%;\n  text-align: center;\n}\n\n.login-main {\n  margin-top: 5%;\n}\n\nmat-card {\n  min-width: 20%;\n}\n\n.app-toolbar {\n  position: sticky;\n  position: -webkit-sticky;\n  /* For macOS/iOS Safari */\n  top: 0;\n  /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n  /* Ensure that your app's content doesn't overlap the toolbar */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9GOlxcbm9kZWpzXFxob3NwX2FwcC9zcmNcXGFwcFxcYXV0aFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBREdJO0VBQ0UsaUJBQUE7QUNBTjs7QURHSTtFQUVBLDRDQUFBO0FDREo7O0FES0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZOOztBREtJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0ZOOztBREtJO0VBQ0UsZUFBQTtBQ0ZOOztBREtJO0VBQ0UsY0FBQTtBQ0ZOOztBREtJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRlI7O0FESUk7RUFDRSxjQUFBO0FDRE47O0FER007RUFDQSxjQUFBO0FDQU47O0FERU07RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQTBCLHlCQUFBO0VBQzFCLE1BQUE7RUFBUSx5Q0FBQTtFQUNSLGFBQUE7RUFBZSwrREFBQTtBQ0l2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10b29sYmFye1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdiB7XHJcbiAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4gICAgLy9taW4taGVpZ2h0OiA1M3ZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbntcclxuICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pY29uIHtcclxuICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sb2dpbi1tYWlue1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgfVxyXG4gICAgICBtYXQtY2FyZHtcclxuICAgICAgbWluLXdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmFwcC10b29sYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cclxuICAgICAgICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuICAgIH1cclxuICAgIiwiLm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbmRpdiB7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmczLmpwZ1wiKTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiAyMCU7XG59XG5cbi5hcHAtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, registerService, modalService) {
        this.router = router;
        this.registerService = registerService;
        this.modalService = modalService;
        this.role = {};
        this.RegisterDetails = {
            email: '',
            name: '',
            address: '',
            age: '',
            phone: '',
            password: '',
            gender: ''
        };
        this.DocRegisterDetails = {
            name: '',
            dept: '',
            qual: '',
            phone: '',
            reg: '',
            gender: '',
            email: '',
            password: ''
        };
        this.depts = [
            { value: 'Dentist' },
            { value: 'Ortho' },
            { value: 'Cardio' }
        ];
    }
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        //  alert(JSON.stringify(this.RegisterDetails));
        //alert(this.RegisterDetails.gender)
        this.registerService.registerdetails(this.RegisterDetails).subscribe(function (res) {
            console.log("PUT Request is successful ", res);
            localStorage.setItem('currentUser', JSON.stringify({ email: _this.RegisterDetails.email, password: _this.RegisterDetails.password, role: "patient" }));
            _this.router.navigate(['/patient']);
        }, function (error) {
            console.log("Error", error);
        });
    };
    RegisterComponent.prototype.DocRegister = function () {
        var _this = this;
        alert(JSON.stringify(this.DocRegisterDetails));
        this.registerService.docregisterdetails(this.DocRegisterDetails).subscribe(function (res) {
            console.log("PUT Reguest is successfull", res);
            _this.router.navigate(['/doctor']);
        }, function (error) {
            console.log("Error", error);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES1"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES1, ROUTES2, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES1", function() { return ROUTES1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES2", function() { return ROUTES2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES1 = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/patient', title: 'Patient', icon: 'person', class: '' },
    { path: '/create-appointment', title: 'Create Appointment', icon: 'library_books', class: '' },
    { path: '/appointment-details', title: 'Appointment Details', icon: 'library_books', class: '' }
    //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //  { path: '/member', title: 'Members',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
var ROUTES2 = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/doctor', title: 'Patient Details', icon: 'content_paste', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.data = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem("currentUser"));
        if (this.data['role'] == 'patient') {
            this.menuItems = ROUTES1.filter(function (menuItem) { return menuItem; });
        }
        else
            this.menuItems = ROUTES2.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/date.adapter.ts":
/*!*********************************!*\
  !*** ./src/app/date.adapter.ts ***!
  \*********************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(date, month, year);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat == "input") {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + this._to2digit(month) + '-' + year;
        }
        else {
            return date.toDateString();
        }
    };
    AppDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return AppDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: 'inputMonth',
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/delete-appointment/delete-appointment.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/delete-appointment/delete-appointment.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1hcHBvaW50bWVudC9kZWxldGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delete-appointment/delete-appointment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/delete-appointment/delete-appointment.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAppointmentComponent", function() { return DeleteAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/appointment.service */ "./src/app/services/appointment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeleteAppointmentComponent = /** @class */ (function () {
    function DeleteAppointmentComponent(appointmentservice, dialogRef, data) {
        this.appointmentservice = appointmentservice;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteAppointmentComponent.prototype.ngOnInit = function () {
    };
    DeleteAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-appointment',
            template: __webpack_require__(/*! raw-loader!./delete-appointment.component.html */ "./node_modules/raw-loader/index.js!./src/app/delete-appointment/delete-appointment.component.html"),
            styles: [__webpack_require__(/*! ./delete-appointment.component.scss */ "./src/app/delete-appointment/delete-appointment.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], DeleteAppointmentComponent);
    return DeleteAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwb2ludG1lbnQvZWRpdC1hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: EditAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentComponent", function() { return EditAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appointment.service */ "./src/app/services/appointment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





//import { DatePipe } from '@angular/common';
var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(appointmentservice, dialog, dialogRef, data) {
        this.appointmentservice = appointmentservice;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.hpls = {};
        this.id = {};
        this.doctors = {};
        this.event = {};
        this.hospid = {};
        this.r = [];
        this.roledetails = [];
    }
    EditAppointmentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.r = JSON.parse(localStorage.getItem("currentUser"));
        this.roledetails.role = this.r['role'];
        //alert(JSON.stringify(this.r['role']));
        this.appointmentservice.getHospitals().subscribe(function (res) {
            _this.hpls = res;
        });
        this.id = {
            "id": this.data['hospid']
        };
        this.appointmentservice.getDoctors(this.id).subscribe(function (res) {
            _this.doctors = res;
        });
    };
    EditAppointmentComponent.prototype.applySelect = function (event) {
        var _this = this;
        this.id = {
            "id": event.value
        };
        this.appointmentservice.getDoctors(this.id).subscribe(function (res) {
            _this.doctors = res;
        });
        //alert(JSON.stringify(this.data));
    };
    EditAppointmentComponent.prototype.radioChange = function ($event) {
        this.data['gender'] = $event.value;
    };
    EditAppointmentComponent.prototype.changeDate = function ($event) {
        var format = 'yyyy-MM-dd';
        var locale = 'en-us';
        var d = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])($event, format, locale);
        this.data['date'] = d;
    };
    EditAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-appointment',
            template: __webpack_require__(/*! raw-loader!./edit-appointment.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-appointment/edit-appointment.component.html"),
            styles: [__webpack_require__(/*! ./edit-appointment.component.scss */ "./src/app/edit-appointment/edit-appointment.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/edit-member/edit-member.component.scss":
/*!********************************************************!*\
  !*** ./src/app/edit-member/edit-member.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbWVtYmVyL2VkaXQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-member/edit-member.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-member/edit-member.component.ts ***!
  \******************************************************/
/*! exports provided: EditMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemberComponent", function() { return EditMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditMemberComponent = /** @class */ (function () {
    function EditMemberComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditMemberComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditMemberComponent.prototype.ngOnInit = function () {
    };
    EditMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-member',
            template: __webpack_require__(/*! raw-loader!./edit-member.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-member/edit-member.component.html"),
            styles: [__webpack_require__(/*! ./edit-member.component.scss */ "./src/app/edit-member/edit-member.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], EditMemberComponent);
    return EditMemberComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.scss":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/printdetails/printdetails.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/printdetails/printdetails.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  height: 300px;\n  overflow: auto;\n}\n.table {\n  width: 100%;\n}\n.mat-header-cell:first-child, .mat-cell:first-child {\n  flex: 40%;\n}\n.mat-header-cell:nth-child(2), .mat-cell:nth-child(2) {\n  flex: 1%;\n}\n.mat-header-cell:last-child, .mat-cell:last-child {\n  flex: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnRkZXRhaWxzL0Y6XFxub2RlanNcXGhvc3BfYXBwL3NyY1xcYXBwXFxwcmludGRldGFpbHNcXHByaW50ZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpbnRkZXRhaWxzL3ByaW50ZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBR0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0FDREY7QURHQTtFQUNFLFNBQUE7QUNBRjtBREVBO0VBQ0UsUUFBQTtBQ0NGO0FEQ0E7RUFDRSxRQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wcmludGRldGFpbHMvcHJpbnRkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQsLm1hdC1jZWxsOmZpcnN0LWNoaWxke1xyXG4gIGZsZXg6NDAlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLC5tYXQtY2VsbDpudGgtY2hpbGQoMil7XHJcbiAgZmxleDoxJTtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsLm1hdC1jZWxsOmxhc3QtY2hpbGR7XHJcbiAgZmxleDozJVxyXG59XHJcbiIsIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkLCAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xuICBmbGV4OiA0MCU7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLCAubWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogMSU7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCwgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICBmbGV4OiAzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/printdetails/printdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/printdetails/printdetails.component.ts ***!
  \********************************************************/
/*! exports provided: PrintdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintdetailsComponent", function() { return PrintdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__["pdfMake"].vfs;
var ELEMENT_DATA = [{ desc: '', cost: null }
];
var PrintdetailsComponent = /** @class */ (function () {
    function PrintdetailsComponent(datePipe, dialogRef, data) {
        this.datePipe = datePipe;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['desc', 'cost', 'delete'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.patdtls = {};
        this.patdtlsdate = {};
        this.patdtlsdesc = {};
        this.d = [];
        this.t = [];
        this.PrintDetails = {
            date: '',
            patname: '',
            docname: '',
            desc: '',
            cost: ''
        };
    }
    PrintdetailsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PrintdetailsComponent.prototype.ngOnInit = function () {
        var date = this.datePipe.transform(new Date(), "dd-MM-yyyy");
        var time = this.datePipe.transform(new Date(), "shortTime");
        this.d = date;
        this.t = time;
        // this.dataSource.data
    };
    PrintdetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrintdetailsComponent.prototype.addElement = function () {
        ELEMENT_DATA.push({ desc: '', cost: null });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    };
    PrintdetailsComponent.prototype.rowIndex = function (i) {
        this.index = i;
        this.dataSource.data.splice(this.index, 1);
        this.dataSource._updateChangeSubscription();
    };
    PrintdetailsComponent.prototype.removeSelectedRows = function (element) {
        this.dataSource.data.splice(this.index, 1);
        this.dataSource._updateChangeSubscription();
    };
    /** Gets the total cost of all transactions. */
    PrintdetailsComponent.prototype.getTotalCost = function () {
        return ELEMENT_DATA.map(function (t) { return t.cost; }).reduce(function (acc, value) { return +acc + +value; }, 0);
    };
    PrintdetailsComponent.prototype.submit = function () {
        // alert(JSON.stringify(this.data));
        this.patdtls = JSON.stringify(this.data);
        alert(this.patdtls);
        this.patdtlsdate = JSON.stringify(this.d);
        alert(this.patdtlsdate);
        this.patdtlsdesc = JSON.stringify(this.dataSource.data);
        alert(this.patdtlsdesc);
        var docDefinition = {
            content: [
                {
                    text: 'Invoice Details\n\n\n\n',
                    style: 'header',
                    alignment: 'center',
                    color: 'blue'
                },
                {
                    text: this.t,
                    alignment: 'right'
                },
                {
                    text: this.d,
                    alignment: 'right'
                },
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Description', 'Cost'],
                            ['desc', 'cost']
                        ]
                    }
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true
                },
                subheader: {
                    fontSize: 15,
                    bold: true
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 8
                }
            }
        };
        var win = window.open('', '_blank');
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__["createPdf"](docDefinition).open({}, win);
        //this.PrintDetails=this.d+this.data+this.dataSource.data;
        //alert(JSON.stringify(this.PrintDetails));
    };
    PrintdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-printdetails',
            template: __webpack_require__(/*! raw-loader!./printdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/printdetails/printdetails.component.html"),
            styles: [__webpack_require__(/*! ./printdetails.component.scss */ "./src/app/printdetails/printdetails.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], PrintdetailsComponent);
    return PrintdetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/appointment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentService = /** @class */ (function () {
    function AppointmentService(Http) {
        this.Http = Http;
    }
    AppointmentService.prototype.getmembers = function (data) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/members", data).map(function (res) { return res; });
    };
    AppointmentService.prototype.getMemberDetailsPerId = function (id) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/memberdetailsperid", id).map(function (res) { return res; });
    };
    AppointmentService.prototype.getHospitals = function () {
        return this.Http.get("http://localhost:4200/backend/hosp/Api/hospitals").map(function (res) { return res; });
    };
    AppointmentService.prototype.getDoctors = function (d) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/doctors", d).map(function (res) { return res; });
    };
    AppointmentService.prototype.appointmentDetails = function (d) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/appointment", d).map(function (res) { return res; });
    };
    AppointmentService.prototype.updateappointmentDetails = function (data) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/updateappointment", data).map(function (res) { return res; });
    };
    AppointmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(Http) {
        this.Http = Http;
    }
    // writerUrl = "localhost/hosp/Api/tt"; 
    LoginService.prototype.getContacts = function (Details) {
        return this.Http.post("http://localhost/hosp/Api/check", Details).map(function (res) { return res; });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
    }
    PatientService.prototype.getUserDetails = function (data) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/userdetails", data).map(function (res) { return res; });
    };
    PatientService.prototype.getPatientDetails = function (data) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/getpatientdetails", data).map(function (res) { return res; });
    };
    PatientService.prototype.getMemberDetails = function (data) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/getmemberdetails", data).map(function (res) { return res; });
    };
    PatientService.prototype.getMemberDetailsPerId = function (id) {
        alert("member details per id service");
        return this.http.post("http://localhost:4200/backend/hosp/Api/getmemberdetailsperid", id).map(function (res) { return res; });
    };
    PatientService.prototype.updateMemberDetails = function (data) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/updatememberdetails", data).map(function (res) { return res; });
    };
    PatientService.prototype.addMemberDetails = function (data) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/addmemberdetails", data).map(function (res) { return res; });
    };
    PatientService.prototype.getid = function (mail) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/patientid", mail).map(function (res) { return res; });
    };
    PatientService.prototype.deleteAppointment = function (id) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/cancelApp", id).map(function (res) { return res; });
    };
    PatientService.prototype.getAppDetails = function (id) {
        return this.http.post("http://localhost:4200/backend/hosp/Api/editappdetails", id).map(function (res) { return res; });
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(Http) {
        this.Http = Http;
    }
    // writerUrl = "localhost/hosp/Api/tt"; 
    RegisterService.prototype.registerdetails = function (Details) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/register", Details).map(function (res) { return res; });
    };
    RegisterService.prototype.docregisterdetails = function (Details) {
        return this.Http.post("http://localhost:4200/backend/hosp/Api/docregister", Details).map(function (res) { return res; });
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\nodejs\hosp_app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map