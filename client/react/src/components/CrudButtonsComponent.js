import { Component } from 'react'
import PropTypes from 'prop-types'

class CrudButtonsComponent extends Component {
  render() {
    return (
        <div>
          <button type="button" className="btn btn-primary save" disabled={!this.props.canSave()} onClick={() => this.props.save()}>Save</button>
          <button type="button" className="btn btn-warning revert" onClick={() => this.props.revertChanges()} disabled={!this.props.canRevert()}>Revert changes</button>
          {
            this.props.canRemove() && (
                <button type="button" className="btn btn-danger remove" onClick={() => this.props.remove()}>Remove</button>
            )
          }
        </div>
    );
  }
}

CrudButtonsComponent.propTypes = {
    canSave: PropTypes.func,
    save: PropTypes.func,
    revertChanges: PropTypes.func,
    canRevert: PropTypes.func,
    remove: PropTypes.func,
    canRemove: PropTypes.func,
    form: PropTypes.object
};

export default CrudButtonsComponent;