import React, { PropTypes } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import Chip from "material-ui/Chip";
import {indigo900} from "material-ui/styles/colors";
import Avatar from "material-ui/Avatar";
import Snackbar from "material-ui/Snackbar";
import jQuery from "jquery";


const PotClaimWidget = React.createClass({

    getInitialState: function() {
        return {};
    },

    handleChange: function(name) {
        this.setState({
            potMaker: name,
            open: false,
            snackbaropen: true});
        this.onSubmit(name);
    },

    handleOpen: function()  {
        this.setState({
            open: true});
    },

    handleClose: function()  {
        this.setState({
            open: false});
    },

    handleCloseSnackBar: function()  {
        this.setState({
            snackbaropen: false});
    },

    getMakerchips: function() {
        // TODO: Type this currentlly errors out
        const chips = [];
        for (let maker of this.props.potMakers) {
            chips.push(<Chip style={this.styles.chip}onTouchTap={() => this.handleChange(maker.name)}>
                <Avatar backgroundColor={indigo900} size={32}>{maker.name.substring(0, 1)}</Avatar>
                {maker.name}
            </Chip>);
        }
        return chips;
    },

    styles: {
        chip: {
            margin: 4,
            float: "left"
        },
        wrapper: {
            display: "flex"
        }
    },

    propTypes: {
        potMakers: PropTypes.array.isRequired,
        submitMessage: PropTypes.string,
        hideSubmitMessage: PropTypes.func.isRequired,
        setSubmitMessage: PropTypes.func.isRequired,
        setPotMakers: PropTypes.func.isRequired
    },

    onSubmit: function(name) {
        jQuery.ajax({
            method: "POST",
            url: "/claimPot",
            data: JSON.stringify({"potMaker": name}),
            contentType: "application/json"
        }).done(function(msg) {
            this.props.setSubmitMessage(msg.submitMessage);
        }.bind(this));
        jQuery.ajax({
            method: "GET",
            url: "/potMakers"
        }).done(function( msg ) {
            this.props.setPotMakers(msg.potMakers);
        }.bind(this));
    },

    renderForm: function() {
        return(
            <div className="scrollable-float-action">
                <FloatingActionButton onTouchTap={this.handleOpen}>
                <ContentAdd />
                </FloatingActionButton>
                <div>
                    <Dialog
                    title="Who Made This Lovely Teapot ?"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose} >
                    {this.getMakerchips()}
                    </Dialog>

                    <Snackbar
                        open={this.state.snackbaropen}
                        message={this.props.submitMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.handleCloseSnackBar}
                    />
                </div>
            </div>
        );
    },

    renderServerReply: function() {
        setTimeout(this.props.hideSubmitMessage, 5000);
        return(
            <div> {this.props.submitMessage} </div>
        );
    },

    render: function() {
        return this.renderForm();
    }
});


export default PotClaimWidget;
