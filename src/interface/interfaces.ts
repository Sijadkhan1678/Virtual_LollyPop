 export interface LollyFlavour {
    flavourTop: string, 
    flavourMiddle: string,
    flavourBottom: string,
}

 export interface FormData {
    recipient: string,
    message: string,
    sender: string
  
}

 export interface LollyData {

    flavourTop: string
    flavourMiddle: string
    flavourBottom: string
    recipient: string
    message: string
    sender: string
    url: string
}


 export interface  LollyFormProps {

   generateLolly: (lollyData:LollyData) => void;
   loading: boolean;
}

 export interface LollyItemProps {
   
   lolly: LollyData
}
