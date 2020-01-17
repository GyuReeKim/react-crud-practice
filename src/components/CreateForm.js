import React, { Component } from 'react';

class CreateForm extends Component {
    state = {
        name: '',
        party: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            party: ''
        })
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="정당"
                    value={this.state.party}
                    onChange={this.handleChange}
                    name="party"
                />
                <div>{this.state.name} {this.state.party}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default CreateForm;