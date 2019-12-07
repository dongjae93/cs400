import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import axios from 'axios';
import { JeopardyAPIService } from '../jeopardy-api.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  clues = [];
  constructor(
    private jeopardyService: JeopardyAPIService
  ) { }

  seedInputFormGroup = new FormGroup(
    {
      seed: new FormControl('', [Validators.required, Validators.minLength(1)])
    }
  )

  onSubmit() {
    this.jeopardyService.setClues(this.seedInputFormGroup.value.seed)
    .then(() => {
      console.log("clues set to: ", this.jeopardyService.getClues());
      this.clues = this.jeopardyService.getClues();
    })
  }

  ngOnInit() {
  }

}
