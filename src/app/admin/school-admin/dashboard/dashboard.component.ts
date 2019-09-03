import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { sync } from 'glob';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

data:any ;
filter:any;
sycToggle : Boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit() {

   this.restapiData().then((res)=>{
    this.sycToggle = true;
    this.data = res;
   });
  }

  restapiData(){
    return new Promise((resolve, reject)=>{
      try{
        this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res)=>{
        // console.log(res);
        resolve(res);
      });
      }catch(err){
        reject(err);
      }
    })
  }

}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name:'search'
// })
// export class SearchFilter implements PipeTransform{
//   transform(data){
//     return data.filter()
//   }
// }





