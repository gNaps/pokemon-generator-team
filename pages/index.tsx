import HorizontalList from "../components/HorizontalList";
import Navbar from "../components/Navbar";
import styles from "../styles/Dashboard.module.scss";
import { listeDesideriOwn, listeDesideriInvite, lastDesideri } from "../api/fakeApi"
import VerticalList from "../components/VerticalList";
import ActionButton from "../components/ActionButton";
import { useState } from "react";
import ListaDesideriForm from "../components/ListaDesideriForm";

export default function Home() {
  const [formLista, setFormLista] = useState(false);

  const handleClickNewList = () => {
    setFormLista(true);
  }

  const listButton = [
    {
      label: "New list",
      onClick: handleClickNewList
    }
  ];

  return ( 
    <>
      <Navbar />
      { !formLista &&
        <>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Dashboard</h1>
          </div>
          <HorizontalList type="own" list={listeDesideriOwn} label="Own" />
          <HorizontalList type="invite" list={listeDesideriInvite} label="Invites" />
          <VerticalList list={lastDesideri} label="Last Desideri" showFrom={true} />
        </div>
        <ActionButton listButton={listButton} />
        </>
      }
      { formLista &&
        <>
          <ListaDesideriForm setFormLista={setFormLista} />
        </>
      }
    </>
  )
}
