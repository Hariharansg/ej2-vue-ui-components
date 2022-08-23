import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class StackedHeadersDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (gh) {
            let h: any = gh || createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (gh && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-stackedHeaders';
    }
}
export const StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install(Vue: any) {
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
}

/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board. 
 * It must be contained in a Kanban component(`ejs-kanban`). 
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class StackedHeaderDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stackedHeader';
    }
}
export const StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install(Vue: any) {
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
}