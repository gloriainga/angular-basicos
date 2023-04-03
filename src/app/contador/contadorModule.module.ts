import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}