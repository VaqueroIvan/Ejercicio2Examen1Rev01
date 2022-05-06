//declaration of variables

let notasFinalesComisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let notasFinalesComisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let notasFinalesComisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

let a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j: number = 0;
let promedioNotaA: number = 0;
let promedioNotaB: number = 0;
let promedioNotaC: number = 0;
let aprobadosComisionA: number = 0;
let aprobadosComisionB: number = 0;
let aprobadosComisionC: number = 0;

//Main
function MayorPromedio() {
  for (i = 0; i < 10; i++) {
    promedioNotaA = promedioNotaA + notasFinalesComisionA[i];
    promedioNotaB = promedioNotaB + notasFinalesComisionB[i];
    promedioNotaC = promedioNotaC + notasFinalesComisionC[i];
  }
  if (promedioNotaA > promedioNotaB && promedioNotaA > promedioNotaC) {
    console.log("El mayor promedio es: " + promedioNotaA / 10);
  }
  if (promedioNotaB > promedioNotaA && promedioNotaB > promedioNotaC) {
    console.log("El mayor promedio es: " + promedioNotaB / 10);
  }
  if (promedioNotaC > promedioNotaB && promedioNotaC > promedioNotaA) {
    console.log("El mayor promedio es: " + promedioNotaC / 10);
  }
}

function MenorPromedio() {
  for (i = 0; i < 10; i++) {
    promedioNotaA = promedioNotaA + notasFinalesComisionA[i];
    promedioNotaB = promedioNotaB + notasFinalesComisionB[i];
    promedioNotaC = promedioNotaC + notasFinalesComisionC[i];
  }
  if (promedioNotaA < promedioNotaB && promedioNotaA < promedioNotaC) {
    console.log("El menor promedio es: " + promedioNotaA / 10);
  }
  if (promedioNotaB < promedioNotaA && promedioNotaB < promedioNotaC) {
    console.log("El menor promedio es: " + promedioNotaB / 10);
  }
  if (promedioNotaC < promedioNotaB && promedioNotaC < promedioNotaA) {
    console.log("El menor promedio es: " + promedioNotaC / 10);
  }
}
function CantidadDesaprobados() {
  for (i = 0; i < 10; i++) {
    if (notasFinalesComisionA[i] < 6) {
      aprobadosComisionA++;
    }
    if (notasFinalesComisionB[i] < 6) {
      aprobadosComisionB++;
    }
    if (notasFinalesComisionC[i] < 6) {
      aprobadosComisionC++;
    }
  }
  console.log(
    "En la comisión A desaprobaron: " + aprobadosComisionA + " alumnos"
  );
  console.log(
    "En la comisión A desaprobaron: " + aprobadosComisionB + " alumnos"
  );
  console.log(
    "En la comisión A desaprobaron: " + aprobadosComisionC + " alumnos"
  );
}
function MenorNota() {
  for (i = 0; i < 10; i++) {
    switch (i) {
      case 0:
        a = 1;
        b = 2;
        c = 3;
        d = 4;
        e = 5;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 1:
        a = 0;
        b = 2;
        c = 3;
        d = 4;
        e = 5;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 2:
        a = 0;
        b = 1;
        c = 3;
        d = 4;
        e = 5;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 3:
        a = 0;
        b = 1;
        c = 2;
        d = 4;
        e = 5;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 4:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 5;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 5:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 4;
        f = 6;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 6:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 4;
        f = 5;
        g = 7;
        h = 8;
        j = 9;
        break;
      case 7:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 4;
        f = 5;
        g = 6;
        h = 8;
        j = 9;
        break;
      case 8:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 4;
        f = 5;
        g = 6;
        h = 7;
        j = 9;
        break;
      case 9:
        a = 0;
        b = 1;
        c = 2;
        d = 3;
        e = 4;
        f = 5;
        g = 6;
        h = 7;
        j = 8;
        break;
    }

    if (
      notasFinalesComisionA[i] < notasFinalesComisionA[a] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[b] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[c] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[d] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[e] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[f] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[g] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[h] &&
      notasFinalesComisionA[i] < notasFinalesComisionA[j]
    ) {
      console.log(
        "La nota mas baja de la comision A es: " + notasFinalesComisionA[i]
      );
    }
    if (
      notasFinalesComisionB[i] < notasFinalesComisionB[a] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[b] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[c] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[d] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[e] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[f] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[g] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[h] &&
      notasFinalesComisionB[i] < notasFinalesComisionB[j]
    ) {
      console.log(
        "La nota mas baja de la comision B es: " + notasFinalesComisionB[i]
      );
    }
    if (
      notasFinalesComisionC[i] < notasFinalesComisionC[a] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[b] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[c] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[d] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[e] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[f] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[g] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[h] &&
      notasFinalesComisionC[i] < notasFinalesComisionC[j]
    ) {
      console.log(
        "La nota mas baja de la comision C es: " + notasFinalesComisionC[i]
      );
    }
  }
}
MayorPromedio();
MenorPromedio();
CantidadDesaprobados();
MenorNota();
