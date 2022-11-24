import { useState } from "react";
import { TableCardProps } from "../TableCard/TableCard";
import api from "../../services/api";
import Header from "../Header/Header";
import { ControlStyle } from "./Control.style";
import { TableCard } from "../TableCard/TableCard";
import { TotalCard } from "../TotalCard/TotalCard";

export type ControlHeaderProps = {
  name?: string;
  text: string;
  show?: boolean;
}


export function ControlHeader(props: ControlHeaderProps) {

  const [tables, setTables] = useState<TableCardProps[]>([]);

  async function getTables() {
    const response = await api.get("tables");
    console.log(response.data[0])
  }

  return (
    <>
    <Header />
    <ControlStyle>
      <div className="title">
        <strong>{props.name}</strong>
        <TableCard id={10}/>
      </div>
      <TotalCard text={props.text}/>
      {props.show? 
      <div className="checkout">
        <button className="checkout-text">Confira seu pedido abaixo antes de enviar</button>
        <img src="/src/assets/arrow.svg" alt="" />
      </div>
      : ""
      }
    </ControlStyle>
    </>

  )
}