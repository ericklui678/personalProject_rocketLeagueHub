import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsernameService {
    private subject = new Subject<any>();

    setName(name: string) {
        this.subject.next(name);
    }

    getName(): Observable<any> {
        return this.subject.asObservable();
    }

    clearName() {
        this.subject.next();
    }
}