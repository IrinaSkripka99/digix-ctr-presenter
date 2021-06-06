export const columns = [
  {
    title: "Field",
    dataIndex: "field",
    key: "field",
    ellipsis: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
  },
];

export const summaryColumns = [
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
    ellipsis: true,
  },
  {
    title: "Mean",
    dataIndex: "mean",
    key: "mean",
    ellipsis: true,
    sorter: (a, b) => a.mean - b.mean,
  },
  {
    title: "Stddev",
    dataIndex: "stddev",
    key: "stddev",
    ellipsis: true,
    sorter: (a, b) => a.stddev - b.stddev,
  },
  {
    title: "Min",
    dataIndex: "min",
    key: "min",
    ellipsis: true,
    sorter: (a, b) => a.min - b.min,
  },
  {
    title: "Max",
    dataIndex: "max",
    key: "max",
    ellipsis: true,
    sorter: (a, b) => a.max - b.max,
  },
];

export const allVariables = [
  "label",
  "age",
  "city_rank",
  "residence",
  "career",
  "gender",
  "up_life_duration",
  "up_membership_grade",
  "membership_life_duration",
  "consume_purchase",
  "communication_onlinerate",
  "communication_avgonline_30d",
  "tags",
  "app_first_class",
  "app_second_class",
  "his_app_size",
  "his_on_shelf_time",
  "app_score",
  "device_size",
  "emui_dev",
  "list_time",
  "device_price",
  "net_type",
  "pt_d",
];
