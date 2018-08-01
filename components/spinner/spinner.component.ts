import { Component, Input } from '@angular/core';

@Component({
    selector: 'hc-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent{

    @Input()
    set visible( visible:boolean){
        this.isVisible = visible;
    }
    private isVisible: boolean;

    @Input() 
    set overkill( overkill:boolean){
        this.isOverkill = overkill;
    }
    private isOverkill: boolean;

    @Input() 
    set overwidget( overwidget:boolean){
        this.isOverwidget = overwidget;
    }
    private isOverwidget: boolean;

    show( ) {
        this.isVisible = !(this.isOverkill = false);
    }

    showOverWidget( ) {
        this.isVisible = this.isOverwidget = !(this.isOverkill = false);
    }

    hide() {
        this.isOverkill = this.isVisible = this.isOverwidget = false;
    }

    showModal () {
        this.isVisible = this.isOverkill = true;
    }

}