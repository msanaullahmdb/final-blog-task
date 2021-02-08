import { Component, OnInit } from '@angular/core';
import { EditblogService } from '../editblog.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  blog;
  id;
  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });
  constructor(private service: EditblogService,private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.blog=this.service.getSelectedCall()
    this.id = this.blog._id;
    this.blogForm.patchValue({
      title: this.blog.title,
      content: this.blog.content
      
    });
  }

  onSubmit(){
    console.log(this.blogForm.value)
    console.log(this.blogForm.value);
    this.http.patch('http://localhost:3000/edit/Blog/'+this.id,this.blogForm.value).subscribe((responseData) => {
      console.log(responseData);
      this.router.navigateByUrl('/');
    },(err) => {
      console.log("Error hai");
    });
  }

}
