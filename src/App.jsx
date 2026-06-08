import React, { useState } from "react";
import { Home, Search, ShieldCheck, Info, Truck, Menu, ChevronRight, RotateCcw } from "lucide-react";
import logo from "./assets/gobab.png";
import logo1 from "./assets/gobar.png";

export default function App() {
  const [folio, setFolio] = useState("");
  const [consultado, setConsultado] = useState(false);

  const folioLimpio = folio.trim().toUpperCase();
  const folioCorrecto = /^[A-Z0-9]{12}$/.test(folioLimpio);

  const buscar = (e) => {
    e.preventDefault();
    setConsultado(true);
  };

  const limpiar = () => {
    setFolio("");
    setConsultado(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f6] text-[#1f2933]" style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif" }}>
      <header className="bg-gradient-to-r from-[#611232] via-[#611232] to-[#611232] text-white shadow-lg">  
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
         <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-auto object-contain"
          />
          </div>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold md:flex"  style={{
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: 200,
  }}>
            <a className="hover:text-[#c9a96a]" href="#">Trámites</a>
            <a className="hover:text-[#c9a96a]" href="#">Gobierno</a>
            <Search className="h-6 w-6" />
          </nav>

          <button className="md:hidden">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      

      <main className="mx-auto max-w-7xl bg-white">
        <section className="relative overflow-hidden   bg-white p-5  md:p-10">
          <div className="absolute right-0 top-0 h-full w-1/2 " />
          <div className="relative">
            <div>
              
              <h2
  className="tracking-tight md:text-5xl"
  style={{
    fontFamily: '"Patria", "Noto Sans", Helvetica, Arial, sans-serif', 
    fontSize: "26px",
    fontWeight: 600,
    color: "#4A4A4A",
    textShadow: "1px 0 #0b0d10",
    lineHeight: "1.1",
  }}
>
  Validación de integridad y autoría de documentos firmados con la FIEL*
</h2>

<div className="relative my-6">
  <div className="h-[1px] bg-[#d7d7d7]"></div>
  <div className="absolute left-0 -top-[3px] h-[6px] w-16 bg-[#c9a96a]"></div>
</div>
</div>
</div></section>
<section className="   bg-white p-8 ">

  <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">

    {/* Columna izquierda */}
    <div>
      <p style={{
    
    color: "#4A4A4A",
    textShadow: "1px 0 #0b0d10",
    
  }}>Resumen del documento firmado</p>
      <p className="mt-4 text-lg leading-8 text-[#4c5661]" style={{
    fontFamily: "Open Sans, Arial, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    color: "#4A5568",
    letterSpacing: "0.01em",
  }}>
        <strong className="text-[#20252b]">Folio:</strong>&nbsp;
        8b8b2769-34b8-46f6-8738-7385c8aa700a
      </p>

      <p className="mt-4 text-lg leading-8 text-[#4c5661]">
        <strong className="text-[#20252b]">Numero de Oficio:</strong><p>
        019102950200/CD/0287/2026</p>
      </p>

      <p className="mt-4 text-lg leading-8 text-[#4c5661]">
        <strong className="text-[#20252b]">Nombre, Denominación o razón social:</strong><p>
        CONSTRUCCION PROFESIONAL HALO DIM SA DE CV</p>
      </p>

      <p className="mt-4 text-lg leading-8 text-[#4c5661]">
        <strong className="text-[#20252b]">Fecha del documento:</strong>&nbsp;
        2026-06-05
      </p>
      <p className="mt-4 text-lg leading-8 text-[#4c5661]">
        <strong className="text-[#20252b]">RFC o RP:</strong>&nbsp;
        A0189686106
      </p>
      <p style={{
    fontFamily: "Open Sans, Arial, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    color: "#4A5568",
    letterSpacing: "0.01em",
  }}>
        
       &nbsp;
      </p>
      <p style={{
    fontFamily: "Open Sans, Arial, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    color: "#404752",
    letterSpacing: "0.01em",
  }}>
        
        Datos funcionario firmante
      </p>
      <p className="mt-4 text-lg leading-8 text-[#4c5661]">
        <strong className="text-[#20252b]">Nombre completo:</strong>&nbsp;
        MARIELI ILSENE QUEZADA YAÑEZ
      </p>
    </div>

    {/* Columna derecha */}
    <div>
      <iframe
        src="/descargaPDF.pdf"
        title="Documento PDF"
        className="h-[700px] w-full rounded-xl border border-gray-200"
      />
    </div>

  </div>

</section>

        

        {consultado && folioCorrecto && (
          <section className=" overflow-hidden rounded-[1.5rem] border border-[#edd0d8] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
            <div className="bg-[#f8e9ee] px-6 py-4 text-[#9f2241]">
              <h3 className="text-xl font-black">Resultado de la validación</h3>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-r border-[#e5e8eb] p-5">
                <p className="text-sm font-bold uppercase text-[#65717c]">Estatus</p>
                <p className="mt-1 text-lg font-black text-[#9f2241]">Documento localizado correctamente</p>
              </div>
              <div className="border-b border-[#e5e8eb] p-5">
                <p className="text-sm font-bold uppercase text-[#65717c]">Folio consultado</p>
                <p className="mt-1 font-mono text-lg font-black">{folioLimpio}</p>
              </div>
              <div className="border-r border-[#e5e8eb] p-5">
                <p className="text-sm font-bold uppercase text-[#65717c]">Institución</p>
                <p className="mt-1 text-lg font-semibold">Jaulas Transporte y Logística</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase text-[#65717c]">Observación</p>
                <p className="mt-1 text-lg font-semibold">Consulta demostrativa sin validez oficial.</p>
              </div>
            </div>
          </section>
        )}

       
      </main>

      <footer className=" bg-gradient-to-r from-[#611232] via-[#611232] to-[#611232] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              
              <div>
                    <img
                      src={logo}
                       alt="Logo"
                      className="h-20 object-contain"
                      />
                 </div>
            </div>
          </div>
          <div>
            <h3
  style={{
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
  }}
>
  Enlaces
</h3>
            <p className="mb-2 text-white/80">Datos abiertos de la SABG</p>
            <p className="mb-2 text-white/80">Plataforma Nacional</p>
            <p className="text-white/80">Alerta</p>
          </div>
          <div>
            <h3 style={{
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
  }}  >¿Que es gob.mx?</h3>
            <p className="mb-2 text-white/80">Portal de datos abiertos</p>
            <p className="text-white/80">Terminos y Condiciones</p>
          </div>
        </div>
        
      </footer>
    </div>
  );
}
