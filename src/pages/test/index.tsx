import Header from "../../components/header";
import {Footer} from "../../components/foot";
import {Container} from "../../components/container";
import Link from "next/link";
import {client} from "../../client";
import {useEffect, useState} from "react";
import {Jost} from "next/dist/compiled/@next/font/dist/google";

const Project = (props) =>{
    // console.log(props)
    // const project_details_list = JSON.parse(props.project_details)
    // const project_details = project_details_list[0]
    // console.log(project_details)


    // const project = {
    //     name:project_details.Name.title[0].text.content,
    //     img:project_details.image.files[0].name,
    //     description:project_details.description.rich_text[0].text.content,
    //     type:project_details.Type.multi_select,
    //     platform:[{name:"https://testnet.naga.io/build/Android-f76e5605.png"},{name: "https://testnet.naga.io/build/Windows_i-f5d0547f.png"}],
    //     community:[{icon:"/discord.png",href:""},{icon:"/Twitter.png",href:""},],
    //     network:"https://testnet.naga.io/build/bsc-3ceda552.png",
    //     builders:project_details.Builders.rich_text[0].text.content,
    //     status:project_details.Status.status.name,
    //     website:"https://illuvium.io/",
    //     data:{
    //         img:"https://d1j2c9jkfhu70p.cloudfront.net/illuivium_token_753a7045df.png",
    //         name:"Illuvium",
    //         price:"81.228",
    //         contract:{address:"0x76...ca0e",network:"https://testnet.naga.io/build/eth-58454a84.png"},
    //         mkt:"185.9M",
    //         volume:"36.8M",
    //         community:"585.1K",
    //         address:"24",
    //     }
    // }
    const project = {
        name:"Prometheus",
        img:"https://d1j2c9jkfhu70p.cloudfront.net/illuvium_5_2a9fa0ef47.png",
        h1:"Citizen Conflict is a free to-play, team-based shooter game set in the dystopian world of Ether Islands, where every match is fight for survival and valuable loot! The upcoming AAA experience is built in Unreal Engine 5 by the gaming industry veterans and pro e-sport players to deliver highly competitive product for everybody. This world will either break you or make you and it is only up to you to become a legend and rule your way. Hone your skills, level up, upgrade your gear and win big in PVP tournaments. Real you is not enough." +
            "Citizen Conflict is a free to-play, team-based shooter game set in the dystopian world of Ether Islands, where every match is fight for survival and valuable loot! The upcoming AAA experience is built in Unreal Engine 5 by the gaming industry veterans and pro e-sport players to deliver highly competitive product for everybody. This world will either break you or make you and it is only up to you to become a legend and rule your way. Hone your skills, level up, upgrade your gear and win big in PVP tournaments. Real you is not enough.",
        type:[{h1:"Metaverse"},{h1:"Strategy"},{h1:"NFT"}],
        platform:[{type:"https://testnet.naga.io/build/Android-f76e5605.png"},{type: "https://testnet.naga.io/build/Windows_i-f5d0547f.png"}],
        community:[{icon:"/discord.png",href:""},{icon:"/Twitter.png",href:""},],
        network:"https://testnet.naga.io/build/bsc-3ceda552.png",
        developers:"Illuvium Team",
        status:"Beta",
        website:"https://illuvium.io/",
        data:{
            img:"https://d1j2c9jkfhu70p.cloudfront.net/illuivium_token_753a7045df.png",
            name:"Illuvium",
            price:"81.228",
            contract:{address:"0x76...ca0e",network:"https://testnet.naga.io/build/eth-58454a84.png"},
            mkt:"185.9M",
            volume:"36.8M",
            community:"585.1K",
            address:"24",
        },
        GuildId:"1080420505946947604"
    }


    const [numberData,setNumberData] = useState(false)
    const [number,setNumber] =useState('0')
    const [min_number,setMin_number] =useState('0')
    useEffect(()=>{
        const query = async () =>{
            const ret = await client.callApi('v1/Test/GetDcUserTestRulesNumber', {
                guild_id: project.GuildId

            });
            if(ret.isSucc){
                setNumber(JSON.parse(ret.res.rules).number)
                setMin_number(JSON.parse(ret.res.rules).setMin_number)
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
                    <div className="text-4xl text-white font-semibold mb-10">
                        {project.name}
                    </div>
                    <div className="lg:flex ">
                        <div className="lg:w-9/12">
                            <img  className="rounded-xl"  src={project.img} alt=""/>
                            <div className="text-gray-400 font-[310] tracking-wider mt-5">
                                {/*{project.description}*/}
                            </div>
                        </div>

                        <div className="mt-5 lg:mt-0 lg:w-3/12 lg:ml-10">
                            <img className="rounded-lg" src={project.img} alt=""/>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {/*{project.type.map((item=>(*/}
                                {/*    <div key={item.name} className="text-gray-200 font-[240] text-sm px-4 py-1 bg-[#242323]/70 rounded-lg text-center">*/}
                                {/*        {item.name}*/}
                                {/*    </div>*/}
                                {/*)))}*/}
                            </div>
                            <div className="divide-y text-gray-300 divide-[#404040]">
                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        Platform
                                    </div>
                                    <div className="flex gap-3">
                                        <img className="w-6 h-6" src="https://testnet.naga.io/build/Android-f76e5605.png" alt=""/>
                                        {/*{project.platform.map(item=>(*/}
                                        {/*    <img key={item.name} className="w-6 h-6" src={item.name} alt=""/>*/}
                                        {/*))}*/}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        Community
                                    </div>
                                    <div className="flex gap-4">
                                        {project.community.map(item=>(
                                            <a key={item.icon} href={item.href}>
                                                <img  className="w-5 h-5 " src={item.icon} alt=""/>
                                            </a>

                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        NetWork
                                    </div>
                                    <div className="flex gap-4">
                                        <img  className="w-5 h-5 " src={project.network} alt=""/>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        Developers
                                    </div>
                                    <div className="flex gap-4 text-white">
                                        {/*{project.builders}*/}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        Status
                                    </div>
                                    <div className="flex gap-4 text-white">
                                        {project.status}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <div className="font-light">
                                        Number
                                    </div>
                                    <div className={numberData?"hidden":"animate-spin text-white"}>
                                        <i className="fa fa-spinner f-spin fa-2x fa-fw"></i>
                                    </div>
                                    <div className={numberData?"flex gap-4 text-white":"hidden"}>
                                        {project.status}  / {project.status}
                                    </div>
                                </div>
                            </div>
                            <Link href={project.website} legacyBehavior>
                                <a target="_blank" className="py-5 rounded-lg w-full flex justify-center border h-12 text-white font-semibold items-center hover:bg-[#262626]" >
                                    WEBSITE
                                </a>
                            </Link>

                            <Link href="https://discord.suirobots.com/verify/1080420505946947604/876496252269903873" legacyBehavior>
                                <a target="_blank" className="mt-5 rounded-lg w-full flex justify-center border h-12 text-white font-semibold items-center hover:bg-[#262626]" >
                                    Verify
                                </a>
                            </Link>

                            <div className="mt-10">
                                <div className="text-white font-semibold text-2xl">
                                    DATA
                                </div>
                                <div className="mt-5 rounded-lg  text-gray-300 flex justify-between ">
                                    <div className="flex items-center">
                                        <img className="rounded-full w-7 h-7" src={project.data.img} alt=""/>
                                        <div className=" ml-2">
                                            {project.data.name}
                                        </div>
                                    </div>
                                    <div className="flex text-white">
                                        $ {project.data.price}
                                    </div>

                                </div>

                                <div className="divide-y text-gray-300 divide-[#404040] mt-2">
                                    <div className="flex justify-between items-center py-4">
                                        <div className="font-light">
                                            Contract
                                        </div>
                                        <div className="flex gap-3">
                                            <img className="w-6 h-6" src={project.data.contract.network} alt=""/>
                                            {project.data.contract.address}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-4">
                                        <div className="font-light">
                                            Mkt Cap
                                        </div>
                                        <div className="flex gap-4">
                                            $ {project.data.mkt}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-4">
                                        <div className="font-light">
                                            Volume (24H)
                                        </div>
                                        <div className="flex ">
                                            $ {project.data.volume}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-4">
                                        <div className="font-light">
                                            Community
                                        </div>
                                        <div className="flex gap-4 text-white">
                                            {project.data.community}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-4">
                                        <div className="font-light">
                                            Address
                                        </div>
                                        <div className="flex gap-4 text-white">
                                            {project.data.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        </>
    )
}



export  default Project
