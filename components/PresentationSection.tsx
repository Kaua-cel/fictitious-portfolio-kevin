import DefaultButton from "./DefaultButton";

export default function PresentationSection() {
  return (
    <div>
      <section className="bg-[#D9CCBF] h-[42rem] flex gap-12 justify-center">
        <div>
          <div>
            <div className="my-20">
              <h2>Olá eu sou</h2>
              <h1>Kevin Smith</h1>
            </div>
            <DefaultButton />
          </div>
          <div>
            <div>
              <div>
                <h1>100</h1>
                <h3>CLIENTES FELIZES</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <div>
                <h1>12</h1>
                <h3>PRÊMIOS</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img className="w-40" src="/kevin.png" alt="kevin-imagem" />
        </div>
      </section>
    </div>
  );
}
