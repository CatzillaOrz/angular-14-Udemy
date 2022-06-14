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