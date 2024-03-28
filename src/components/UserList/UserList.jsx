import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useState,useEffect} from "react"
import axios from "axios"
function UserList() {
    const [user,setUser]= useState([])
    useEffect(()=>{
        async function getData(){
            console.log("render")
            try{
                const data = await axios.get(' https://dummyapi.io/data/v1/user',{
                    headers:{'app-id':import.meta.env.VITE_KEY}
                })
                const responseData = data.data
               
                setUser([...responseData.data])
            }
            catch(e){
                console.log(e)
            }
        }

        getData()
    },[])

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {user.map((value) => {
      
        const labelId = `checkbox-list-secondary-label-${value.id}`;
        return (
          <ListItem
            key={value.id}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                 
                  src={value.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.firstName + " " + value.lastName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
export default React.memo(UserList)