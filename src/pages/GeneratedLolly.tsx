import React,{ FC } from 'react';
import {Box, Stack,Typography,Button } from '@mui/material'
import Lolly from './Lolly'
import { LollyItemProps  } from './interfaces'
const LollyItem: FC <LollyItemProps> = ({lolly}) => {
  

  const { flavourTop,flavourMiddle,flavourBottom,recipient,message,sender,url } = lolly

  return (
  
<Box bgcolor="black" py={1}>

  <Stack direction={{md:"row"}} justifyContent={{md:"space-between"}} alignItems="center">
  
    <Box width={{xs:'40%',md:"20%"}}
      bgcolor="black" sx={{m:"0 auto"}} >
       <Lolly flavourTop={flavourTop}
  flavourMiddle= {flavourMiddle}
  flavourBottom= {flavourBottom} />
       
     </Box>
      <Box width={{xs:"86%",md:"58%"}} m='2rem auto' p={2} py={5} bgcolor="#13072B" borderRadius={2.5}>
      <Typography paragraph>
  Enjoy your lolly! Share it with this link:
      </Typography>
      <Typography paragraph borderRadius={1.5} p={2} bgcolor="#12023D">
          { url }
      </Typography>
      <Typography variant="h5" fontWeight={282} mt={6}>
      <i> { recipient } </i>
      </Typography>
       <Typography variant="h6" fontWeight={300} mt={6}>
       <i> {message} </i>
       </Typography>
  <Typography variant="h5" fontWeight={270} mt={7} ml={15} component="div">
     <i> - -  { sender } </i>
       </Typography>
       <Button sx={{mt:"2.6rem",ml:"8rem"}} //variant="contained"
       ><i>Generate new Lolly </i> </Button>
       
     </Box>
    </Stack>
  </Box>
     
    )
}
export default LollyItem;
