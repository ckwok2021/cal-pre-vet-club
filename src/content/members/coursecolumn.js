const coursecolumns = [{
  Header: 'COURSE',
  accessor: 'course',
  filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value) &&
    row[filter.id].endsWith(filter.value)
}, {
  Header: 'OFFERED',
  accessor: 'offered',
  filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value) &&
    row[filter.id].endsWith(filter.value)
}, {
  Header: 'DESCRIPTION',
  accessor: 'description',
  filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value) &&
    row[filter.id].endsWith(filter.value)
}, {
  Header: 'NOTES',
  accessor: 'notes',
  filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value) &&
    row[filter.id].endsWith(filter.value)
}]

export default coursecolumns;
