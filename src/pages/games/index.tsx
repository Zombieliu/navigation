import Header from "../../components/header";
import {Container} from "../../components/container";
import Link from "next/link";
import {Footer} from "../../components/foot";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const chinaList = [
    {title: 'Ethereum' },
    {title: 'BNB' },
]
const typeList = [
    {title: 'Dao' },
    {title: 'NFT' },
    {title: 'GameFi' },
    {title: 'DeFi' },
]
const statusList = [
    {img:"/playable.svg",title: 'Playable' },
    {img:"/alpha.svg",title: 'Alpha' },
    {img:"/beta.svg",title: 'Beta' },
    {img:"/indeveloping.svg",title: 'In Developing' },
]

const Sort=()=>{

    const addPageCounter = async ()=>{

    }

    const decPageCounter = ()=>{

    }

    const lastPage = ()=>{

    }

    const firstPage = ()=>{

    }
    return(
        <div>
            <div className="rounded-md   mt-10 flex justify-center  my-5" aria-label="Pagination">

                <div className="rounded-md   flex justify-end text-[#7A88AB] dark:text-white">
                    <button
                        onClick={firstPage}
                        className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md  bg-[#242B3C]  text-sm font-semibold  "
                    >
                        <span className="">First</span>
                    </button>
                    <button
                        onClick={decPageCounter}
                        className="relative inline-flex items-center mx-2 px-2 py-2 rounded-md   bg-[#242B3C]  text-sm font-semibold "
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <div className="  hidden lg:inline-block rounded-md  relative inline-flex items-center px-4 py-2  bg-[#242B3C]  text-sm font-semibold ">
                        Page 1 of 1
                    </div>
                    <button onClick={addPageCounter} className="relative inline-flex items-center mx-2 px-2 py-2 rounded-md  bg-[#242B3C]  text-sm font-semibold ">
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        onClick={lastPage}
                        className="relative inline-flex items-center px-2 py-2 ml-2 rounded-md  bg-[#242B3C]  text-sm font-semibold "
                    >
                        <span className="">Last</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
const Games = () =>{
    const [enabledFree, setEnabledFree] = useState(false)
    const [enabledMost, setEnabledMost] = useState(false)

    const list = [
        {
            id:"1",
            img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b256c6e-43d6-46cf-9ba7-9bbaeedc7358/1679036496910454.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230510T080729Z&X-Amz-Expires=3600&X-Amz-Signature=049d63db0eb969ac77265e5c0bc0d3cb918c267e00263a4fb1f7452eac381f9a&X-Amz-SignedHeaders=host&x-id=GetObject",
            name:"Prometheus",
            type:[
                {title: "RPG"},
                {title:"METAVERSE,BATTLE,RACING"}
            ],
            platform:[
                {logo:"/android-logo.svg"},
                {logo:"/ios.svg"}
            ],
            state:"Developing"

        },
        {
            id:"2",
            img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b256c6e-43d6-46cf-9ba7-9bbaeedc7358/1679036496910454.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230510T080729Z&X-Amz-Expires=3600&X-Amz-Signature=049d63db0eb969ac77265e5c0bc0d3cb918c267e00263a4fb1f7452eac381f9a&X-Amz-SignedHeaders=host&x-id=GetObject",
            name:"Prometheus",
            type:[
                {title: "RPG"},
                {title:"METAVERSE,BATTLE,RACING"}
            ],
            platform:[
                {logo:"/android-logo.svg"},
                {logo:"/ios.svg"}
            ],
            state:"Developing"

        },
        {
            id:"3",
            img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b256c6e-43d6-46cf-9ba7-9bbaeedc7358/1679036496910454.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230510T080729Z&X-Amz-Expires=3600&X-Amz-Signature=049d63db0eb969ac77265e5c0bc0d3cb918c267e00263a4fb1f7452eac381f9a&X-Amz-SignedHeaders=host&x-id=GetObject",
            name:"Prometheus",
            type:[
                {title: "RPG"},
                {title:"METAVERSE,BATTLE,RACING"}
            ],
            platform:[
                {logo:"/android-logo.svg"},
                {logo:"/ios.svg"}
            ],
            state:"Developing"

        },
        {
            id:"4",
            img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b256c6e-43d6-46cf-9ba7-9bbaeedc7358/1679036496910454.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230510T080729Z&X-Amz-Expires=3600&X-Amz-Signature=049d63db0eb969ac77265e5c0bc0d3cb918c267e00263a4fb1f7452eac381f9a&X-Amz-SignedHeaders=host&x-id=GetObject",
            name:"Prometheus",
            type:[
                {title: "RPG"},
                {title:"METAVERSE,BATTLE,RACING"}
            ],
            platform:[
                {logo:"/android-logo.svg"},
                {logo:"/ios.svg"}
            ],
            state:"Developing"

        },
    ]
    return(
        <div className="bg-[#0B0B0B] ">
            <Header/>
            <Container className="pt-24">

                <div className="w-full justify-between  bg-gradient-to-b from-[#313131]/10 from-10%  to-[#4690F8]/30 flex rounded-lg p-12 ">
                    <div className="flex text-[#7A88AB] items-center">
                        ALL GAMES
                        <div className="ml-4 text-white text-4xl font-semibold">
                            1876
                        </div>
                    </div>
                    <div className="flex text-[#7A88AB] items-center">
                        Playable
                        <div className="ml-4 text-white text-4xl font-semibold">
                            345
                        </div>
                    </div>
                    <div className="flex text-[#7A88AB] items-center">
                        Alpha
                        <div className="ml-4 text-white text-4xl font-semibold">
                            742
                        </div>
                    </div>
                    <div className="flex text-[#7A88AB] items-center">
                        Beta
                        <div className="ml-4 text-white text-4xl font-semibold">
                            124
                        </div>
                    </div>
                    <div className="flex text-[#7A88AB] items-center">
                        In Development
                        <div className="ml-4 text-white text-4xl font-semibold">
                            270
                        </div>
                    </div>
                </div>

                <div className="border-b border-[#242B3C] pb-4">
                <div className="mt-4">
                    <div className='text-white font-semibold'>
                        Filters (0)
                    </div>
                    <div className="flex gap-10 mt-2">
                        <div className="flex gap-3 text-[#7A88AB] text-sm items-center">
                            <img src="freetoplay.svg" alt=""/>
                            Free To Play
                            <Switch
                                checked={enabledFree}
                                onChange={setEnabledFree}
                                className={classNames(
                                    enabledFree ? '' : '',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 bg-[#242B3C] cursor-pointer rounded-full border-2 border-transparent '
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        enabledFree ? 'translate-x-5 bg-[#4690F8]' : 'translate-x-0 bg-[#7A88AB]',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <div className="flex gap-3 text-[#7A88AB] text-sm items-center">
                            <img src="mostpopular.svg" alt=""/>
                            Most Popular
                            <Switch
                                checked={enabledMost}
                                onChange={setEnabledMost}
                                className={classNames(
                                    enabledMost ? '' : '',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 bg-[#242B3C] cursor-pointer rounded-full border-2 border-transparent '
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        enabledMost ? 'translate-x-5 bg-[#4690F8]' : 'translate-x-0 bg-[#7A88AB]',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>

                    </div>
                </div>

                <div className="mt-4">
                    <div className='text-white font-semibold'>
                        Chain (0)
                    </div>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {chinaList.map((items) => (
                            <div key={items.title} className="flex items-center">
                                <input
                                    id={items.title}
                                    name="chinaList"
                                    type="radio"
                                    // defaultChecked={items.title === 'Ethereum'}
                                    className="h-4 w-4 border-gray-30  text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor={items.title} className="ml-3 block text-sm font-medium leading-6 text-[#7A88AB]">
                                    {items.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <div className='text-white font-semibold'>
                        Type (0)
                    </div>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {typeList.map((items) => (
                            <div key={items.title} className="flex items-center">
                                <input
                                    id={items.title}
                                    name="typeList"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor={items.title} className="ml-3 block text-sm font-medium leading-6 text-[#7A88AB]">
                                    {items.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <div className='text-white font-semibold'>
                        Status (0)
                    </div>
                    <div className="flex justify-between">
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {statusList.map((items) => (
                            <div key={items.title} className="flex items-center">
                                <input
                                    id={items.title}
                                    name="statusList"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor={items.title} className="flex items-center ml-3 block text-sm font-medium leading-6 text-[#7A88AB]">
                                    <img className="mr-1" src={items.img} alt=""/>   {items.title}
                                </label>
                            </div>
                        ))}
                    </div>
                        <div className="flex ">
                            <div className="flex w-72 items-center">
                                <div className="flex justify-center z-10 text-[#3C4864]  rounded-lg m-1   -mr-7 ">
                                    <button >
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <input type="text"
                                       className=" bg-[#242B3C]  text-xs md:text-sm text-white placeholder-[#3C4864]  rounded-lg pl-8 p-2 w-full       outline-none"
                                       placeholder="Search token"
                                       autoComplete="off"
                                       id="address"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flex xl:grid gap-5 md:grid-cols-3 xl:grid-cols-4 ml-5 xl:ml-0 mt-10">
                    {list.map((item)=>(
                        <Link key={item.name} legacyBehavior href={`/project/${item.id}`} >
                            <a className="rounded-lg overflow-hidden snap-always snap-center w-90 xl:w-full p-2 bg-[#242B3C]">
                                <div className="overflow-hidden rounded-lg">
                                    <img className=" hover:scale-110 duration-700 xl:h-40 2xl:h-52" src={item.img} alt=""/>
                                </div>
                                <div className="pt-2 p-1  text-white">
                                    <div className=" text-xl font-semibold mb-5 ">{item.name}</div>
                                    <div className="flex gap-4">
                                    {item.type.map(item=>(
                                        <div key={item.title} className="px-4 py-0.5 text-center border text-[#639DEE] text-sm border-[#639DEE] rounded-lg">
                                            {item.title}
                                        </div>
                                    ))}
                                    </div>
                                    <div className="flex gap-4 items-center mt-2">
                                        {item.platform.map(item=>(
                                            <div key={item.logo} className="">
                                                <img className="w-5 h-5" src={item.logo} alt=""/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex mt-2">
                                    <div className="px-8 py-2 rounded-lg bg-[#3A445E] text-sm font-semibold flex  ">
                                        {item.state === 'Developing' ? (
                                            <img className="w-5 h-5 " src="/beta.svg" alt=""/>
                                        ) : item.state === "Playable" ? (
                                                <img src="/playable.svg" alt=""/>
                                        ) : item.state === "Alpha" ? (
                                            <img src="/alpha.svg" alt=""/>
                                        ):(
                                            <img src="/indeveloping.svg" alt=""/>
                                        )}
                                       <div className="ml-2">
                                           {item.state}
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
                <Sort />

            </Container>

            <Footer/>
        </div>
    )
}
export default Games
