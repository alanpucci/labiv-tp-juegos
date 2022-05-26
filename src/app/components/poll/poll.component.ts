import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PollService } from 'src/app/services/poll/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  poll = new FormGroup({
    lastName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('',[Validators.pattern("^[0-9]*$"),Validators.required, Validators.min(18), Validators.max(99)]),
    cellPhone: new FormControl('', [Validators.pattern("^[0-9]*$"),Validators.required, Validators.maxLength(10)]),
    bestGame: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
  })

  constructor(private pollService:PollService, private modal:MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async submitPoll(){
    try{
      if(this.poll.valid){
        this.modal.closeAll();
        this.toastr.success("Encuesta registrada");
        await this.pollService.registerPoll(this.poll.value);
      }else{
        this.toastr.error("Todos los campos son requeridos");
      }
    } catch (error) {
      this.toastr.error("Ocurrio un error al registrar la encuesta");
    }
  }

}
