import { CeramicClient } from '@ceramicnetwork/http-client'
import { useContext, createContext } from 'react'


class CeramicContextClass { 
    
    constructor() {
        this.Ceramic = new CeramicClient('https://ceramic.3speak.tv/');
    }

}
export const CeramicInstance = new CeramicContextClass();

export const CeramicContext =  createContext(CeramicInstance);


export function useCeramic() {
    const ac = useContext(CeramicContext)

    return {
        Ceramic: ac.Ceramic
    }
}