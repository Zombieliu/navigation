import type { NextPage } from 'next';
import {useRouter} from "next/router";
import Home from "./home";

const IndexPage: NextPage = () => {
    const router = useRouter()
  return (
      <main>
       <Home/>
      </main>
  )
}

export default IndexPage

// export async function getStaticProps(){
//
//     const ret = await fetch('http://localhost:3001/v1/Project/GetProjectDetails',{
//         method:'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//
//     })
//     const result = await ret.json()
//     // const project_details = JSON.parse(result.res.project_details)
//     // console.log(project_details.Name.title)
//     let project_details = result.res.project_details
//     return {
//         props:{
//             project_details
//         }
//     }
// }


