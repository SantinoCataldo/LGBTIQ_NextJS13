import Image from 'next/image'
import styles from './page.module.css'
import Timer from '../components/timer'

export default function Info() {
  return (
    <><><title>Informacion General</title>
      <div className={styles.title}>
        <h1 className={styles.h1}>Informacion General</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>Que Significa LGBTIQ+</h3>
          <p>LGBTIQ+ es una sigla universal que representa la diversidad de expresiones de género y orientaciones sexuales que se fue modificando con el tiempo. Son las iniciales de Lesbiana, Gay, Bisexual, Trans, Intersexual, Queer y otras identidades
            Suele finalizar con el símbolo + para incluir a otros colectivos que no son nombrados ni representados por las siglas anteriores. Refieren a minorías dentro del colectivo LGBTIQ+ como las personas no binarias, asexuales, demisexuales o pansexuales.</p>
        </div>
        <Image src='/img1.jpg' width={500} height={350} className={styles.img}></Image>
      </div>
    </><>
        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Significado De Sus Colores</h3>
            <li>El rosa representa la sexualidad</li>
            <li>El rojo representa la vida</li>
            <li>El naranja representa la salud</li>
            <li>El amarillo representa el sol</li>
            <li>El verde representa la naturaleza</li>
            <li>El turquesa representa la magia y el arte</li>
            <li>El azul representa la armonía y la serenidad</li>
            <li>El violeta representa el espíritu</li>
          </div>
          <div className={styles.text}>
            <h3>Significado Siglas LGBTIQ+</h3>
            <li>Lesbiana: Mujeres y sienten atracción por otras mujeres</li>
            <li>Gay: Hombres que sienten atracción por otros hombres</li>
            <li>Bisexual: Sienten atracción por personas del mismo género y del género opuesto</li>
            <li>Trans: Es el vocablo que engloba al conjunto de identidades de las personas que desarrollan una identidad de género distinta al sexo asignado al nacer</li>
            <li>Intersexual: Son aquellas cuyos cuerpos no se encuadran anatómicamente dentro de los patrones sexuales que constituyen el sistema binario varón/mujer</li>
            <li>Queer: no se rige por las imposiciones de género que parten del supuesto de que los seres humanos están limitados a la identidad de varón y mujer</li>
          </div>
        </div>

        <div className={styles.container}>
          <Image src='/img3.jpg' width={500} height={350} className={styles.img}></Image>
          <div className={styles.text}>
            <h3>Identidad de Genero</h3>
            <p>Es el sentido interno y profundamente arraigado de una persona sobre su género. Para las personas transgénero, por ejemplo, su propia identidad de género interna no coincide con el sexo que se les asignó al nacer. La mayoría de las personas tienen una identidad de género de hombre o mujer (o niño o niña). Para algunas personas, su identidad de género no encaja perfectamente en una de esas dos opciones (ver no binario y/o genderqueer más adelante). A diferencia de la expresión de género (ver más abajo), la identidad de género no es visible para otros.</p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Expresion de Genero</h3>
            <p>Manifestaciones externas de género, expresadas a través del nombre, pronombres, ropa, corte de pelo, comportamiento, voz y/o características corporales de una persona. La sociedad identifica estas señales como masculinas y femeninas, aunque lo que se considera masculino o femenino cambia con el tiempo y varía según la cultura.</p>
          </div>
          <Image src='/img4.jpg' width={500} height={350} className={styles.img}></Image>
        </div>

        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Orientacion Sexual</h3>
            <p>Describe la atracción física, romántica y/o emocional duradera de una persona hacia otra persona. La identidad de género y la orientación sexual no son lo mismo. Las personas transgénero pueden ser heterosexuales, lesbianas, gais, bisexuales o queer. Por ejemplo, una persona que hace la transición de hombre a mujer y se siente atraída únicamente por los hombres normalmente se identificaría como una mujer heterosexual.</p>
          </div>
          <div className={styles.text}>
            <h3>Distrofia de Genero</h3>
            <p>Disforia de género es el término para una profunda sensación de incomodidad y aflicción que puede ocurrir cuando su sexo biológico no coincide con su identidad de género. En el pasado, esto se denominaba trastorno de identidad de género. Síntomas de la disforia de género en la niñez: Insisten en que pertenecen al otro sexo. Desean despertarse perteneciendo al otro sexo. Prefieren participar en juegos y actividades estereotípicos del otro sexo. Tienen sentimientos negativos sobre sus genitales.</p>
          </div>
        </div>
        <Timer></Timer>
      </></>
  )
}
