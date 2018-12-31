import { Injectable  } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class studentCService{

    constructor(private _http:HttpClient){};

    public postEmp(studentData:any):any{
        return this._http.post("http://localhost:8080/addStudentDetails/student",studentData);
    };
};  
