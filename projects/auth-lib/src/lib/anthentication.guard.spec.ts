// import { TestBed, inject, fakeAsync, tick, async } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthenticationGuard } from './authentication.guard';
//
// describe('AuthGuardService', () => {
//   let service: AuthenticationGuard = null;
//   let router: Router;
//
//   let store: MockStore<{ authentication: {
//       authenticationState: string,
//     }
//   }>;
//
//   const initialState = {
//     authentication: {
//       user: null,
//       authenticationState: AuthenticationStates.LOGGEDOUT,
//       userAttributes: [],
//       username: null,
//       session: null
//     }
//   };
//
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         AuthenticationGuard,
//         provideMockStore({ initialState }),
//       ],
//       imports: [
//         ForcePasswordChangePageModule,
//         SignInPageModule,
//         ForgotPasswordPageModule,
//         RouterTestingModule.withRoutes(routes),
//       ]
//     });
//   });
//
//   beforeEach(inject([AuthenticationGuard], (agService: AuthenticationGuard) => {
//     router = TestBed.get(Router);
//     store = TestBed.get(Store);
//     service = agService;
//   }));
//
//   it('should redirect user to sign in screen',  ((done) => {
//     const navigateSpy = spyOn(router, 'navigateByUrl');
//
//     const route = {
//         path: null,
//         canLoad: [AuthenticationGuard],
//       };
//
//     service.canLoad(route, []).subscribe((something) => {
//       expect(something).toEqual(false);
//       expect(navigateSpy).toHaveBeenCalledWith('/authentication/sign-in');
//       done();
//     });
//
//   }));
//
//
//   it('should allow user to get to home screen',  ((done) => {
//     const navigateSpy = spyOn(router, 'navigateByUrl');
//     const newState = {
//       authentication: {
//         user: null,
//         authenticationState: AuthenticationStates.LOGGEDIN,
//         userAttributes: [],
//         username: null,
//         session: null
//       }
//     };
//
//
//     store.setState(newState);
//     const route = {
//       path: null,
//       canLoad: [AuthenticationGuard],
//     };
//
//     service.canLoad(route, []).subscribe((something) => {
//       expect(something).toBeTruthy();
//       done();
//     });
//
//   }));
// });
