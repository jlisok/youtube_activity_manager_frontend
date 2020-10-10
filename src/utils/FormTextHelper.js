import React, {Component} from 'react';

class FormTextHelper extends Component {
    render() {
        const {textToDisplay} = this.props;
        return (
            <React.Fragment>
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    {textToDisplay}
                </div>
            </React.Fragment>
        );
    }
}

export default FormTextHelper;
