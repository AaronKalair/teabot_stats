import React, { PropTypes } from 'react';

const PotClaimWidget = React.createClass({

    getInitialState: function() {
        return {};
    },

    handleChange: function(e) {
        this.setState({potMaker: e.target.value});
    },

    propTypes: {
        potMakers: PropTypes.array.isRequired,
        submitMessage: PropTypes.string,
        hideSubmitMessage: PropTypes.func.isRequired,
        setSubmitMessage: PropTypes.func.isRequired,
        setPotMakers: PropTypes.func.isRequired
    },

    onSubmit: function() {
        jQuery.ajax({
            method: "POST",
            url: "/claimPot",
            data: JSON.stringify({'potMaker': this.state.potMaker}),
            contentType: 'application/json'
        }).done(function( msg ) {
            this.props.setSubmitMessage(msg.submitMessage);
        }.bind(this));
        jQuery.ajax({
            method: "GET",
            url: "/potMakers"
        }).done(function( msg ) {
            this.props.setPotMakers(msg.potMakers)
        }.bind(this));
    },

    renderForm: function() {
        return(
            <div>
                <form>
                  <select onChange={this.handleChange} className="form-control" defaultValue="" required>
                    <option value="">Claim this Pot</option>
                    {
                      this.props.potMakers.map(function(maker) {
                        return <option key={maker.name}
                          value={maker.name}>{maker.name}</option>;
                      })
                    }
                  </select>
                </form>
                <button onClick={this.onSubmit}> Claim! </button>
            </div>
        )
    },

    renderServerReply: function() {
        setTimeout(this.props.hideSubmitMessage, 5000);
        return(
            <div> {this.props.submitMessage} </div>
        )
    },

    render: function() {
        if (this.props.submitMessage) {
            return this.renderServerReply()
        }
        else {
            return this.renderForm()
        }
    }
})


export default PotClaimWidget
