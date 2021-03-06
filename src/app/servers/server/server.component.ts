import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // for loading asynchronous data
    this.activeRoute.data
      .subscribe((data: Data) => {
        this.server = data['server'];
      });

    // const id = +this.activeRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.activeRoute.params
    //   .subscribe((params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   });
  }

  onEdit() {
    // console.log(this.activeRoute);
    this.router.navigate(['edit'], {relativeTo: this.activeRoute, queryParamsHandling: 'preserve'});
  }

}
