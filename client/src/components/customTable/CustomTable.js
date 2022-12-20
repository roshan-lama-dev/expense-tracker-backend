import Table from "react-bootstrap/Table";

export const CustomeTable = ({ trans }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Income</th>
          <th>Expnense</th>
        </tr>
      </thead>
      <tbody>
        {trans.map((item, i) => (
          <tr key={i} className="">
            <td>1</td>
            {item.type === "income" ? (
              <>
                <td className="text-success">{item.amount}</td>
                <td></td>
              </>
            ) : (
              <>
                <td></td>
                <td className="text-danger">{item.name}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
