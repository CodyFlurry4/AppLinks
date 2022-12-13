import { Component, Input, OnInit } from '@angular/core';
// const ogs = require('open-graph-scraper');
import { CartsService } from 'src/app/shared/services/carts.service';
import { IMetaData } from 'src/app/shared/models/meta-data.model';

@Component({
    selector: 'app-links',
    templateUrl: './app-links.component.html',
    styleUrls: ['./app-links.component.scss']
})
export class AppLinksComponent implements OnInit {
    @Input() 
    urls?:string[];

    constructor(private cartsService: CartsService){}
    
    loading: boolean = true
    links? : IMetaData[]
    
    ngOnInit(): void {
        this.cartsService.getLinkMetaData({
            "urls": this.urls            
        }).subscribe(data => {

            this.links = data
            this.loading = false
        })
        
    }

    navigateToURL(link:string): void{
        window.open(link, '_blank')
    }
    
}