import {Directive, HostBinding} from "@angular/core";

@Directive({
  // moduleId: "app/shared/blank-area/flex-spacer.directive",
  selector: '[ptfFlexSpacer]'
})
export class FlexSpacerDirective {
  @HostBinding('class.flex-spacer')
  hasFlex(): boolean { return true; }
}
