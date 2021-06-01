import { Container } from "next/app";
import HorizontalList from "../components/HorizontalList";
import Navbar from "../components/Navbar";
import styles from "../styles/Dashboard.module.scss";
import { listeDesideriOwn, listeDesideriInvite, lastDesideri } from "../Api/fakeApi"
import VerticalList from "../components/VerticalList";
import ActionButton from "../components/ActionButton";

export default function Home() {
  const handleClickNewList = () => {
    console.log("qui creo una nuova lista");
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
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
        </div>
        <HorizontalList type="own" list={listeDesideriOwn} label="Own" />
        <HorizontalList type="invite" list={listeDesideriInvite} label="Invites" />
        <VerticalList list={lastDesideri} label="Last Desideri" />
      </div>
      <ActionButton listButton={listButton} />
    </>
  )
}
