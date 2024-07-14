"use client";
import { Tldraw } from "@tldraw/tldraw";
import Image from "next/image";
import GenerateButton from "@/components/GenerateButton";
import PreviewModal from "@/components/PreviewModal";
import {useState} from 'react'

export default function Home() {
  const [html, setHtml] = useState("")
  const closeModal = () => setHtml("");

  return (
    <>
      {html && <PreviewModal html={html} closeModal={closeModal}/>}
      <main className="h-screen w-screen">
        <Tldraw persistenceKey="insta_site">
          <GenerateButton  setHtmlContent={setHtml}/>
        </Tldraw>
      </main>
    </>
  );
}
