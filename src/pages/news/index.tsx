import {Container} from "../../components/container";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import {Footer} from "../../components/foot";
import {https} from "../../constants";

const News  = (props) =>{

    const List = [
        {
            id:"",
            img:"",
            name:"",
            description:"",
        },
    ]
    const [list,setList] = useState(List)
    useEffect(()=>{

        setList(JSON.parse(props.project_details))

    },[])
    return(
        <div className="bg-[#0B0B0B] ">
            <Header/>
            <Container className="pt-24">

                <div className="flex justify-between">
                    <div className="text-white text-2xl font-semibold ">
                        NEWS
                    </div>
                </div>

                <div className="w-full flex    mt-5">
                    <div className="flex grid gap-5">
                        {list.map((item,index)=>(
                            <Link key={item.name} legacyBehavior href={`/new/${item.id}`} >
                                <a className={index+1>4?'hidden':"relative rounded-lg overflow-hidden  p-1.5 bg-[#242B3C] flex"}>

                                    <div className="overflow-hidden rounded-lg w-4/12">
                                        <img className=" w-full h-full" src={item.img} alt=""/>
                                    </div>
                                    <div className="pl-5 mt-3  text-white w-7/12">
                                        <div className="text-[#4B5773] text-sm">
                                            04-26 11:23
                                        </div>
                                        {/*<div className="flex items-center mt-2">*/}
                                        {/*    <img className="rounded-full w-8 h-8 mr-2" src="/logo.svg" alt=""/>*/}
                                        {/*    <div>*/}
                                        {/*        <div className="flex items-center">*/}
                                        {/*            <div className="font-semibold mr-2">*/}
                                        {/*                Maya*/}
                                        {/*            </div>*/}
                                        {/*            <div className="w-6 h-6 text-center bg-blue-400 rounded-full">*/}
                                        {/*                <i className="fa fa-check " aria-hidden="true" />*/}
                                        {/*            </div>*/}

                                        {/*        </div>*/}
                                        {/*        <div className="text-xs mt-0.5 text-[#6B779B]">*/}
                                        {/*            Mytheria new*/}
                                        {/*        </div>*/}

                                        {/*    </div>*/}

                                        {/*</div>*/}
                                        <div className="line-clamp-2 text-xl font-semibold my-2 ">{item.name}</div>
                                        <div className="line-clamp-3  font-extralight text-gray-300">
                                            {item.description}
                                        </div>

                                    </div>

                                </a>
                            </Link>
                        ))}
                    </div>
                </div>

            </Container>

            <Footer/>
        </div>
    )
}

export default News

export async function getStaticProps(){

    const ret = await fetch(`${https}/v1/Project/GetAllProjectDetails`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({})
    })
    const result = await ret.json()
    // const project_details = JSON.parse(result.res.project_details)
    // console.log(project_details.Name.title)
    let project_details = result.res.project_details
    return {
        props:{
            project_details
        }
    }
}
