import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { Toolbar } from '@syncfusion/ej2-navigations';
import { ItemsDirective, ItemDirective, ItemsPlugin, ItemPlugin } from './items.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width', 'beforeCreate', 'clicked', 'created', 'destroyed'];
export const modelProps: string[] = [];


/**
 * Represents the VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
@EJComponentDecorator({
    props: properties
})

export class ToolbarComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-items":"e-item"};
    public tagNameMapper: Object = {};
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.ej2Instances = new Toolbar({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
         return createElement('div', (this as any).$slots.default);
    }
    public custom(): void {
        this.updated();
    }
    
    public addItems(items: Object[], index?: number): void {
        return this.ej2Instances.addItems(items, index);
    }

    public disable(value: boolean): void {
        return this.ej2Instances.disable(value);
    }

    public enableItems(items: number | Object | Object, isEnable?: boolean): void {
        return this.ej2Instances.enableItems(items, isEnable);
    }

    public hideItem(index: number | Object | Object, value?: boolean): void {
        return this.ej2Instances.hideItem(index, value);
    }

    public refreshOverflow(): void {
        return this.ej2Instances.refreshOverflow();
    }

    public removeItems(args: number | Object | Object | Object | Object[]): void {
        return this.ej2Instances.removeItems(args);
    }
}

export const ToolbarPlugin = {
    name: 'ejs-toolbar',
    install(Vue: any) {
        Vue.component(ToolbarPlugin.name, ToolbarComponent);
        Vue.component(ItemPlugin.name, ItemDirective);
        Vue.component(ItemsPlugin.name, ItemsDirective);

    }
}
