import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveLayout } from './services/responsiveLayout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private responsiveLayout: BreakpointObserver,
    private responsiveLayoutService: ResponsiveLayout) { }

  ngOnInit() {
    this.responsiveLayout.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
      .subscribe(result => {
        const layoutBreakpoints = result.breakpoints;
        if (layoutBreakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches handset portait ");

          this.responsiveLayoutService.toggleLayoutHandsetPortrait(true);
          this.responsiveLayoutService.toggleLayoutHandsetLandscape(false);
          this.responsiveLayoutService.toggleLayoutLarge(false);
          this.responsiveLayoutService.toggleLayoutMedium(false);
        }
        else if (layoutBreakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");

          this.responsiveLayoutService.toggleLayoutHandsetPortrait(false);
          this.responsiveLayoutService.toggleLayoutHandsetLandscape(true);
          this.responsiveLayoutService.toggleLayoutLarge(false);
          this.responsiveLayoutService.toggleLayoutMedium(false);
        }
        else if (layoutBreakpoints[Breakpoints.Large]) {
          console.log("screens matches Large ");

          this.responsiveLayoutService.toggleLayoutHandsetPortrait(false);
          this.responsiveLayoutService.toggleLayoutHandsetLandscape(false);
          this.responsiveLayoutService.toggleLayoutLarge(true);
          this.responsiveLayoutService.toggleLayoutMedium(false);
        }
        else if (layoutBreakpoints[Breakpoints.Medium]) {
          console.log("screens matches Medium ");

          this.responsiveLayoutService.toggleLayoutHandsetPortrait(false);
          this.responsiveLayoutService.toggleLayoutHandsetLandscape(false);
          this.responsiveLayoutService.toggleLayoutLarge(false);
          this.responsiveLayoutService.toggleLayoutMedium(true);
        }
      })
  }
}
