import React, {Component} from "react";
import EmployeeDataService from "../../services/employee.service";

export default class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
				this.onChangeEmail = this.onChangeEmail.bind(this);
				this.saveEmployee = this.saveEmployee.bind(this);
				this.newEmployee = this.newEmployee.bind(this);

        this.state = {
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            
            submitted: false
        }
    }


    onChangeFirstName(e) {
        this.setState({firstName: e.target.value});
    }


    onChangeLastName(e) {
			this.setState({lastName: e.target.value});
		}


		onChangeEmail(e) {
			this.setState({email: e.target.value});
		}


		saveEmployee() {
			const data = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email
			}

			EmployeeDataService.create(data)
			.then(response => {
				this.setState({
					id: response.data.id,
					firstName: response.data.firstName,
					lastName: response.data.lastName,
					email: response.data.email,
					submitted: true
				})
			})
			.catch(e => {
				console.log(e);
			});
		}


		newEmployee() {
			this.setState({
				id: null,
				firstName: "",
				lastName: "",
				email: "",

				submitted: false
			})
		}


		render() {
			return (
				<div className="submit-form">
					{this.state.submitted ? (
						<div>
							<div class="alert alert-primary" role="alert">You submitted successfully!</div>
							<button className="btn btn-success" onClick={this.newEmployee}>
								Add
							</button>
						</div>
					) : (
						<div>
							<div className="form-group">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									required
									value={this.state.firstName}
									onChange={this.onChangeFirstName}
									name="firstName"
								/>
							</div>
	
							<div className="form-group">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									required
									value={this.state.lastName}
									onChange={this.onChangeLastName}
									name="lastName"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									className="form-control"
									id="email"
									required
									value={this.state.email}
									onChange={this.onChangeEmail}
									name="email"
								/>
							</div>
	
							<button onClick={this.saveEmployee} className="btn btn-success">
								Submit
							</button>
						</div>
					)}
				</div>
			);
		}

    
}