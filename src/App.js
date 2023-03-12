import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div id="cont">
      <div className="a1">
      <a href="">О комплексе</a> 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="">Особенности</a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="">Пентхаус</a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="">Выбрать квартиру</a>
      
      
      </div>
      <div className="a2">
           <div style={{height:'20%'}}></div>
           Архитектура<br/><br/>  
           Благоустройство<br/><br/>
           Безопасность<br/><br/>
           Инженерия<br/><br/>
           Инфраструктура<br/><br/>
           Транспортная безопасность  
      </div>

      <div className="a3" >
          <div style={{height:'20%' }}></div>
          
          <p style={{fontSize:'4vw' }}>Архитектура</p>
          
          <p style={{textAlign:'left'}}>
          Оригинальная архитектура жилого комплекса
          бизнес класса "Первомайская" формирует
          современный стиль жизни
          </p>          

          
      </div>
      <div className="a4">
        

      </div>
      <div className="a5"></div>

    </div>
  );
}
