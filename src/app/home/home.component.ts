import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditblogService } from '../editblog.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs;
  constructor(private http: HttpClient, private router:Router,private service: EditblogService) { }

  ngOnInit(): void {
    this.myProfile();
  }
  myProfile() {
    
    this.http.get('http://localhost:3000/fetch/Blog').subscribe((responseData) => {
    this.blogs = responseData;
    },(err) => {
      console.log("Error")

    });
  }

  DeleteBlog(i){
    console.log(this.blogs[i]._id)
    this.http.delete('http://localhost:3000/delete/Blog/'+this.blogs[i]._id).subscribe((responseData) => {
    console.log(responseData);
    location.reload()
    },(err) => {
      console.log("Error")

    });
  }

  EditBlog(i){
    this.service.BlogInfo(this.blogs[i]);
    this.router.navigateByUrl('/edit')
  }

}
