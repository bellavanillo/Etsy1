import { Component, Input, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ListingService]
})
export class EditComponent implements OnInit {
  @Input() selectedListing;
  constructor(private listingService: ListingService) { }

  ngOnInit() {

  }

}
