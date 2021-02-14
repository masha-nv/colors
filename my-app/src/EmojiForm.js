import React, { Component } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

class EmojiForm extends Component {
  selectEmoji = (emoji) => {
    this.props.saveEmoji(emoji.native);
  };

  handleClose = () => {
    this.props.closeEmojiForm();
  };
  render() {
    const { open } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Pick Emoji</DialogTitle>
          <DialogContent>
            <Picker
              set="apple"
              emoji=""
              title=""
              showPreview={false}
              onClick={this.selectEmoji}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default EmojiForm;
