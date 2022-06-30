import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Menu } from '@syncfusion/ej2-navigations';
import { MenuItemsDirective, MenuItemDirective, MenuItemsPlugin, MenuItemPlugin } from './items.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'hoverDelay', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class MenuComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-menu-items":"e-"};
    public tagNameMapper: Object = {"e-menu-items":"e-items"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Menu({});
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
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('ul', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public close(): void {
        return this.ej2Instances.close();
    }

    public enableItems(items: string[], enable: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    }

    public getItemIndex(item: Object | string, isUniqueId?: boolean): number[] {
        return this.ej2Instances.getItemIndex(item, isUniqueId);
    }

    public hideItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.hideItems(items, isUniqueId);
    }

    public insertAfter(items: Object[], text: string, isUniqueId?: boolean): void {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    }

    public insertBefore(items: Object[], text: string, isUniqueId?: boolean): void {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    }

    public open(): void {
        return this.ej2Instances.open();
    }

    public removeItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }

    public setItem(item: Object, id?: string, isUniqueId?: boolean): void {
        return this.ej2Instances.setItem(item, id, isUniqueId);
    }

    public showItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.showItems(items, isUniqueId);
    }
}

export const MenuPlugin = {
    name: 'ejs-menu',
    install(Vue: any) {
        Vue.component(MenuPlugin.name, MenuComponent);
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);

    }
}