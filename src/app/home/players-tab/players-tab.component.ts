import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '../../players/player.model';
import { PlayersService } from '../../players/players.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-players-tab',
  templateUrl: './players-tab.component.html',
  styleUrls: ['./players-tab.component.css']
})
export class PlayersTabComponent implements OnInit, OnDestroy {
  displayedColumns = ["jerseyNumber", "firstName", "lastName"];
  dataSource = new MatTableDataSource<Player>();
  private plChangedSubscription: Subscription;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.plChangedSubscription = this.playersService.playersChanged.subscribe((players: Player[]) => {
      this.dataSource.data = players;
    });
    this.playersService.fetchPlayers();
  }

  ngOnDestroy() {
    this.plChangedSubscription.unsubscribe();
  }

}
