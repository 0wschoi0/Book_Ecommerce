import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Paper, TextField } from '@material-ui/core';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { storageService, dbService } from "fbase";
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import UploadTextField from './UploadTextField';
import useStyles from './styles';

const UploadForm = ({uploading}) => {
  const classes = useStyles();
  const methods = useForm();


  const [attachment, setAttachment] = useState("");

  const onSubmitting = async (data) => {
    uploading({...data}, attachment);
    //onSubmit();
  }
    const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };


  const onClearAttachment = () => setAttachment("");
  return (

  <>
  <Paper className={classes.paper}>
    <Typography variant="h6" gutterBottom>상품 등록</Typography>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitting)}>
        <Grid container spacing={4}>
          <UploadTextField name='name' label='책 제목'  />
          <UploadTextField name='price' label='가격 (₩)'  />
          <UploadTextField name='category' label='장르'  />
          <label for="attach-file" className={classes.label}>
          <Typography>사진 추가</Typography>
          </label>
           <input id="attach" type="file" accept="image/*" onChange={onFileChange} style={{opacity: 1,}}/>
            {attachment && (
            <div className={classes.attachments}>
              <img src={attachment} style={{
                backgroundImage: attachment,
              }} />
              <div className={classes.clear} onClick={onClearAttachment}>
                <Button>사진 취소</Button>
              </div>
            </div>
            )}
        </Grid>
        <br />

            <div style={{ display: 'flex', justifyContent:'center' }}>
          <Button type="submit" variant="contained" color="primary">업로드</Button>
        </div>
      </form>
    </FormProvider>
    </Paper>
  </>
  );
}

export default UploadForm
