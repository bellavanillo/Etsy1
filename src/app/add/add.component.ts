import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ListingService]
})
export class AddComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }
  submitForm(name: string, imageUrl: string, description: string) {
      let newListing: Listing = new Listing(name, imageUrl, description);
      this.listingService.addListing(newListing);
    }
}
