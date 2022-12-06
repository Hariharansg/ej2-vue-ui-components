import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Grid } from '@syncfusion/ej2-grids';
import { StackedColumnsDirective, StackedColumnDirective, StackedColumnsPlugin, StackedColumnPlugin } from './stacked-column.directive'
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin } from './aggregate-columns.directive'
import { AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin } from './aggregates.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowKeyboard', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'cssClass', 'currencyCode', 'currentAction', 'dataSource', 'detailTemplate', 'editSettings', 'ej2StatePersistenceVersion', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRtl', 'enableStickyHeader', 'enableVirtualMaskRow', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'loadingIndicator', 'locale', 'pageSettings', 'pagerTemplate', 'parentDetails', 'printMode', 'query', 'queryString', 'resizeSettings', 'rowDropSettings', 'rowHeight', 'rowRenderingMode', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenAdaptiveDialog', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDataStateChange', 'columnDeselected', 'columnDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'columnSelected', 'columnSelecting', 'commandClick', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'lazyLoadGroupCollapse', 'lazyLoadGroupExpand', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
export const modelProps: string[] = ['dataSource'];

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

/**
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
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

export class GridComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":{"e-column":{"e-stacked-columns":"e-stacked-column"}},"e-aggregates":{"e-aggregate":{"e-columns":"e-column"}}};
    public tagNameMapper: Object = {"e-stacked-columns":"e-columns"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Grid({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

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
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if(!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                } else {
                    if (eventName === 'change' || ((this as any).$props && !(this as any).$props.isLazyUpdate)) {
                        (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                        (this as any).$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler); 
        }
    }

    public render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public addRecord(data?: Object, index?: number): void {
        return this.ej2Instances.addRecord(data, index);
    }

    public addShimmerEffect(): void {
        return this.ej2Instances.addShimmerEffect();
    }

    public autoFitColumns(fieldNames?: string | string[]): void {
        return this.ej2Instances.autoFitColumns(fieldNames);
    }

    public batchAsyncUpdate(changes: Object): void {
        return this.ej2Instances.batchAsyncUpdate(changes);
    }

    public batchUpdate(changes: Object): void {
        return this.ej2Instances.batchUpdate(changes);
    }

    public calculatePageSizeByParentHeight(containerHeight: number | string): number {
        return this.ej2Instances.calculatePageSizeByParentHeight(containerHeight);
    }

    public clearCellSelection(): void {
        return this.ej2Instances.clearCellSelection();
    }

    public clearFiltering(fields?: string[]): void {
        return this.ej2Instances.clearFiltering(fields);
    }

    public clearGrouping(): void {
        return this.ej2Instances.clearGrouping();
    }

    public clearRowSelection(): void {
        return this.ej2Instances.clearRowSelection();
    }

    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public clearSorting(): void {
        return this.ej2Instances.clearSorting();
    }

    public closeEdit(): void {
        return this.ej2Instances.closeEdit();
    }

    public copy(withHeader?: boolean): void {
        return this.ej2Instances.copy(withHeader);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: Object, isBlob?: boolean): Object {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public dataReady(): void {
        return this.ej2Instances.dataReady();
    }

    public deleteRecord(fieldname?: string, data?: Object): void {
        return this.ej2Instances.deleteRecord(fieldname, data);
    }

    public deleteRow(tr: Object): void {
        return this.ej2Instances.deleteRow(tr);
    }

    public destroyTemplate(propertyNames?: string[], index?: any): void {
        return this.ej2Instances.destroyTemplate(propertyNames, index);
    }

    public detailCollapseAll(): void {
        return this.ej2Instances.detailCollapseAll();
    }

    public detailExpandAll(): void {
        return this.ej2Instances.detailExpandAll();
    }

    public editCell(index: number, field: string): void {
        return this.ej2Instances.editCell(index, field);
    }

    public enableToolbarItems(items: string[], isEnable: boolean): void {
        return this.ej2Instances.enableToolbarItems(items, isEnable);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: Object, isBlob?: boolean): Object {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public extendRequiredModules(modules: Object[]): void {
        return this.ej2Instances.extendRequiredModules(modules);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean | number[] | string[] | Object[] | boolean[] | null, predicate?: string, matchCase?: boolean, ignoreAccent?: boolean, actualFilterValue?: string, actualOperator?: string): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    }

    public getBatchChanges(): Object {
        return this.ej2Instances.getBatchChanges();
    }

    public getCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
    }

    public getColumnByField(field: string): Object {
        return this.ej2Instances.getColumnByField(field);
    }

    public getColumnByUid(uid: string): Object {
        return this.ej2Instances.getColumnByUid(uid);
    }

    public getColumnFieldNames(): string[] {
        return this.ej2Instances.getColumnFieldNames();
    }

    public getColumnHeaderByField(field: string): Object {
        return this.ej2Instances.getColumnHeaderByField(field);
    }

    public getColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getColumnHeaderByIndex(index);
    }

    public getColumnHeaderByUid(uid: string): Object {
        return this.ej2Instances.getColumnHeaderByUid(uid);
    }

    public getColumnIndexByField(field: string): number {
        return this.ej2Instances.getColumnIndexByField(field);
    }

    public getColumnIndexByUid(uid: string): number {
        return this.ej2Instances.getColumnIndexByUid(uid);
    }

    public getColumns(isRefresh?: boolean): Object[] {
        return this.ej2Instances.getColumns(isRefresh);
    }

    public getContent(): Object {
        return this.ej2Instances.getContent();
    }

    public getContentTable(): Object {
        return this.ej2Instances.getContentTable();
    }

    public getCurrentViewRecords(): Object[] {
        return this.ej2Instances.getCurrentViewRecords();
    }

    public getDataModule(): Object {
        return this.ej2Instances.getDataModule();
    }

    public getDataRows(): Object[] {
        return this.ej2Instances.getDataRows();
    }

    public getFilterUIInfo(): Object {
        return this.ej2Instances.getFilterUIInfo();
    }

    public getFilteredRecords(): Object[] | Object {
        return this.ej2Instances.getFilteredRecords();
    }

    public getFooterContent(): Object {
        return this.ej2Instances.getFooterContent();
    }

    public getFooterContentTable(): Object {
        return this.ej2Instances.getFooterContentTable();
    }

    public getForeignKeyColumns(): Object[] {
        return this.ej2Instances.getForeignKeyColumns();
    }

    public getFrozenDataRows(): Object[] {
        return this.ej2Instances.getFrozenDataRows();
    }

    public getFrozenLeftColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getFrozenLeftColumnHeaderByIndex(index);
    }

    public getFrozenLeftCount(): number {
        return this.ej2Instances.getFrozenLeftCount();
    }

    public getFrozenMode(): Object {
        return this.ej2Instances.getFrozenMode();
    }

    public getFrozenRightCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getFrozenRightCellFromIndex(rowIndex, columnIndex);
    }

    public getFrozenRightColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getFrozenRightColumnHeaderByIndex(index);
    }

    public getFrozenRightDataRows(): Object[] {
        return this.ej2Instances.getFrozenRightDataRows();
    }

    public getFrozenRightRowByIndex(index: number): Object {
        return this.ej2Instances.getFrozenRightRowByIndex(index);
    }

    public getFrozenRightRows(): Object[] {
        return this.ej2Instances.getFrozenRightRows();
    }

    public getFrozenRowByIndex(index: number): Object {
        return this.ej2Instances.getFrozenRowByIndex(index);
    }

    public getHeaderContent(): Object {
        return this.ej2Instances.getHeaderContent();
    }

    public getHeaderTable(): Object {
        return this.ej2Instances.getHeaderTable();
    }

    public getHiddenColumns(): Object[] {
        return this.ej2Instances.getHiddenColumns();
    }

    public getMediaColumns(): void {
        return this.ej2Instances.getMediaColumns();
    }

    public getMovableCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getMovableCellFromIndex(rowIndex, columnIndex);
    }

    public getMovableColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getMovableColumnHeaderByIndex(index);
    }

    public getMovableDataRows(): Object[] {
        return this.ej2Instances.getMovableDataRows();
    }

    public getMovableRowByIndex(index: number): Object {
        return this.ej2Instances.getMovableRowByIndex(index);
    }

    public getMovableRows(): Object[] {
        return this.ej2Instances.getMovableRows();
    }

    public getPager(): Object {
        return this.ej2Instances.getPager();
    }

    public getPrimaryKeyFieldNames(): string[] {
        return this.ej2Instances.getPrimaryKeyFieldNames();
    }

    public getRowByIndex(index: number): Object {
        return this.ej2Instances.getRowByIndex(index);
    }

    public getRowIndexByPrimaryKey(value: string | Object): number {
        return this.ej2Instances.getRowIndexByPrimaryKey(value);
    }

    public getRowInfo(target: Object | Object): Object {
        return this.ej2Instances.getRowInfo(target);
    }

    public getRows(): Object[] {
        return this.ej2Instances.getRows();
    }

    public getSelectedColumnsUid(): string[] {
        return this.ej2Instances.getSelectedColumnsUid();
    }

    public getSelectedRecords(): Object[] {
        return this.ej2Instances.getSelectedRecords();
    }

    public getSelectedRowCellIndexes(): Object[] {
        return this.ej2Instances.getSelectedRowCellIndexes();
    }

    public getSelectedRowIndexes(): number[] {
        return this.ej2Instances.getSelectedRowIndexes();
    }

    public getSelectedRows(): Object[] {
        return this.ej2Instances.getSelectedRows();
    }

    public getSummaryValues(summaryCol: Object, summaryData: Object): number {
        return this.ej2Instances.getSummaryValues(summaryCol, summaryData);
    }

    public getUidByColumnField(field: string): string {
        return this.ej2Instances.getUidByColumnField(field);
    }

    public getVisibleColumns(): Object[] {
        return this.ej2Instances.getVisibleColumns();
    }

    public goToPage(pageNo: number): void {
        return this.ej2Instances.goToPage(pageNo);
    }

    public groupCollapseAll(): void {
        return this.ej2Instances.groupCollapseAll();
    }

    public groupColumn(columnName: string): void {
        return this.ej2Instances.groupColumn(columnName);
    }

    public groupExpandAll(): void {
        return this.ej2Instances.groupExpandAll();
    }

    public hideColumns(keys: string | string[], hideBy?: string): void {
        return this.ej2Instances.hideColumns(keys, hideBy);
    }

    public hideScroll(): void {
        return this.ej2Instances.hideScroll();
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public isFrozenGrid(): boolean {
        return this.ej2Instances.isFrozenGrid();
    }

    public openColumnChooser(x?: number, y?: number): void {
        return this.ej2Instances.openColumnChooser(x, y);
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): Object {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshColumns(): void {
        return this.ej2Instances.refreshColumns();
    }

    public refreshHeader(): void {
        return this.ej2Instances.refreshHeader();
    }

    public removeMaskRow(): void {
        return this.ej2Instances.removeMaskRow();
    }

    public reorderColumnByIndex(fromIndex: number, toIndex: number): void {
        return this.ej2Instances.reorderColumnByIndex(fromIndex, toIndex);
    }

    public reorderColumnByTargetIndex(fieldName: string | string[], toIndex: number): void {
        return this.ej2Instances.reorderColumnByTargetIndex(fieldName, toIndex);
    }

    public reorderColumns(fromFName: string | string[], toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public reorderRows(fromIndexes: number[], toIndex: number): void {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex);
    }

    public saveCell(): void {
        return this.ej2Instances.saveCell();
    }

    public search(searchString: string): void {
        return this.ej2Instances.search(searchString);
    }

    public selectCell(cellIndex: Object, isToggle?: boolean): void {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    }

    public selectCells(rowCellIndexes: Object[]): void {
        return this.ej2Instances.selectCells(rowCellIndexes);
    }

    public selectCellsByRange(startIndex: Object, endIndex?: Object): void {
        return this.ej2Instances.selectCellsByRange(startIndex, endIndex);
    }

    public selectRow(index: number, isToggle?: boolean): void {
        return this.ej2Instances.selectRow(index, isToggle);
    }

    public selectRows(rowIndexes: number[]): void {
        return this.ej2Instances.selectRows(rowIndexes);
    }

    public selectRowsByRange(startIndex: number, endIndex?: number): void {
        return this.ej2Instances.selectRowsByRange(startIndex, endIndex);
    }

    public serverCsvExport(url: string): void {
        return this.ej2Instances.serverCsvExport(url);
    }

    public serverExcelExport(url: string): void {
        return this.ej2Instances.serverExcelExport(url);
    }

    public serverPdfExport(url: string): void {
        return this.ej2Instances.serverPdfExport(url);
    }

    public setCellValue(key: string | number, field: string, value: string | number | boolean | Object): void {
        return this.ej2Instances.setCellValue(key, field, value);
    }

    public setGridContent(element: Object): void {
        return this.ej2Instances.setGridContent(element);
    }

    public setGridContentTable(element: Object): void {
        return this.ej2Instances.setGridContentTable(element);
    }

    public setGridHeaderContent(element: Object): void {
        return this.ej2Instances.setGridHeaderContent(element);
    }

    public setGridHeaderTable(element: Object): void {
        return this.ej2Instances.setGridHeaderTable(element);
    }

    public setGridPager(element: Object): void {
        return this.ej2Instances.setGridPager(element);
    }

    public setRowData(key: string | number, rowData?: Object): void {
        return this.ej2Instances.setRowData(key, rowData);
    }

    public showAdaptiveFilterDialog(): void {
        return this.ej2Instances.showAdaptiveFilterDialog();
    }

    public showAdaptiveSortDialog(): void {
        return this.ej2Instances.showAdaptiveSortDialog();
    }

    public showColumns(keys: string | string[], showBy?: string): void {
        return this.ej2Instances.showColumns(keys, showBy);
    }

    public showMaskRow(axisDirection?: string, dialogElement?: Object): void {
        return this.ej2Instances.showMaskRow(axisDirection, dialogElement);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }

    public startEdit(): void {
        return this.ej2Instances.startEdit();
    }

    public ungroupColumn(columnName: string): void {
        return this.ej2Instances.ungroupColumn(columnName);
    }

    public updateCell(rowIndex: number, field: string, value: string | number | boolean | Object): void {
        return this.ej2Instances.updateCell(rowIndex, field, value);
    }

    public updateExternalMessage(message: string): void {
        return this.ej2Instances.updateExternalMessage(message);
    }

    public updateRow(index: number, data: Object): void {
        return this.ej2Instances.updateRow(index, data);
    }

    public updateRowValue(key: number, rowData: Object): void {
        return this.ej2Instances.updateRowValue(key, rowData);
    }
}

export const GridPlugin = {
    name: 'ejs-grid',
    install(Vue: any) {
        Vue.component(GridPlugin.name, GridComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
        Vue.component(AggregatePlugin.name, AggregateDirective);
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);

    }
}