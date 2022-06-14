export interface PrimenguiFormGroup {
  key?: string;
  label?: string;
  disabled?: boolean;
  controls?: PrimenguiFormControl[];
}

export interface PrimenguiFormControl {
  type?: PrimenguiFormControlType;

  label?: string;

  key?: string;

  value?: any;

  placeholder?: string;

  question?: string;

  layout?: number;

  desc?: string;

  [property: string]: any;
}

export type PrimenguiFormControlType =
  | 'number'
  | 'integer'
  | 'inputText'
  | 'inputTextArea'
  | 'dropdown'
  | 'button'
  | 'inputGroup'
  | 'autoComplete'
  | 'calendar'
  | 'inputArray'
  | 'inputSwitch'
  | 'checkboxGroup'
  | 'chips'
  | 'colorPicker'
  | 'editor'
  | 'listbox'
  | 'inputMask'
  | 'inputMulti'
  | 'inputArray'
  | 'image'
  | 'treeGroup'
  | 'fileUpload'
  | 'search'
  | 'empty'
  | 'select'
  | 'img'
  | 'inputNumber'
  | 'inputDecimal'
  | 'inputNumberFD'
  | 'datetime'
  | 'empty'
  | 'inputArrayCmd'
  | 'tableInput';
  export type PrimenguiFormTheme = 'light' | 'dark';
  export type PrimenguiFormGroupType = 'accordion' | 'tabs';



export const PrimenguiCalendarLang = {
  firstDayOfWeek: 0,
  dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
  dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  today: '今天',
  clear: '清除',
  dateFormat: 'yy-mm-dd',
  weekHeader: '周'
};
