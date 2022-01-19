import React from 'react';
import { Service } from './Service';
import AddTenant from './component/AddTenant';

function App() {

  const [list, setList]= React.useState([])
  const [show, setShow]= React.useState(false)

  React.useEffect(() => {
    setList(Service.getTenants())
  }, [])

  return (
      <>
        <div className="container">
          <h1>Tenants</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Payment is late</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lease ends in less than a month</a>
            </li>
          </ul>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Payment Status</th>
                <th>Lease End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((tenant) => (
              <tr>
                <th>{tenant.id}</th>
                <td>{tenant.name}</td>
                <td>{tenant.paymentStatus}</td>
                <td>{tenant.leaseEndDate}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container">
          <button onClick={()=>setShow(!show)} className="btn btn-secondary">Add Tenant</button>
        </div>
        {show?(
        <AddTenant />
        ):null}
      </>
  );
}

export default App;
