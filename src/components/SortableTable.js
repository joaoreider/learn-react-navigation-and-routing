import Table from "./Table";
export default function SortableTable(props) {
  const { config } = props;
  const handleCLick = (label) => {};
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => {
            handleCLick(column.label);
          }}
        >
          sortable
        </th>
      ),
    };
  });
  return <Table {...props} config={updatedConfig} />;
}
