import Link from "next/link";
import {useCallback, useEffect, useState} from "react";
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {useAtom} from "jotai";
import {Container} from "../container";
import {useRouter} from "next/router";
import {rotate} from "next/dist/server/lib/squoosh/impl";
import {DiscordUser, LoadingState, USER_ID} from "../../jotai";
import { client } from "../../client";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronUpIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const  Header = () =>{
    const router = useRouter()
    const [scroll,setScroll]=useState(false)
    const [,setOpenLoading] =useAtom(LoadingState)
    const [userId,setUser_id] = useAtom(USER_ID)
    const [discordUser,setDiscordUser] =useAtom(DiscordUser)
    const OPTIONS = {id:"",username:"", avatar:""};
    const [userInfo,setUserInfo] = useState(OPTIONS)
    const navigation = [
        {name:"Home", href:"/"},
        // {name:"Game", href:"#work"},
        {name:"Ranking", href:"/ranking"},
        // {name:"News", href:"#team"},
        // {name:"Airdrop", href:"#story"},
        // {name:"LaunchPad", href:"#work"},
        // {name:"MarketPlace", href:"#roadmap"},
    ]

    if(typeof window !== "undefined"){
        window.onscroll = function() {myFunction()};
    }

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };
    const { pathname, query, asPath } = router
    useEffect(()=>{

        if (router.isReady) {
            console.log("sss")
            // setOpenLoading(true)
            let code = router.query.code

            const queryData = async () =>{
                if(discordUser.username ==''){
                    const ret = await client.callApi('v1/User/GetDcNavUserToken', {
                        code:`${code}`
                    });
                    if(ret.isSucc){
                        const user_id = ret.res.user_id
                        setUser_id(user_id)
                        const userInfoRet = await client.callApi('v1/User/GetDcUserInfo', {
                            user_id
                        });
                        const data = JSON.parse(userInfoRet.res.user_info)

                        setDiscordUser({id:data.id,username:data.username,avatar:data.avatar})
                        setUserInfo({id:data.id,username:data.username,avatar:data.avatar})
                        // setOpenLoading(false)
                        // router.push({ pathname, query })

                    }
                }else{
                    setUserInfo(discordUser)
                }
                console.log()
                const userInfoRet = await client.callApi('v1/User/GetDcUserInfo', {
                    user_id:userId
                });
                if(!userInfoRet.isSucc){
                    setUserInfo(OPTIONS)
                    setDiscordUser(OPTIONS)
                }
            }
            queryData()
        }
    },[router.isReady])
    const to = (toEl)=>{
       let  bridge=document.querySelector(toEl);
       let body =document.body;
       let height =0;
       do{
           height+=bridge.offsetTop;
           bridge=bridge.offsetParent;
       }while(bridge!==body)

       window.scrollTo({
           top:height,
           behavior:'smooth'
       })
   }
    const login = () =>{
        // window.open('https://discord.com/oauth2/authorize?client_id=1085234510649622548&redirect_uri=https%3A%2F%2Fnavigation-sepia.vercel.app%2F&response_type=code&scope=identify%20guilds',"_parent")

        window.open('https://discord.com/oauth2/authorize?client_id=1085234510649622548&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2F&response_type=code&scope=identify%20guilds',"_parent")
    }
    const signOut = () =>{
        setUserInfo(OPTIONS)
        setDiscordUser(OPTIONS)
    }

    return (
        <div className={classNames(scroll?' backdrop-blur-sm bg-[#2E2E2E]/80':"","fixed inset-x-0 z-50 bg-black transition-all duration-700 ease-in-out ")}>
        <div className="relative z-50 flex justify-between  mx-auto max-w-7xl 2xl:max-w-[96rem] ">
        <div className="relative w-full z-10 flex justify-between pb-2 pt-4 items-center px-4 ">
            <div className={"relative z-10 items-center flex "}>
                <Link href="/" legacyBehavior>
                <a className="lg:pb-2">
                    <img
                        className="h-12 border rounded-full flex lg:mr-10"
                        src="/LOGO.svg"
                        alt=""
                    />
                </a>
                </Link>
                <div className="hidden lg:flex lg:gap-10">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}
                           className={classNames(router.pathname == item.href ?"border-b-2 border-red-500":"","text-sm pb-2 font-normal text-white transition duration-700")}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6">
                <Popover className="lg:hidden">

                    {({ open }) => (
                        <>
                            <Popover.Button
                                className="relative z-10  inline-flex items-center rounded-lg stroke-gray-500  outline-none"
                                aria-label="Toggle site navigation"
                            >

                                {({ open }) =>
                                    open ? (
                                        <ChevronUpIcon className="h-10 w-10" />
                                    ) : (
                                        <MenuIcon className="h-10 w-10" />
                                    )
                                }
                            </Popover.Button>
                            <AnimatePresence initial={false}>
                                {open && (
                                    <>
                                        <Popover.Overlay
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                                        />
                                        <Popover.Panel
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0, y: -32 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{
                                                opacity: 0,
                                                y: -32,
                                                transition: { duration: 0.2 },
                                            }}
                                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl  bg-[#2E2E2E] px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20"
                                        >

                                            <div className="space-y-4 ">
                                                {navigation.map((item) => (
                                                    <Link key={item.name} href={item.href}
                                                            className="block text-base leading-7 tracking-tight text-white">
                                                        {item.name}
                                                    </Link>

                                                ))}
                                                <div className="flex justify-center">
                                                    <button onClick={login} className={userInfo.username==""?"text-white bg-[#fa0101] text-center rounded-lg w-40 text-sm font-semibold py-3":"hidden"}>
                                                        Sign-up / Login
                                                    </button>
                                                    <div className={userInfo.username!==""?"bg-neutral-700  px-4 py-3 rounded-lg  items-center flex justify-between":"hidden"}>
                                                        <div className="flex items-center">
                                                            <img className="rounded-full w-6 h-6" src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`} alt=""/>
                                                            <div className="text-sm text-white font-semibold ml-2">
                                                                {userInfo.username}
                                                            </div>
                                                        </div>
                                                        <button onClick={signOut}  className="text-white text-xl text-gray-400 ml-4">
                                                            <i className="fa fa-sign-out" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </Popover>

                <div className="hidden lg:flex gap-4 items-center pb-2">
                    <button onClick={login} className={userInfo.username==""?"text-white bg-[#fa0101] text-center rounded-lg w-40 text-sm font-semibold py-3":"hidden"}>
                        Sign-up / Login
                    </button>
                    <div className={userInfo.username!==""?"bg-neutral-700  px-4 py-3 rounded-lg  items-center flex justify-between":"hidden"}>
                        <div className="flex items-center">
                            <img className="rounded-full w-6 h-6" src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`} alt=""/>
                            <div className="text-sm text-white font-semibold ml-2">
                                {userInfo.username}
                            </div>
                        </div>
                        <button onClick={signOut}  className="text-white text-xl text-gray-400 ml-4">
                            <i className="fa fa-sign-out" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Header
