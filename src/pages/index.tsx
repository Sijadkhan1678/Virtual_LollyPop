import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";
import { gql,useMutation } from '@apollo/client';
import { Box,Fab,Typography,IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LollyForm from '../components/LollyForm'
import { LollyData  } from '../interface/interfaces'

const CREATE_LOLLY = gql`

mutation createLolly($flavourTop:String!,$flavourMiddle:String!,$flavourBottom: String!,$recipient:String!,$message:String!,$sender:String!,$url:String!) {

   createLolly ( flavourTop: $flavourTop,flavourMiddle: $flavourMiddle,
flavourBottom : $flavourBottom,recipient : $recipient,message:  $message,sender: $sender,url: $url
) {
    id
    flavourTop
    flavourMiddle
    flavourBottom
    recipient
    message
    sender
    url
  }
 }`

const Home:React.FC = () => {

 const [loading,setLoading] = useState < boolean > (false)
  const [lollyGenerator,{ data }] = useMutation(CREATE_LOLLY);
  
const generateLolly = async (lolly: LollyData) => {
    
    setLoading(true)

   await lollyGenerator({variables:lolly})
   
  // setTimeout( ()=> {
     setLoading(false)
  // },1000 )
}
     

  return (
    <Layout >
      
    <Box  color="white" py={4}>
   <LollyForm generateLolly={generateLolly} loading={loading} />
   { data && <LollyItem  lolly={data.createLolly}
  /> }
  </Box>
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
