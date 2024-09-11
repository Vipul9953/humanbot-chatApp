import React, { useState } from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid, Skeleton } from '@mui/material';
import ChatList from '../specific/ChatList';

const AppLayout = (WrappedComponent) => {
    return (props) => {
      const[isLoading, setIsLoading] = useState(false);
       const data = [{
        chats:"2yugsdvb", 
       }]

        return (
            <>
            <Title />
                <Header/>
               <Grid container sx={{border:"2px solid red"}} height={"calc(100vh-4rem"}>
                  <Grid item sm={4} md={3} height={'100%'} sx={{
                    display:{xs:"none", sm:"block"},
                  }}>

{isLoading ? (
              <Skeleton />
            ) : (
              <ChatList
                chats={data?.chats}
                chatId={"chatId"}
                handleDeleteChat={"handleDeleteChat"}
                newMessagesAlert={"newMessagesAlert"}
                onlineUsers={"onlineUsers"}
              />
            )}

                  </Grid>
                  <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                <WrappedComponent {...props} />2
                  </Grid>
                  <Grid item md={4} lg={3} height={'100%'} sx={{
                    display:{xs:"none", md:"block"},
                    padding:"2rem"
                  }}>3</Grid>

               </Grid>

            </>
        );
    };
};

export default AppLayout;