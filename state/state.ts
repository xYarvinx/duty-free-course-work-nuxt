import {reactive} from 'vue'
import {CompletionItemKind, SymbolKind} from "vscode-languageserver-types";
import Flight from '@/pages/Flights.vue';

interface IFlightsData {
    typeAirplane: string,
    direction: string,
    customerName: string,
    price: number,
    pinCode: string,
    departureTime: string,
}

interface IBalance {
    wallet: number,
    card: number,
    bonus: number,
}

interface IData {
    items: IFlightsData[]
}

interface IMyBalance {
    item: IBalance
}

export const toGetMyData: IData = reactive({
    items: [] as IFlightsData[],

    add(typeAirplane: string,
        direction: string,
        customerName: string,
        price: number,
        pinCode: string,
        departureTime: string) {
        this.items.push({
            typeAirplane: typeAirplane,
            direction: direction,
            customerName: customerName,
            price: price,
            pinCode: pinCode,
            departureTime: departureTime
        })
    }
})

export const toGetMyBalance: IMyBalance = reactive({
    items: [] as IBalance[],
    add(wallet: number,
        card: number,
        bonus: number,) {
        this.items.push({
            wallet: wallet,
            card: card,
            bonus: bonus,
        })
    }
})