import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from '../styles/StyledComponents';
import { useFormState } from '../hooks/useFormState';

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const initialState = {
    username: { value: '', error: '' },
    password: { value: '', error: '' },
    ...(isLogin === true && {
      name: { value: '', error: '' },
      bio: { value: '', error: '' },
      avatar: { value: '', error: '' },
    }),
  };  

  const [state, handleChange, validateForm] = useFormState(initialState);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', state);
    }}

  return (
    <Container component={'main'} maxWidth='xs' sx={{ height: isLogin === true ? "100vh" : "130vh", display: "flex", justifyContent: "center", alignItems: "center", justifyItems: "center", justifyContent: "center" }} >
      <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }} >
        {
          isLogin ?
            <>
              <Typography variant='h5'>Login</Typography>
              <form style={{ width: "100%", marginTop: '1rem' }} onSubmit={handleSubmit}>
                <TextField required fullWidth label="Username" margin='normal' variant='outlined' name='username' value={state.username.value} onChange={handleChange} />
                {state.username.error && <Typography color='error' variant='caption' >{state.username.error}</Typography>}
                <TextField required fullWidth label="Password" margin='normal' variant='outlined' name='password' type='password' value={state.password.value} onChange={handleChange} />
                {state.password.error && <Typography color='error' variant='caption' >{state.password.error}</Typography>}
                <Button sx={{ marginTop: "1rem" }} variant='contained' color='primary' fullWidth type='sumbit'>Login</Button>
                <Typography textAlign='center' m='1rem' >Or</Typography>
                <Button   variant='text' fullWidth onClick={toggleLogin}>Sign Up Instead</Button>
              </form>
            </>
            : <>
              <Typography variant='h5'>Sign Up</Typography>
              <form style={{ width: "100%", marginTop: '1rem' }} onSubmit={handleSubmit}>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} src={state.avatar.value.preview} />
                  <IconButton sx={{ position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)" } }} component="label" >
                    <> 
                     <CameraAltIcon />
                      <VisuallyHiddenInput type="file" name='avatar'  onChange={handleChange}/>
                    </>
                  </IconButton>
                </Stack>
                <TextField required fullWidth label="Name" margin='normal' variant='outlined' name='name' value={state.name.value} onChange={handleChange} />
                {state.name.error && <Typography color='error' variant='caption' >{state.name.error}</Typography>}
                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' name='bio' value={state.bio.value} onChange={handleChange} />
                {state.bio.error && <Typography color='error' variant='caption' >{state.bio.error}</Typography>}
                <TextField required fullWidth label="Username" margin='normal' variant='outlined' name='username' value={state.username.value} onChange={handleChange} />
                {state.username.error && <Typography color='error' variant='caption' >{state.username.error}</Typography>}
                <TextField required fullWidth label="Password" name='password' margin='normal' variant='outlined' type='password' value={state.password.value} onChange={handleChange} />
                {state.password.error && <Typography color='error' variant='caption' >{state.password.error}</Typography>}
                <Button sx={{ marginTop: "1rem" }} variant='contained' color='primary' fullWidth type='sumbit'>Sign Up</Button>
                <Typography textAlign='center' m='1rem' >Or</Typography>
                <Button variant='text' fullWidth onClick={toggleLogin}>Login Instead</Button>
              </form>
            </>
        }
      </Paper>
    </Container>
  )
}

export default Login