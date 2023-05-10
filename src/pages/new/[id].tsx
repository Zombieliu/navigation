import Header from "../../components/header";
import {Footer} from "../../components/foot";
import {Container} from "../../components/container";
import Link from "next/link";
import {client} from "../../client";
import React, {useEffect, useState} from "react";
import {https} from "../../constants";

const New = (props) =>{
    const [numberData,setNumberData] = useState(false)
    const [number,setNumber] =useState('0')
    const [min_number,setMin_number] =useState('0')
    const project_details_list = JSON.parse(props.project_details)
    const project_details = project_details_list
    const project = {
        name:project_details.name,
        img:project_details.img,
        description:project_details.description,
        type:project_details.type,
        platform:project_details.platform,
        community:project_details.community,
        chains:project_details.chains,
        builders:project_details.builders,
        status:project_details.status,
        website:project_details.website,
        guildID:project_details.guildID,
        inviteLink:project_details.inviteLink

    }

    useEffect(()=>{
        const query = async () =>{
            const ret = await client.callApi('v1/Test/GetDcUserTestRulesNumber', {
                guild_id: JSON.parse(props.project_details).guildId

            });
            if(ret.isSucc){
                setNumber(JSON.parse(ret.res.rules)[0].number)
                setMin_number(JSON.parse(ret.res.rules)[0].min_number)
                setNumberData(true)
            }else{
                setNumberData(true)
            }


        }
        query()

    },[])

    return(
        <>
            <div className="bg-[#0B0B0B]">
                <Header/>
                <Container className="pt-24">
                    <div className="text-3xl mt-10 text-white font-semibold ">
                        {'District 9'} Director Is Launching a Web3 Game—With a Dedicated Avalanche Subnet
                    </div>
                    <div className="text-[#7A88AB] mt-2">
                        Video game developer Gunzilla Games, which includes noted filmmaker Neill Blomkamp among its leadership,
                    </div>
                    <div className="flex mt-5 justify-between items-center ">
                        <div>
                            <div className="flex items-center">
                                <img className="rounded-full w-12 h-12 mr-2" src="/logo.svg" alt=""/>
                                <div>
                                    <div className="flex items-center">
                                        <div className="font-semibold mr-2 text-white">
                                            Maya
                                        </div>
                                        {/*<div className="w-6 h-6 text-center bg-blue-400 rounded-full">*/}
                                        {/*    <i className="fa fa-check " aria-hidden="true" />*/}
                                        {/*</div>*/}

                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {project.type.map((item=>(
                                    <div key={item.content} className="text-[#639DEE] font-semibold border border-[#639DEE] text-sm px-4 py-1 bg-[#171920] rounded-lg text-center">
                                        {item.content}
                                    </div>
                                )))}
                            </div>
                        </div>
                        <Link href="" className="flex justify-center gap-4 bg-[#5762E3] text-white w-60 py-3 rounded-xl font-[400]">

                            <img src="/discord.svg" alt=""/>
                            Join Discord

                        </Link>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex justify-between items-center py-4">
                            <div className="font-light text-[#7A88AB] text-md font-semibold mr-2">
                                Platform
                            </div>
                            <div className="flex gap-3">
                                {project.platform.map(item=>(
                                    <img key={item.icon} className="w-5 h-5" src={item.icon} alt=""/>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-4">
                            <div className="font-light text-[#7A88AB] text-md font-semibold mr-2">
                                NetWork
                            </div>
                            <div className="flex gap-4">
                                {project.chains.map(item=>(
                                    <div key={item.name}>
                                        <img  className="w-5 h-5 " src={item.icon} alt=""/>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="flex justify-between items-center py-4">
                            <div className="font-light text-[#7A88AB] text-md font-semibold mr-2">
                                Status
                            </div>
                            <div className="flex gap-4 text-white">
                                {project.status}
                            </div>
                        </div>


                    </div>
                    <div className="text-[#7A88AB] flex border-b border-[#171920] pb-5 text-sm font-[420]">
                        04-25 11:23
                    </div>

                    <img  className="rounded-xl w-full xl:h-104 mt-10"  src={project.img} alt=""/>
                    <div className="text-white text-xl my-5">
                        Introduction
                    </div>
                    <div className="text-gray-400 font-[310] tracking-wider ">
                        {project.description}
                    </div>
                </Container>
                <Footer/>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    let data = {}
    const ret = await fetch(`${https}/v1/Project/GetAllProjectDetails`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    const result = await ret.json()
    const project_details = JSON.parse(result.res.project_details)
    const paths = project_details.map((project: any)=>{
        return {
            params:{id:project.id}
        }
    })
    return {
        paths,
        fallback: false
    };
}
// //
export async function getStaticProps({params:{id}}){
    let data = {
        id:id
    }
    const ret = await fetch(`${https}/v1/Project/GetProjectDetails`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
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

export  default New
