import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { ClientsContext } from "../contexts/ClientsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";

const Clients = () => {
  const { loading, clients, getClients } = useContext(ClientsContext);
  useEffect(() => {
    getClients();
  }, []);
  return (
    <section>
      {loading && <Spinner animation="border" />}
      {clients.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>DOB</th>
              <th>EMAIL</th>
              <th>DESTINATION</th>
              <th>PHONE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td>{client.name}</td>
                <td>{client.age}</td>
                <td>{client.email}</td>
                <td>{client.dob}</td>
                <td>{client.destination}</td>
                <td>{client.phone}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </Table>
      ) : (
        !loading && <h1>No record found</h1>
      )}
    </section>
  );
};

export default Clients;
