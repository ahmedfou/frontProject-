import {Component, OnInit} from '@angular/core';
import {Test} from "../class/Test";
import {TestWebService} from "../class/TestWebService";
import {TestService} from "../service/test.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-execute',
    templateUrl: './execute.component.html',
    styleUrls: ['./execute.component.css']
})
export class ExecuteComponent implements OnInit {

    listTests: Test[] = [];
    listTestWebSericess: TestWebService[] = [];
    test: Test;
    testWebService: TestWebService;
    isTestWebService = false;

    // ajouter service tostr
    constructor(private testService: TestService,
                private toastr: ToastrService) {
    }

    getTestById(id: number) {
        this.testService.getTestById(id)
            .subscribe((test: Test) => {
                this.test = test;
            })
    }


    getTestWebServiceById(id: number) {
        this.testService.getTestWebServiceById(id)
            .subscribe((testWebService: TestWebService) => {
                this.testWebService = testWebService;
            })
    }


    ngOnInit() {

        this.testService.getAllTest()
            .subscribe((tests: Test[]) => {
                this.listTests = tests;
            });

        this.testService.getAllTestWebService()
            .subscribe((testWebService: TestWebService[]) => {
                this.listTestWebSericess = testWebService;
            });
    }


}
