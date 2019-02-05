import React from "react";
import Title from "./Title";
import Header from "./Header";
import Item from "./Item";
import Cover from "./Cover";
import Button from "./Button";
import Description from "./Description";
import Subtitle from "./Subtitle";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="title">
          <Title text="2001 : L'Odyssée de l'espace" />
        </div>
        <div className="movie">
          <div className="movieleft">
            <Cover className="resize" />
          </div>
          <div className="movieright">
            <Item flex="flex" label="Date de reprise" text="7 mars 2001" />
            <Item flex="flex" label="Date de sortie" text="27 septembre 1968" />
            <Item
              flex="flex"
              label="Avec"
              text="Keir Dullea, Gary Lockwood, William Sylvester"
            />
            <Item flex="flex" label="Genre" text="Science fiction" />
            <Item
              flex="flex"
              label="Nationalités"
              text="Américain, Britannique"
            />
            <Button theme="black" color="white" text="Bande-Annonce" />
            <Button theme="yellow" text="Séances (2)" />
            <Button theme="grey" text="Ce film en VOD" />
          </div>
        </div>
        <div className="div2">
          <Subtitle text="Synopsis et détails" />
          <Description
            text="A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.
En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du 'Beau Danube Bleu'. A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter.
Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole font route vers Jupiter à bord du Discovery. Les deux hommes vaquent sereinement à leurs tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans doute plus humain que ses maîtres, commence à donner des signes d'inquiétude : à quoi rime cette mission et que risque-t-on de découvrir sur Jupiter ? "
          />
        </div>
      </div>
    );
  }
}

export default App;
