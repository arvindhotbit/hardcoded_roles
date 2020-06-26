import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import {TableDataService} from '../shared/table-data.service';
import {Neutralscheme} from '../shared/tabular';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { element } from 'protractor';
@Component({
  selector: 'app-neutral-words',
  templateUrl: './neutral-words.component.html',
  styleUrls: ['./neutral-words.component.css'],
  providers: [TableDataService]
})
export class NeutralWordsComponent implements OnInit {


  public showdata:any = [];
  p:number =1;
  nsn = true;
  zoneid = true;
  noiseword = true;
  selectedNeutralRow : Neutralscheme;
  public selectedAll = "";
  public SelectedIDs:any = [];
  checkbox: boolean;
  filteredArray : any = [];

  constructor(public _tableservice:TableDataService, private toastr: ToastrService) {
   
 
     }

  ngOnInit(): void {
    
    this.resetForm();
    this.refreshEmployeeList();
   
  }

  addform = () =>{

    $("#addForm").toggle();
  }



 resetForm(form?: NgForm) {
   if (form)
  form.reset();
     this._tableservice.selectedneu = {
      ZONE_ID: "",
      NOISE_WORD: "",
      REF_KEY: "",
      MAKER_USER_ID: "",
      CHECKER_USER_ID: "",
      MAKER_USER_NM: "",
      CHECKER_USER_NM: "",
      MAKER_COMMENT: "",
      CHECKER_COMMENT: "",
      MAKER_DTTM: "",
      CHECKER_DTTM: "",
      MAKER_DATE: "",
      CHECKER_DATE: "",
      CHANGE_TYPE: "",
      UPDATE_VERSION: "",
      VALIDATION_STATUS: "",
      VALID_FROM_DTTM: "",
      VALID_TO_DTTM:"",
 
   }
  }

   selectID(id, isSelected){  
    
    if(isSelected === true)
    this.SelectedIDs.push(id);
    else
    {
      this.SelectedIDs.pop(id);
    }
    console.log("true" + this.SelectedIDs);
    console.log("false" + this.filteredArray);
 
    // console.log("id"+id); 
    // console.log("this.SelectedIDs.length" + this.SelectedIDs.length);
    // if(isChecked){
    //   this.SelectedIDs.push(id);
    // }
    // else
    // {
    //   const index = this.SelectedIDs.controls.findIndex(x => x.value === id);
    //   this.SelectedIDs.removeAt(index);
    // }
    // console.log("this.SelectedIDs" + this.SelectedIDs);
    // this.SelectedIDs.push(id);
        // if(this.SelectedIDs.length >0){
        //   this.SelectedIDs.forEach(element => {
        //     console.log("element"+element);
        //     if(element.value != id ){

        //       console.log("hello");
        //       this.SelectedIDs.push(id);
        //     }    
        // });
        // this.SelectedIDs.filter(id)


        // this.SelectedIDs = this.SelectedIDs.filter(function(item, pos){
        //   return this.SelectedIDs.indexOf(item)== pos; 
        // });
      // }
      //   else{
      //     this.SelectedIDs.push(id);

      //   }
      //   console.log("this.SelectedIDs" + this.SelectedIDs);
    // this.SelectedIDs.forEach(function (obj) {
    //   this.SelectedIDs= this.SelectedIDs.filter(item=> item.id!== obj.id);
    // });
    // console.log(this.SelectedIDs);
  }
      
    

 

  submitform(form: NgForm){

    if (form.value.REF_KEY == "") {
  this._tableservice.neutrallistpost(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshEmployeeList();
    this.toastr.success('data inserted successfully', 'Neutral Words');

  });
  }

  else {
  this._tableservice.neutrallistput(form.value).subscribe((res) => {
    this.resetForm(form);
    this.refreshEmployeeList();
    this.toastr.info('data update successfully', 'Neutral Words');
  });

  }
}
refreshEmployeeList(){
  this._tableservice.neutrallistpage()
  .subscribe(
    data => this.showdata = data,
    error => console.log('oops', error)
  );
}

onEdit(neuscheme: Neutralscheme) {

  this._tableservice.selectedneu = neuscheme;
  this.selectedNeutralRow = neuscheme;
}

// onDelete(REF_KEY: string, form: NgForm) {
//   if (confirm('Are you sure to delete this record ?') == true) {
//     this._tableservice.neutrallistdelete(REF_KEY).subscribe((res) => {
//       this.refreshEmployeeList();
//       this.resetForm(form);
//       this.toastr.warning('Data Delete Successfully', 'Neutral Words');
//     });
//   }
// }


deleteSelected(form: NgForm){

  this.SelectedIDs.forEach( (obj) => {
    this._tableservice.neutrallistdelete(obj).subscribe((res) => {
      this.refreshEmployeeList();
      this.resetForm(form);
      this.toastr.warning('Data Delete Successfully', 'Neutral Words');
    });
});


}
}
