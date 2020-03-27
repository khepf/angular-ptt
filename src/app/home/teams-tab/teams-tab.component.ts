import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from '../../teams/team.model';
import { TeamsService } from '../../teams/teams.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-teams-tab',
  templateUrl: './teams-tab.component.html',
  styleUrls: ['./teams-tab.component.css']
})
export class TeamsTabComponent implements OnInit, OnDestroy {
  displayedColumns = ["teamName"];
  dataSource = new MatTableDataSource<Team>();
  private tmChangedSubscription: Subscription;
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.tmChangedSubscription = this.teamsService.teamsChanged.subscribe((teams: Team[]) => {
      this.dataSource.data = teams;
    });
   this.teamsService.fetchTeams();
  }

  ngOnDestroy() {
    this.tmChangedSubscription.unsubscribe();
  }

}
