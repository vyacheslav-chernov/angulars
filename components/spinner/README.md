
## Component for show material spinner by code call

### May be defined in component if needed manage through a code
@ViewChild('spinner') spinnerComponentLayer: SpinnerComponent;

### Use in code of a component
this.SpinnerComponent.show()      or this.SpinnerComponent.visible = true;
this.SpinnerComponent.showModal() or this.SpinnerComponent.visible = this.SpinnerComponent.overkill = true;
this.SpinnerComponent.hide()      or this.SpinnerComponent.visible = false;
this.showOverWidget()             or this.SpinnerComponent.visible = this.SpinnerComponent.overwidget = true;

### Inside HTML
<hc-spinner #spinner></hc-spinner> for @ViewChild('spinner')
<hc-spinner [visible]="boolean" [overkill]="boolean" [overwidget]="boolean"></hc-spinner> without @ViewChild('spinner')