import React, { useState } from "react";
import "./index.css";
import ListeItem from "./component/ListeItem";

const INITIAL_STATE = [
  { id: 1, tamamlandi: false, delete: true },
  { id: 2, tamamlandi: true, delete: false } /* true dönenlerin ustunu cizecek */
];

export default function App() {
  const [liste, setListe] = useState([]);

  const [yeniBaslik, setYeniBaslik] = useState('');


  function completed(id) {
    console.log(id);
    setListe(liste.map(value => value.id === id ? { ...value, tamamlandi: !value.tamamlandi } : value))
  }

  function deleted(id) {
    console.log(id);

    setListe(liste.filter(value => {
      console.log(value);

      return value.id != id;
    }))
  }

  return (
    <div className="main">
      <div className="main-container">

        <div className="App">

          <div> <h1 className="baslık">Todo</h1>
            <h4 className="task-done" >{liste.filter((element) => element.tamamlandi).length} task done out of {liste.length}</h4></div>{/* öncelikle yapılacak işlerin eleman sayılarını tutmak ıcın yıldızlı parantez açıp içerisine obje.lenght giriyoruz çünkü bizim objemizde değerlerimiz tutuluyor. ".length" ise uzunlugunu getiriyor*/}
          {/* listeyi filtre fonksiyonu ıle  filtreliyoruz ki tamamlanmıs iş sayısını bulalım dıye. Bizim filtre fonksiyonuzmuz, tamammlanmamış işleri filtreler. Bize yeni bir "array" oluşturur. Biz o "array" in uzunlugnun "length" ile alırız. Bu sayede tamamlanmış iş sayısını bulabılırıt.*/}

          <div className="ekleme_formu">
            <input value={yeniBaslik}
              onChange={(e) => setYeniBaslik(e.target.value)}
              placeholer="listeye ekle" />


            <button className="add-button" onClick={() => {
              setListe([...liste, { id: Date.now(), baslik: yeniBaslik, completed: false }]);

              setYeniBaslik('') /*  text boxa yazdıgımız şey yazıp ekledıkten sonra icinde kalmamsı ıcın setYenıBasil cagırdık bos deger verdık.*/
            }
            }><i className="fas fa-plus"></i></button>{/* butona tıkladıgmızda  lısteyı guncelleyecek girilen eleman sayfaya eklenecek */}

          </div>
          <div className="liste">

            {liste.map(item =>
              <ListeItem key={item.id} complete={() => completed(item.id)} data={item} sil={() => deleted(item.id)} />
            )}   {/* itemlerın uzerıne tıklandıgında true degerı dondurecek ve üzerilerini çizecek */}

          </div>
        </div>

      </div>
    </div>


  );
}
