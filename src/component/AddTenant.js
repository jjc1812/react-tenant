import React from 'react';

export default () => {

    const [name, setName] = React.useState("")
    const [paymentStatus, setPaymentStatus] = React.useState("")
    const [leaseEndDate, setLeaseEndDate] = React.useState("")

    return(
        <div className="container">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input onChange={(e) => setName(e.target.value)} value={name} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Payment Status</label>
              <select className="form-control" onClick={(e) => setPaymentStatus(e.target.value)}>
                <option>CURRENT</option>
                <option>LATE</option>
              </select>
            </div>
            <div className="form-group">
              <label>Lease End Date</label>
              <input onChange={(e) => setLeaseEndDate(e.target.value)} value={leaseEndDate} className="form-control"/>
            </div>
            <button className="btn btn-primary">Save</button>
            <button className="btn">Cancel</button>
          </form>
        </div>
    )
}