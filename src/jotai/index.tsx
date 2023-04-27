import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

const LoadingState = atom(false)
const USER_ID = atomWithStorage("USER_ID","")
const DiscordUser = atomWithStorage('DiscordUser',{id:"",username:"",avatar:""})

export {LoadingState,USER_ID,DiscordUser}
