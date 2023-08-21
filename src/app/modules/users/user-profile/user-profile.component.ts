import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {IUser} from "~interfaces/user";
import {LocalStorageService} from "~services/data/local-storage.service";
import {SharedComponentsModule} from "~shared/components/shared-components.module";


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
export class UserProfileComponent implements OnInit {
  public user$!: Observable<IUser | null>;
  public id: string | null;
  public isLoading: boolean = false;

  constructor(
    private location: Location,
    private activateRouter: ActivatedRoute,
    private localStorageService: LocalStorageService) {
    this.id = this.activateRouter.snapshot.paramMap.get('uuid');
  }

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;

    this.user$ =  this.localStorageService.getData(this.id!)
    this.isLoading = false;
  }

  public backClicked(): void {
    this.location.back();
  }
}
