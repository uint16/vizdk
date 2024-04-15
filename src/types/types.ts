export interface DashBoardRow {
  id: string,
  cells?: BaseRowItem[]
}

export interface BaseRowItem {
  title: string,
  id: string
}

export interface BarChartRowItem extends BaseRowItem {
  metricFields?: string[],
  groupByFields: string[],
}

export interface PieChartRowItem extends BaseRowItem {
  metricField: string,
  groupByFieldId: string,
}