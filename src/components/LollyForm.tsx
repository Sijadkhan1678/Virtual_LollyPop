import React, { FC,useState } from 'react'
//import { navigate } from 'gatsby'
import { Box,Stack,Button, FormControl } from '@mui/material'
import { TextField } from "formik-mui";
import { Formik, Form, Field } from 'formik'
import { LollySchema } from './Schemas'
import { LollyFormProps,LollyFlavour,FormData,LollyData } from './interfaces'
import Lolly from './Lolly'



const LollyForm: FC <LollyFormProps> = ({ generateLolly,loading }) => {
  
const [ lollyFlavours,setLollyFlavours ] = 
useState <LollyFlavour> ({
  flavourTop:"#deaa43", 
  flavourMiddle: '#63FF48',
  flavourBottom: '#FF17D1',
});
    const { flavourTop,flavourMiddle,flavourBottom } = lollyFlavours
    
  const handleChange = (e:any) => {
    
    setLollyFlavours({...lollyFlavours, [e.target.name]: e.target.value})
  }
const formData:FormData = {
   recipient: '',
   message: '',
   sender: ''
}
  
  return (
  
  <Box bgcolor="#F2FDFF" >
  <Stack direction={{xs:"column",md:"row"}} justifyContent={{xs:'space-between',md:"space-between"}}>
    <Box  ml={15.4}>
    <Lolly flavourTop={flavourTop} flavourMiddle={flavourMiddle} flavourBottom={flavourBottom}  />
    </Box>
  <Stack direction="row" justifyContent="center" mt={2} > 
  
<input type="color" name="flavourTop" value={flavourTop} onChange={  handleChange } /> 
<input type="color" name="flavourMiddle" value={flavourMiddle} onChange= { handleChange } />
  <input type="color" name="flavourBottom" value={flavourBottom} onChange={handleChange} />
     </Stack>
     
    <Formik
      initialValues={formData}
      validationSchema={LollySchema}

      onSubmit= { async (values) => {
      
      const { recipient,message,sender } = values
 const lollyData:LollyData = {
            flavourTop,
            flavourMiddle,
            flavourBottom,
            recipient,
            message,
            sender,
            url: 'http://localhost:8000/'
      } 
      
    await  generateLolly(lollyData)
      
     // if(!loading){
        //  navigate(`/generated/${id}`)
        alert('data is reached')
        
     // }
      
      
      
      }}
      >
    
        <Form autoComplete="off">
        
  <Box mt={5} >

   <FormControl sx={ { m: '1rem 5rem' }}>
   
      <Field
          component={TextField}
          color="secondary"
          id="recipientName"
          label="To"
          name='recipient'
          />
        </FormControl>
        
        <FormControl sx={{ m: {xs:'1rem 5rem', sm: '1rem 5rem'} }}>
     <Field
          component={TextField}
          color="secondary"
          id="message"
          label="Message"
          name='message'
          multiline
          rows={4}
          
          />
        </FormControl>
        
        <FormControl sx={ { m: '1rem 5rem' }}>
        
      <Field
          color="secondary"
          component={TextField}
          id="sender"
          label="Sender Name"
          name='sender'/>
        </FormControl>
        </Box> 
 
      <Button size='large' 
               sx={{m:"2rem 6.5rem"}}  
              variant='contained' 
              type='submit' >
              
           {  loading ? 'loading' : 'Generate Lolly' }
           
              </Button>
      
      
        </Form>
      
        </Formik>
        </Stack>
  
        </Box>

      )
      }

export default LollyForm;
