import React, {Component} from 'react';
import axios from '../Helper/Instance';
import {toast} from 'react-toastify';
export default class Addinfo extends Component {
    state = {
        id: '',
        name: '',
        tags: '',
        images: '',
        status: '',
        price: ''
    };
    componentDidMount = () => {
        const {
            id,
            name,
            tags,
            images,
            status,
            price
        } = this.props.product;
        this.setState({
            id,
            name,
            tags,
            images,
            status: 'available',
            price
        })
    }

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value});
    };
    submit = e => {
        e.preventDefault();
        const product = {
            ...this.state
        };
        axios.put(`products/${
            this.state.id
        }`, product).then(res => {
            this.props.close(res.data);
            toast.success('Add Success!');
        });
    };
    OnDelete = () => {
        axios.delete(`products/${
            this.state.id
        }`).then(res => {
            this.props.delete(this.state.id);
            toast.success("Delete Success!");
        })
    }
    toastif = () => {
        toast.success('Add Success!');
    };
    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">
                    Inventory
                </p>
                <form onSubmit={
                    this.submit
                }>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="label">
                                Name
                            </label>
                            <textarea value={
                                    this.state.name
                                }
                                className="textarea"
                                placeholder="placeholder"
                                name="name"
                                onChange={
                                    this.handleChange
                            }></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="tags">
                                Tags
                            </label>

                            <input value={
                                    this.state.tags
                                }
                                type="text"
                                className="input"
                                name="tags"
                                onChange={
                                    this.handleChange
                                }/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="tags">
                                Price
                            </label>

                            <input value={
                                    this.state.price
                                }
                                type="text"
                                className="input"
                                name="price"
                                onChange={
                                    this.handleChange
                                }/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="Image">
                                Image
                            </label>

                            <input value={
                                    this.state.images
                                }
                                type="text"
                                className="input"
                                name="images"
                                onChange={
                                    this.handleChange
                                }/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="status">
                                Status
                            </label>
                            <div className="select is-fullwidth">
                                <select value={
                                        this.state.status
                                    }
                                    name="status"
                                    id=""
                                    onChange={
                                        this.handleChange
                                }>
                                    <option>
                                        Available
                                    </option>
                                    <option>
                                        Unavailable
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link" type="submit">
                                Submit
                            </button>
                        </div>
                        <div className="control">
                            <button type="button" className="button"
                                onClick={
                                    () => {
                                        this.close();
                                    }
                            }>
                                Cancel
                            </button>
                        </div>
                        <div className="control">
                            <button onClick={
                                    () => {
                                        this.OnDelete()
                                    }
                                }
                                className="button"
                                type="button">
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
