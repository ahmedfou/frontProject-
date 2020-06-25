import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from '../class/test';
import {TestWebService} from "../class/TestWebService";

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient) {
    }


    getAllTest(): Observable<Test[]> {
        return this.http.get<Test[]>('http://localhost:8080/tests/getAllTest');
    }


    ajouterTest(test: Test): Observable<Test> {
        return this.http.post<Test>('http://localhost:8080/tests/createTest', test);
    }

    getTestById(id: number): Observable<Test> {
        return this.http.get<Test>('http://localhost:8080/tests/getTestById/' + id);
    }

    deleteTest(idTest: number): Observable<any> {
        return this.http.delete('http://localhost:8080/tests/deleteTest/' + idTest);
    }
    updateTest(test: Test): Observable<any> {
            return this.http.put('http://localhost:8080/tests/updateTest', test);
    }



    ////////



    getAllTestWebService(): Observable<TestWebService[]> {
        return this.http.get<TestWebService[]>('http://localhost:8080/testWebServices/getAllTestWebService');
    }


    ajouterTestWebService(testWebService: TestWebService): Observable<TestWebService> {
        return this.http.post<TestWebService>('http://localhost:8080/testWebServices/createTestWebService', testWebService);
    }

    getTestWebServiceById(id: number): Observable<TestWebService> {
        return this.http.get<TestWebService>('http://localhost:8080/testWebServices/getTestWebServiceById/' + id);
    }

    deleteTestWebService(idTest: number): Observable<any> {
        return this.http.delete('http://localhost:8080/testWebServices/deleteTestWebService/' + idTest);
    }
    updateTestWebService(testWebService: TestWebService): Observable<any> {
        return this.http.put('http://localhost:8080/testWebServices/updateTestWebService', testWebService);
    }


}
