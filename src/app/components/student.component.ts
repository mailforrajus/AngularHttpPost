import { Component, OnInit } from "@angular/core";
import {  HttpErrorResponse } from "@angular/common/http";
import {  studentCService } from "../services/student.service";
import {  FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {  Validators} from "@angular/forms";
@Component({
    selector:"student",
    templateUrl:"student.component.html"
})
export class studentComponent implements OnInit{
    private result:any;
    private studentSubscribe:any;

    userData:FormGroup;

    constructor(private _service:studentCService, private _formBuilder:FormBuilder){}

    ngOnInit(){
        this.userData=this._formBuilder.group({
            studentId:[null,[Validators.required]],
            studentName:['madhurajuBujji',[Validators.required]]
        })
    }

    public register():any{
     console.log(this.userData)
        this.studentSubscribe=this._service.postEmp(this.userData.value).subscribe(this._successCallBack, this._errorCallBack);
    };

        public _successCallBack=(res):any=>{
            this.result=res;
        };

        public _errorCallBack=(err:HttpErrorResponse):any=>{
            if(err.error instanceof Error){
                console.log("client side errors");
            }else{
                console.log("server side errors.....!!");
            }
        };
};