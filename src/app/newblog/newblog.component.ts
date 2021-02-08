import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

  err=""
  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('clicked');
    console.log(this.blogForm.value);
    this.http.post('http://localhost:3000/create/Blog',this.blogForm.value).subscribe((responseData) => {
      console.log(responseData);
      this.err=""
      this.router.navigateByUrl('/');
    },(err) => {
      console.log("Error hai");
      this.err="Please login to post your blog"
    });
  }

}
