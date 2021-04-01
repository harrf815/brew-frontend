import React from 'react';

class Input extends React.Component {

    state = {
        comments: ''
    }

    handleEditChange = (e) => {   
        this.setState({comments: e.target.value })
    }


    render() {

        const {onEdit, fb} = this.props

        return (
            <form onSubmit={(e) => onEdit(e, this.state, fb.id)}>
                <div className="field">
                    <input
                        type="text"
                        value={fb.comment}
                        onChange={(e) => this.handleEditChange(e) }
                    />
                    <button >Submit</button>
                </div>
            </form>
        )


    }

}

export default Input