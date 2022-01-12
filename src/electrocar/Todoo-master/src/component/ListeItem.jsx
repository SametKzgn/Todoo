import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function ListeItem(props) {
    return (
        <div className="">
            <div className="true">
                <div
                    /* {SETLİSTE: üç nokta bir obje ve array in içinde ki girilen elementleri getirir.  item.id elamanınını bulup onun tamamlandı degerını true ise false yapar false ıse true yapar */
                    className={props.data.tamamlandi ? 'yapildi' : ""}> {props.data.baslik}</div>{/* "props" data ve tamamlandıdan veri çeikiyor yanı app.js kısmında ki data ve tamamlandı kısmında. */}

                <div className="sa">

                    <i className="true-etiket" onClick={() => { /* üzerine tıkaldıgım elamanı bul el id item idye eşıtse bul onun içine el in içine dondur ve tamamlandıyı mevcut el in halının tersıne dondur  */
                        props.complete(props.data.id)
                    }} >
                        <AiOutlineCheck />  </i>
                    <div onClick={() => {
                        props.sil(props.data.id)/*    {/*  /* item e bak item.tamamlandıgında onu tut yani false olanları tutacak */  /* tamamlandı kısmı "true" olanları  temızleyecek butonumuz *//* button a tıklandıgında işlem yapılmasını sıtıyorsn onclıck degerı vermemız gerek. */ 
                    }} className="temizle"> <AiOutlineClose />
                    </div>
                </div>
            </div>
         

        </div>
    )
}