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

export class StockChartSeriesCollectionDirective extends vueImport {
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
        return 'e-stockchart-series-collection';
    }
}
export const StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install(Vue: any) {
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartSeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-series';
    }
}
export const StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install(Vue: any) {
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
}