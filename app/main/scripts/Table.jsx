class Table extends React.Component {
    render() {
        let dataChunks = _.chunk(this.props.model.data, this.props.model.rows),
            generateColumn = (columns) => {
              return columns.map(data => {
                  return (<td key={data.name}>{data.name}</td>)
              });
            },
            generatedRows = dataChunks.map(columns => {
              var row = generateColumn(columns);

              return (
                  <tr>{row}</tr>
              );
            }
        );

        return (
            <table>
                <tbody>
                    {generatedRows}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    model: React.PropTypes.object.isRequired
};
