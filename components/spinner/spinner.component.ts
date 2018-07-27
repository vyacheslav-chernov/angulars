import { Component } from '@angular/core';

@Component({
    selector: 'hc-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent{

    visible: boolean;
    overkill: boolean;

    show() {

        this.visible = !(this.overkill = false);

    }

    hide() {
        this.overkill = this.visible = false;
    }

    showModal () {
        this.overkill = this.visible = true;
    }

}