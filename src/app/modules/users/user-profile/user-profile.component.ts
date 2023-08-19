import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "../../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {SharedComponentsModule} from "~shared/shared-components.module";
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  standalone: true,
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [
    SharedComponentsModule
  ],
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public user!: Partial<IUser> | null;
  public id: string | null;
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private activateRouter: ActivatedRoute,
    private localStorageService: LocalStorageService,) {
    this.id = this.activateRouter.snapshot.paramMap.get('uuid');
  }

  public async ngOnInit() {
    this.isLoading = true;

    this.user = this.localStorageService.getData(this.id!)
    this.isLoading = false;

    if (!this.user) {
      alert('User not found')
      await this.router.navigate(['/'])
    }
  }

  public ngOnDestroy() {
    this.localStorageService.clearData(this.id!)
  }

  public backClicked() {
    this.location.back();
  }
}
