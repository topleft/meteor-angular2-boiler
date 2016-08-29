import { Control } from '@angular/common';


interface Validator {
   (c:Control): {[error: string]:any};
}
