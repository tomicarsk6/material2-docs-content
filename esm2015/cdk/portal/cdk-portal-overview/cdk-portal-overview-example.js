import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
const _c0 = ["templatePortalContent"];
const _c1 = ["domPortalContent"];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello, this is a template portal");
} }
/**
 * @title Portal overview
 */
export class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
}
CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
CdkPortalOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domPortalContent = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"], ["domPortalContent", ""]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "The portal outlet is below:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener() { return ctx.selectedPortal = ctx.componentPortal; });
        i0.ɵɵtext(7, "Render component portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener() { return ctx.selectedPortal = ctx.templatePortal; });
        i0.ɵɵtext(9, "Render template portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_10_listener() { return ctx.selectedPortal = ctx.domPortal; });
        i0.ɵɵtext(11, "Render DOM portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", null, 4);
        i0.ɵɵtext(14, "Hello, this is a DOM portal");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
    } }, directives: [i1.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent']
        }], domPortalContent: [{
            type: ViewChild,
            args: ['domPortalContent', { static: true }]
        }] }); })();
export class ComponentPortalExample {
}
ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
ComponentPortalExample.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Hello, this is a component portal");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0phLGdEQUFnQzs7QURNcEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUksQ0FBQztJQUU1RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQ3RDLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnR0FsQlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7Ozs7Ozs7O1FDbEJyQywwQkFBSTtRQUFBLDJDQUEyQjtRQUFBLGlCQUFLO1FBQ3BDLDhCQUNFO1FBQUEseUZBQWdEO1FBQ2xELGlCQUFNO1FBQ04sMEhBQW9DO1FBRXBDLGlDQUFtRDtRQUEzQyxpSkFBMEM7UUFBQyx1Q0FBdUI7UUFBQSxpQkFBUztRQUNuRixpQ0FBa0Q7UUFBMUMsZ0pBQXlDO1FBQUMsc0NBQXNCO1FBQUEsaUJBQVM7UUFDakYsa0NBQTZDO1FBQXJDLDRJQUFvQztRQUFDLGtDQUFpQjtRQUFBLGlCQUFTO1FBRXZFLHFDQUF1QjtRQUFBLDRDQUEyQjtRQUFBLGlCQUFNOztRQVJ6QyxlQUFrQztRQUFsQyxvREFBa0M7O2tERGdCcEMsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzttRUFFcUMscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQUNhLGdCQUFnQjtrQkFBOUQsU0FBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0FBdUIvQyxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUFGdEIsaURBQWlDOztrREFFakMsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsbUNBQW1DO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIERvbVBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFBvcnRhbCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUG9ydGFsQ29udGVudCcpIHRlbXBsYXRlUG9ydGFsQ29udGVudDogVGVtcGxhdGVSZWY8dW5rbm93bj47XG4gIEBWaWV3Q2hpbGQoJ2RvbVBvcnRhbENvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgZG9tUG9ydGFsQ29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgc2VsZWN0ZWRQb3J0YWw6IFBvcnRhbDxhbnk+O1xuICBjb21wb25lbnRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxDb21wb25lbnRQb3J0YWxFeGFtcGxlPjtcbiAgdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG4gIGRvbVBvcnRhbDogRG9tUG9ydGFsPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChDb21wb25lbnRQb3J0YWxFeGFtcGxlKTtcbiAgICB0aGlzLnRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKFxuICAgICAgdGhpcy50ZW1wbGF0ZVBvcnRhbENvbnRlbnQsXG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgKTtcbiAgICB0aGlzLmRvbVBvcnRhbCA9IG5ldyBEb21Qb3J0YWwodGhpcy5kb21Qb3J0YWxDb250ZW50KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtcG9ydGFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZTogJ0hlbGxvLCB0aGlzIGlzIGEgY29tcG9uZW50IHBvcnRhbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSB7IH1cbiIsIjxoMj5UaGUgcG9ydGFsIG91dGxldCBpcyBiZWxvdzo8L2gyPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtcG9ydGFsLW91dGxldFwiPlxuICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJzZWxlY3RlZFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVQb3J0YWxDb250ZW50PkhlbGxvLCB0aGlzIGlzIGEgdGVtcGxhdGUgcG9ydGFsPC9uZy10ZW1wbGF0ZT5cblxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSBjb21wb25lbnRQb3J0YWxcIj5SZW5kZXIgY29tcG9uZW50IHBvcnRhbDwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSB0ZW1wbGF0ZVBvcnRhbFwiPlJlbmRlciB0ZW1wbGF0ZSBwb3J0YWw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gZG9tUG9ydGFsXCI+UmVuZGVyIERPTSBwb3J0YWw8L2J1dHRvbj5cblxuPGRpdiAjZG9tUG9ydGFsQ29udGVudD5IZWxsbywgdGhpcyBpcyBhIERPTSBwb3J0YWw8L2Rpdj5cbiJdfQ==