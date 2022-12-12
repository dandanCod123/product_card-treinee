
import {Card_styles,
    Desktop,
    Div_container,
    H1,Paragra,Paragrf2, Dolar, Button, Text_Button ,Div_Dolar,Text_Risck} from './Styles_Card';



export function Card(){
    return(
     <Card_styles>
     
         <Desktop/>
        
        <Div_container>
            <H1>P E R F U M E</H1>

            <Paragra>
            Gabrielle Essence Eau De Parfum
            </Paragra>
         
         

         <Paragrf2>
             A floral,solar and voluptuos interpretation 
             composed by Olivier Polge, Perfume-Creator for the
             House of CHANEL.
         </Paragrf2>

         

         <Div_Dolar>
         
         <Dolar>
             $149.99  
         </Dolar>
         <Text_Risck>$169.99</Text_Risck>
         </Div_Dolar>
         

         <Button>
            <Text_Button>Add to Cart</Text_Button>
         </Button>
            
        </Div_container>
     </Card_styles>

    );
}