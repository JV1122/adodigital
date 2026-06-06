import React, { useState } from "react";
import { Home, Search, ShieldCheck, Info, Truck, Menu, ChevronRight, RotateCcw } from "lucide-react";

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
      <header className="bg-gradient-to-r from-[#7b1e3a] via-[#9f2241] to-[#611232] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 shadow-inner backdrop-blur">
              <Truck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">JAULAS</h1>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Transporte y logística</p>
            </div>
          </div>

          <nav className="hidden items-center gap-9 text-[15px] font-semibold md:flex">
            <a className="hover:text-[#c9a96a]" href="#">Trámites</a>
            <a className="hover:text-[#c9a96a]" href="#">Gobierno</a>
            <Search className="h-6 w-6" />
          </nav>

          <button className="md:hidden">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      <section className="border-b border-black/5 bg-white/85 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[15px]">
          <div className="flex items-center gap-3 text-[#30363d]">
            <Home className="h-5 w-5 text-[#9f2241]" />
            <span className="font-semibold">Inicio</span>
            <ChevronRight className="h-4 w-4 text-[#9aa4ad]" />
            <span className="text-[#59636e]">Notaría logística</span>
          </div>
          <span className="hidden text-[#59636e] md:block">Versión: 2.6.1</span>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#f7e9ee] to-transparent" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#c9a96a]/40 bg-[#fbf4e8] px-4 py-1 text-sm font-bold text-[#7a5a19]">
                Validación digital de transporte
              </p>
              <h2 className="text-4xl font-black tracking-tight text-[#20252b] md:text-5xl">
                Validación de documentos digitales
              </h2>
              <div className="mt-5 h-1.5 w-20 rounded-full bg-[#c9a96a]" />
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4c5661]">
                A través de esta opción, usted podrá validar si el documento digital que presentará ante la institución es válido.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c5661]">
                <strong className="text-[#20252b]">Importante:</strong> Para la validación de documentos es necesario capturar el folio de 12 caracteres que aparece en la parte inferior del documento.
              </p>
            </div>

            <div className="relative hidden justify-center lg:flex">
              <div className="relative h-64 w-full max-w-xl">
                <div className="absolute bottom-8 left-8 h-24 w-[330px] rounded-xl border border-[#8d969c] bg-gradient-to-b from-[#f8fafb] to-[#cfd5d8] shadow-2xl">
                  <div className="grid h-full grid-cols-6 gap-2 p-3">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={i} className="rounded-sm bg-[#879099]/55" />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-8 right-10 h-28 w-36 rounded-r-3xl rounded-tl-xl border border-[#879099] bg-gradient-to-b from-white to-[#d8dde0] shadow-2xl">
                  <div className="ml-8 mt-5 h-10 w-20 rounded-lg bg-[#20252b]" />
                  <div className="ml-8 mt-4 h-3 w-16 rounded-full bg-[#9aa4ad]" />
                </div>
                <div className="absolute bottom-4 left-20 h-14 w-14 rounded-full border-[10px] border-[#20252b] bg-[#8f989f]" />
                <div className="absolute bottom-4 left-52 h-14 w-14 rounded-full border-[10px] border-[#20252b] bg-[#8f989f]" />
                <div className="absolute bottom-4 right-16 h-14 w-14 rounded-full border-[10px] border-[#20252b] bg-[#8f989f]" />
                <div className="absolute bottom-0 left-2 h-4 w-[520px] rounded-full bg-black/10 blur-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
          <form onSubmit={buscar}>
            <label className="block text-xl font-black text-[#20252b]">
              Ingrese el folio de su documento a validar
            </label>
            <input
              value={folio}
              onChange={(e) => setFolio(e.target.value.toUpperCase())}
              maxLength={12}
              placeholder="Folio de 12 caracteres"
              className="mt-4 h-14 w-full max-w-xl rounded-xl border border-[#cfd6dc] bg-white px-5 text-lg outline-none transition focus:border-[#9f2241] focus:ring-4 focus:ring-[#9f2241]/15"
            />

            <div className="mt-5 flex h-24 w-full max-w-md items-center gap-4 rounded-xl border border-[#d8dde3] bg-[#fafafa] px-5 shadow-sm">
              <div className="h-9 w-9 rounded-md border-2 border-[#b8c0c7] bg-white" />
              <span className="text-lg text-[#20252b]">No soy un robot</span>
              <div className="ml-auto text-center text-xs text-[#65717c]">
                <ShieldCheck className="mx-auto mb-1 h-7 w-7 text-[#3568d4]" />
                reCAPTCHA
              </div>
            </div>

            {consultado && !folioCorrecto && (
              <div className="mt-5 rounded-xl border border-[#f0b8b8] bg-[#fff1f1] px-5 py-4 text-[#9b1c1c]">
                El folio debe contener exactamente 12 caracteres alfanuméricos.
              </div>
            )}

            <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row">
              <button
                type="button"
                onClick={limpiar}
                className="inline-flex h-14 min-w-44 items-center justify-center gap-2 rounded-xl border border-[#9f2241] bg-white px-7 text-lg font-bold text-[#9f2241] transition hover:bg-[#fdf2f5]"
              >
                <RotateCcw className="h-5 w-5" />
                Limpiar
              </button>
              <button
                type="submit"
                className="inline-flex h-14 min-w-52 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7b1e3a] to-[#9f2241] px-8 text-lg font-black text-white shadow-lg shadow-[#7b1e3a]/20 transition hover:scale-[1.01]"
              >
                <Search className="h-5 w-5" />
                Buscar
              </button>
            </div>
          </form>
        </section>

        {consultado && folioCorrecto && (
          <section className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#edd0d8] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
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

        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#f1eadf] px-6 py-4 text-[#3b3123]">
          <Info className="h-6 w-6 shrink-0 text-[#9f2241]" />
          <p><strong>Aviso:</strong> La información reflejada únicamente fue proporcionada por el solicitante.</p>
        </div>
      </main>

      <footer className="mt-10 bg-gradient-to-r from-[#7b1e3a] via-[#9f2241] to-[#611232] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                <Truck className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black">JAULAS</h2>
                <p className="font-semibold uppercase tracking-[0.2em] text-white/80">Transporte y logística</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-black">Enlaces</h3>
            <p className="mb-2 text-white/80">Participa</p>
            <p className="mb-2 text-white/80">Publicaciones oficiales</p>
            <p className="text-white/80">Marco jurídico</p>
          </div>
          <div>
            <h3 className="mb-4 font-black">¿Tienes dudas?</h3>
            <p className="mb-2 text-white/80">Escríbenos</p>
            <p className="text-white/80">Directorio</p>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/75">
          Sistema demostrativo de administración de jaulas y transporte. Diseño académico actual, sin conexión a sistemas oficiales.
        </div>
      </footer>
    </div>
  );
}
