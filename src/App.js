import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { Dialog, DialogTitle, DialogContent, DialogContentText,
          TextField, DialogActions, Button } from '@material-ui/core';


function App() {
  const [date, changeDate] = useState(new Date());
  const [previousDate, changePreviousDate] = useState(new Date());
  const [openDialog, changeOpenDialog] = useState(false);
  const [title, changeTitle] = useState("");
  const [time, changeTime] = useState(new Date());
  const [description, changeDescription] = useState("");

  const handleSelectDate = (selectedDate) => {
    changePreviousDate(date);
    changeDate(selectedDate);
    if (previousDate.getDate() == date.getDate()) {
      //同じ日付を選択された場合のレンダリング
      changeOpenDialog(true);
    }

  };

  const handleGetTitle = (event) => {
    changeTitle(event.target.value);
  };

  const handleGetTime = (event) => {
    changeTime(event.target.value);
  };

  const handleGetDescription = (event) => {
    changeDescription(event.target.value);
  };

  const handleCloseDialog = () => {
    changeTitle("");
    changeTime(new Date());
    changeDescription("");
    changeOpenDialog(false);
  };

  const handleCompleteDialog = () => {
    changeOpenDialog(false);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <p>前の日付:　　　　{previousDate.getDate()}</p>
      <p>選択された日付:　{date.getDate()}</p>
      <p>{title}</p>
      <DatePicker
        autoOk
        orientation="portrait"
        variant="static"
        openTo="date"
        value={date}
        onChange={handleSelectDate}
      />
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">スケジュール</DialogTitle>
        <DialogContent>
          <DialogContentText>
            内容を記入してください。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="タイトル"
            type="email"
            fullWidth
            onChange={handleGetTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="時間"
            type="time"
            inputProps={{step: 300}}
            fullWidth
            onChange={handleGetTime}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="詳細"
            type="email"
            fullWidth
            onChange={handleGetDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleCompleteDialog} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
}

export default App;
