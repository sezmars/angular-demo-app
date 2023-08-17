import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Observable, of} from "rxjs";
import {SharedComponentsModule} from "../../shared/shared-components.module";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
    standalone: true,
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    imports: [
        SharedComponentsModule
    ],
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
    public user$!: Observable<Partial<IUser>>;
    public id: string | null;
    public isLoading: boolean = false;

    constructor(
        private location: Location,
        private activateRouter: ActivatedRoute,
        private localStorageService: LocalStorageService,) {
        this.id = this.activateRouter.snapshot.paramMap.get('uuid');
    }

    public async ngOnInit() {
        this.isLoading = true;
        try {
            this.user$ = of(this.localStorageService.getData(this.id!))
            this.isLoading = false;
        } catch (e) {
            console.error(e)
        }
    }

    public ngOnDestroy() {
        this.localStorageService.clearData(this.id!)
    }

    public backClicked() {
        this.location.back();
    }
}
