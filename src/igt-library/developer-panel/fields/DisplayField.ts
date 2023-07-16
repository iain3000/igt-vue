import {AbstractField} from "@/igt-library/developer-panel/fields/AbstractField";

export class DisplayField extends AbstractField {

    constructor(propertyName: string, label?: string) {
        super(propertyName, label);
        this.setComponentName('igt-display-field');
    }

}