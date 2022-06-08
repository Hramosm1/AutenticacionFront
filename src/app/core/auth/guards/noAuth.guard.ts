import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(): Observable<boolean> {
        return this._check();
    }


    canActivateChild(): Observable<boolean> {
        return this._check();
    }

    canLoad(): Observable<boolean> {
        return this._check();
    }

    private _check(): Observable<boolean> {
        // Check the authentication status
        return this._authService.check()
            .pipe(
                switchMap((authenticated) => {
                    if (authenticated) {
                        this._router.navigate(['']);
                        return of(false);
                    }
                    return of(true);
                })
            );
    }
}
