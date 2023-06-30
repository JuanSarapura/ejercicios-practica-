import { useEffect, useState } from "react";

function Chronometer() {
  let [target, setTarget] = useState(null);
  let [elapsed, setElapsed] = useState(0);

  useEffect(
    function () {
      if (target === null) return;
      setElapsed(0);
      let interval = setInterval(
        function () {
          setElapsed((elapsed) => elapsed + 1);
        },

        1000
      );
      return () => {
        clearInterval(interval);
      };
    },
    [target]
  );

  let submitForm = (e) => {
    e.preventDefault();
    let seconds = e.target.seconds.value;
    setTarget(parseInt(seconds));
  };

  if (elapsed >= target && target !== null) {
    return (
      <>
        <p>Termino el conteo!</p>
        <button onClick={() => setTarget(null)}>Reiniciar contador</button>
      </>
    );
  }

  if (target !== null) {
    return (
      <>
        <p>Contador establecido en {target} segundos</p>
        <p>Conteo: {elapsed + 1}</p>
      </>
    );
  }

  return (
    <div>
      <p>Cuantos segundos quieres contar?</p>
      <form action="#" onSubmit={(e) => submitForm(e)}>
        <input type="number" name="seconds" />
        <button>Iniciar</button>
      </form>
    </div>
  );
}

export default Chronometer;
