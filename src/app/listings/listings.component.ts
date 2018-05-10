import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [ListingService]
})

export class ListingsComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;

  goToListing(clickedListing) {
    this.router.navigate(['listings', clickedListing.$key]);
  };

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

}
