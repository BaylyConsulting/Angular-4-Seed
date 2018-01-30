import { Component, OnInit } from '@angular/core';

import { ReleaseModel } from '../../models/release.model';
import { ReleaseService } from '../../services/release.service';

@Component({
  selector: 'app-root',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionViewComponent implements OnInit {
  public releases: ReleaseModel[];
  public title = 'Version View Component';

  constructor(private service: ReleaseService) { }

  public ngOnInit() {
    this.service.getReleaseNotes().subscribe((releases) => {
      this.releases = releases;
    });
  }

}
