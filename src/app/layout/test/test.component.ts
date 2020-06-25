import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {TestService} from '../service/test.service';
import {Test} from '../class/test';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {TestWebService} from "../class/TestWebService";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    animations: [routerTransition()]
})
export class TestComponent implements OnInit {

    listTests: Test[] = [];
    listTestWebSericess: TestWebService[] = [];
    test: Test;
    testWebService: TestWebService;
    closeResult: string;
    isTestWebService = false;
    testForm: FormGroup;
    testWebServiceForm: FormGroup;

    get type() {
        return this.testForm.get('type');
    }

    get numeroPort() {
        return this.testForm.get('numeroPort');
    }

    get base() {
        return this.testForm.get('base')
    }

    get nomServeur() {
        return this.testForm.get('nomServeur')
    }


    get name() {
        return this.testWebServiceForm.get('name');
    }

    get reponse() {
        return this.testWebServiceForm.get('reponse');
    }

    get request() {
        return this.testWebServiceForm.get('request')
    }


    // ajouter service tostr
    constructor(private testService: TestService,
                private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private toastr: ToastrService) {
    }

    getTestById(id: number, content) {
        this.testService.getTestById(id)
            .subscribe((test: Test) => {
                this.test = test;
                this.setTest();
                this.open(content);
            })
    }


    getTestWebServiceById(id: number, content) {
        this.testService.getTestWebServiceById(id)
            .subscribe((testWebService: TestWebService) => {
                this.testWebService = testWebService;
                this.setTestWebService();
                this.open(content);
            })
    }


    setTest() {
        this.testForm.patchValue({
            type: this.test.type,
            numeroPort: this.test.numeroPort,
            base: this.test.base,
            nomServeur: this.test.nomServeur,
        });
    }


    setTestWebService() {
        this.testWebServiceForm.patchValue({
            name: this.testWebService.name,
            request: this.testWebService.request,
            reponse: this.testWebService.reponse,
        });
    }

    restTestForm() {
        this.testForm.patchValue({
            type: '',
            numeroPort: '',
            base: '',
            nomServeur: ''
        });
    }


    restTestWebServiceForm() {
        this.testWebServiceForm.patchValue({
            name: '',
            request: '',
            reponse: '',
        });
    }

    ngOnInit() {
        this.testForm = this.formBuilder.group({
            type: ['', [Validators.required]],
            numeroPort: ['', [Validators.required]],
            base: ['', [Validators.required]],
            nomServeur: ['', [Validators.required]],
        });


        this.testWebServiceForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            request: ['', [Validators.required]],
            reponse: ['', [Validators.required]],
        });

        this.testService.getAllTest()
            .subscribe((tests: Test[]) => {
                this.listTests = tests;
            });


        this.testService.getAllTestWebService()
            .subscribe((testWebService: TestWebService[]) => {
                this.listTestWebSericess = testWebService;
            });
    }


    addTest() {
        const test: Test = new Test();
        test.type = this.type.value;
        test.numeroPort = this.numeroPort.value;
        test.base = this.base.value;
        test.nomServeur = this.nomServeur.value

        if (this.test) {
            test.id = this.test.id;
            this.testService.updateTest(test)
                .subscribe(() => {
                    this.toastr.success('Mise a jour d\'utilisateur ' + test.type, 'Modification réussie');
                    //ajouter tostr messg
                    this.testService.getAllTest()
                        .subscribe((tests: Test[]) => {
                            this.listTests = tests;
                            this.restTestForm();
                        });
                }, err => {
                    this.toastr.error('Erreur  ', 'Modification impossible!');
                    // ajouter partie error

                });
        } else {

            this.testService.ajouterTest(test)
                .subscribe(() => {
                        //ajouter tostr messg
                        this.testService.getAllTest()
                            .subscribe((tests: Test[]) => {
                                this.listTests = tests;
                                this.restTestForm()
                            });
                    }
                    // ajouter partie error
                );
        }

    }



    addTestWebService() {
        const testWebService: TestWebService = new TestWebService();
        testWebService.name = this.name.value;
        testWebService.reponse = this.reponse.value;
        testWebService.request = this.request.value;

        if (this.testWebService) {
            testWebService.id = this.testWebService.id;
            this.testService.updateTestWebService(testWebService)
                .subscribe(() => {
                    this.toastr.success('Mise a jour de test  ' + testWebService.name, 'Modification réussie');
                    //ajouter tostr messg
                    this.testService.getAllTestWebService()
                        .subscribe((testWebServices: TestWebService[]) => {
                            this.listTestWebSericess = testWebServices;
                            this.restTestWebServiceForm();
                        });
                }, err => {
                    this.toastr.error('Erreur  ', 'Modification impossible!');
                    // ajouter partie error

                });
        } else {

            this.testService.ajouterTestWebService(testWebService)
                .subscribe(() => {
                        //ajouter tostr messg
                        this.testService.getAllTestWebService()
                            .subscribe((testWebServices: TestWebService[]) => {
                                this.listTestWebSericess = testWebServices;
                                this.restTestWebServiceForm();
                            });
                    }
                    // ajouter partie error
                );
        }

    }


    deleteTest(testId) {
        this.testService.deleteTest(testId)
            .subscribe(() => {
                //ajouter tostr messg
                this.testService.getAllTest()
                    .subscribe((tests: Test[]) => {
                        this.listTests = tests;
                    });
            });
    }


    deleteTestWebService(testWebServiceId) {
        this.testService.deleteTestWebService(testWebServiceId)
            .subscribe(() => {
                //ajouter tostr messg
                this.testService.getAllTestWebService()
                    .subscribe((testWebServices: TestWebService[]) => {
                        this.listTestWebSericess = testWebServices;
                    });
            });
    }


    // to open  the modal
    open(content) {
        this.modalService.open(content).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    // to close the model
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}
