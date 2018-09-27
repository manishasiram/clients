import { Component, OnInit, Inject, Input, SimpleChanges, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';


export interface DialogData {
  tierName: string;
}

@Component({
  selector: 'app-cat-tier-fees',
  templateUrl: './cat-tier-fees.component.html',
  styleUrls: ['./cat-tier-fees.component.css']
})
export class CatTierFeesComponent implements OnInit,OnChanges  {

  tierName: string;
  @Input('clientName') clientName: string;

  constructor(public dialog: MatDialog,private httpClient : HttpClient) {

  }
  ngOnInit() {
    
    console.log(this.clientName);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "catTierFees")
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { animal: this.tierName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tierName = result;
      console.log(this.tierName + "cattiername");
      console.log('Form Submitted!', this.tierName);
      const DATA = {
        'catTier':this.tierName
      }

      
    this.httpClient.post('http://127.0.0.1:5000/addCatTierFees',DATA,{params:{data:this.clientName}}).subscribe(data => {
          console.log(data);
          console.log("hello");
        })

    });
    
  }
  onAdd(){
    alert("Updated Successfully");
    

  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}