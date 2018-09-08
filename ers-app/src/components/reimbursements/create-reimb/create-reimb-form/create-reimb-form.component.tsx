import * as React from 'react';
import { Button } from 'mdbreact';

export class CreateReimbFormComponent extends React.Component<any, any>  {
    public render() {
        return(
            <div className="card mx-xl-5">
                <div className="card-body">
                    <form>
                        <p className="h4 text-center py-4">Submit Reimbursement</p>
                        <label htmlFor="amount" className="grey-text font-weight-light">Amount</label>
                        <input type="number" id="amount" className="form-control" />
                        <br />
                        <label htmlFor="description" className="grey-text font-weight-light">Description</label>
                        <input type="text" id="description" className="form-control" />
                        <br />
                        <div className="form-group">
                            <label htmlFor="sel1" className="grey-text font-weight-light">Select type of reimbursement:</label>
                            <select className="form-control" id="sel1">
                                <option>Lodging</option>
                                <option>Travel</option>
                                <option>Food</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <Button type="submit">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};
