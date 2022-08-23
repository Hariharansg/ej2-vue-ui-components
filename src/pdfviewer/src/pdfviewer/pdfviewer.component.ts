import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { PdfViewer } from '@syncfusion/ej2-pdfviewer';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
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

export class PdfViewerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new PdfViewer({});
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
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public addAnnotation(annotation: any): void {
        return this.ej2Instances.addAnnotation(annotation);
    }

    public clearFormFields(formField?: any): void {
        return this.ej2Instances.clearFormFields(formField);
    }

    public convertClientPointToPagePoint(clientPoint: Object, pageNumber: number): Object {
        return this.ej2Instances.convertClientPointToPagePoint(clientPoint, pageNumber);
    }

    public convertPagePointToClientPoint(pagePoint: Object, pageNumber: number): Object {
        return this.ej2Instances.convertPagePointToClientPoint(pagePoint, pageNumber);
    }

    public convertPagePointToScrollingPoint(pagePoint: Object, pageNumber: number): Object {
        return this.ej2Instances.convertPagePointToScrollingPoint(pagePoint, pageNumber);
    }

    public deleteAnnotations(): void {
        return this.ej2Instances.deleteAnnotations();
    }

    public download(): void {
        return this.ej2Instances.download();
    }

    public exportAnnotation(annotationDataFormat?: Object): void {
        return this.ej2Instances.exportAnnotation(annotationDataFormat);
    }

    public exportAnnotationsAsBase64String(annotationDataFormat: Object): Object {
        return this.ej2Instances.exportAnnotationsAsBase64String(annotationDataFormat);
    }

    public exportAnnotationsAsObject(): Object {
        return this.ej2Instances.exportAnnotationsAsObject();
    }

    public exportFormFields(path?: string): void {
        return this.ej2Instances.exportFormFields(path);
    }

    public exportFormFieldsAsObject(): Object {
        return this.ej2Instances.exportFormFieldsAsObject();
    }

    public focusFormField(field: any): void {
        return this.ej2Instances.focusFormField(field);
    }

    public getPageNumberFromClientPoint(clientPoint: Object): number {
        return this.ej2Instances.getPageNumberFromClientPoint(clientPoint);
    }

    public importAnnotation(importData: any, annotationDataFormat?: Object): void {
        return this.ej2Instances.importAnnotation(importData, annotationDataFormat);
    }

    public importFormFields(formFields: any): void {
        return this.ej2Instances.importFormFields(formFields);
    }

    public load(document: string, password: string): void {
        return this.ej2Instances.load(document, password);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public resetFormFields(): void {
        return this.ej2Instances.resetFormFields();
    }

    public retrieveFormFields(): Object[] {
        return this.ej2Instances.retrieveFormFields();
    }

    public saveAsBlob(): Object {
        return this.ej2Instances.saveAsBlob();
    }

    public setJsonData(jsonData: any): void {
        return this.ej2Instances.setJsonData(jsonData);
    }

    public showNotificationPopup(errorString: string): void {
        return this.ej2Instances.showNotificationPopup(errorString);
    }

    public undo(): void {
        return this.ej2Instances.undo();
    }

    public unload(): void {
        return this.ej2Instances.unload();
    }

    public updateFormFields(formFields: any): void {
        return this.ej2Instances.updateFormFields(formFields);
    }

    public updateFormFieldsValue(fieldValue: any): void {
        return this.ej2Instances.updateFormFieldsValue(fieldValue);
    }

    public updateViewerContainer(): void {
        return this.ej2Instances.updateViewerContainer();
    }

    public zoomToRect(rectangle: Object): void {
        return this.ej2Instances.zoomToRect(rectangle);
    }
}

export const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue: any) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);

    }
}