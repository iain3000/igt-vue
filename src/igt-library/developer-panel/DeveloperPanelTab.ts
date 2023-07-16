import {AbstractField} from "@/igt-library/developer-panel/fields/AbstractField";

export class DeveloperPanelTab {
    label: string;
    children: AbstractField[];


    constructor(label: string, children: AbstractField[]) {
        this.label = label;
        this.children = children;
    }

    isEmpty(): boolean {
        return this.children.length == 0;
    }
}