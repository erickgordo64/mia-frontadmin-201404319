import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users = null;
  user = null;
  id: string;
 
  loading=true;

  uploadedFiles: Array<File>;

  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
    this.user = this.accountService.userValue;
  }

  ngOnInit() {

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    console.log('llame al cargar');
    let formData=new FormData();
    for(let i=0; i<this.uploadedFiles.length; i++){
      formData.append("upload[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    this.accountService.addArchivo(formData)
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('User added successfully', { keepAfterRouteChange: true });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });

    // this.accountService.addCarga(this.id, this.loading)
    // .pipe(first())
    // .subscribe({
    //     next: () => {
    //         this.alertService.success('User added successfully', { keepAfterRouteChange: true });
    //         this.router.navigate(['../'], { relativeTo: this.route });
    //     },
    //     error: error => {
    //         this.alertService.error(error);
    //         this.loading = false;
    //     }
    // });


  }

  onFilechange(e){
      console.log('Filechange',e);
      this.uploadedFiles = e.target.files;
  }
}