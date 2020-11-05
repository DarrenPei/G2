import { Coordinate, ShapeAttrs } from '../../dependents';
import { Datum, GeometryLabelCfg, MappingDatum, Point } from '../../interface';

export type TextAlign = 'start' | 'center' | 'end' | 'left' | 'right';

export interface LabelCfg extends GeometryLabelCfg {
  content?: any;
  position?: 'top' | 'bottom' | 'middle' | 'left' | 'right';
  id: string;
  data: Datum;
  mappingData: MappingDatum;
  coordinate: Coordinate;
}

export interface LabelPointCfg {
  x?: number;
  y?: number;
  start?: Point;
  color?: string;
  content?: any;
  textAlign?: TextAlign;
  textBaseline?: string;
  rotate?: number;
  angle?: number;
  r?: number;
}

export interface LabelItem extends GeometryLabelCfg {
  id: string;
  data: Datum;
  mappingData: MappingDatum;
  coordinate: Coordinate;
  x?: number;
  y?: number;
  start?: Point;
  color?: string;
  content?: any;
  textAlign?: TextAlign;
  textBaseline?: string;
  rotate?: number;
  angle?: number;
  r?: number;
  /** 牵引线 */
  labelLine?: null | boolean | { style?: object; path?: string };
}

/**
 * polar labelItem
 */
export interface PolarLabelItem extends LabelItem {
  /** 占比 */
  percent?: number;
  /** 是否不可见 */
  invisible?: boolean;
}