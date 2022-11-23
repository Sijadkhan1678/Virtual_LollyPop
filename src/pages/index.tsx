import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";
import Todos from '../components/Todos'



const Home:React.FC = () => {
  return (
    <Layout >
    <Todos />
      
      
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
