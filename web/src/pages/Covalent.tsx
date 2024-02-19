import React from "react";
import { TestStudent } from "../components/TestStudent";
import { Header } from "../components/Header";
import { CovalentNftCard, CovalentTokenCard } from "../components/CovalentCard";

export const MyNFTs = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="py-10 px-10 bg-white font-body-2-body-2">
          <CovalentNftCard />
        </div>
      </div>
    </>
  );
};

export const MyTokens = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="py-10 px-10 bg-white font-body-2-body-2">
          <CovalentTokenCard />
        </div>
      </div>
    </>
  );
};
