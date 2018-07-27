import {Directive, HostListener, HostBinding, Input} from '@angular/core';

// *********************************************************************************
// The Directive implemets functions for drag&drop files to transfering by component
// How it use
// <div 
//      appDnd 
//      [dragover]  = customDragOverFunc
//      [dragleave] = customDragLeaveFunc
//      [drop]      = customDropFunc>
//</div>
// *********************************************************************************

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Input() dragover: any;
  @Input() dragleave: any;
  @Input() drop: any;


  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    if (this.dragover) this.dragover(evt);
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    if (this.dragleave) this.dragleave(evt);
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
        if (this.drop) this.drop(files);
    }

  }

}
