function marcaDesmarca(caller) {
  var checks = document.querySelectorAll('input[type="checkbox"]');
  checks.forEach((c) => (c.checked = c == caller));
}

function calcular() {
  var carga;

  var x = document.getElementById("eletron");
  var y = document.getElementById("proton");

  if (x.checked) {
    carga = -1.6 * Math.pow(10, -19);
  } else {
    carga = 1.6 * Math.pow(10, -19);
  }

  let ax = document.querySelector("#ax").value;
  let ay = document.querySelector("#ay").value;
  let az = document.querySelector("#az").value;
  let bx = document.querySelector("#bx").value;
  let by = document.querySelector("#by").value;
  let bz = document.querySelector("#bz").value;

  let pax = document.querySelector("#pax").value;
  let pay = document.querySelector("#pay").value;
  let paz = document.querySelector("#paz").value;
  let pbx = document.querySelector("#pbx").value;
  let pby = document.querySelector("#pby").value;
  let pbz = document.querySelector("#pbz").value;

  if (pax == "1") {
    ax = ax;
  } else if (pax == "0") {
    ax = 1;
  } else {
    ax = ax * Math.pow(10, pax);
  }

  if (pay == "1") {
    ay = ay;
  } else if (pay == "0") {
    ay = 1;
  } else {
    ay = ay * Math.pow(10, pay);
  }

  if (paz == "1") {
    az = az;
  } else if (paz == "0") {
    az = 1;
  } else {
    az = az * Math.pow(10, paz);
  }

  if (pbx == "1") {
    bx = bx;
  } else if (pbx == "0") {
    ax = 1;
  } else {
    bx = bx * Math.pow(10, pbx);
  }

  if (pby == "1") {
    by = by;
  } else if (pby == "0") {
    by = 1;
  } else {
    by = by * Math.pow(10, pby);
}

  if (pbz == "1") {
    bz = bz;
  } else if (pbz == "0") {
    bz = 1;
  } else {
    bz = bz * Math.pow(10, pbz);
}

  

  console.log(by);

  console.log(bx);

  console.log(ax * by);

  let vetorI = (ay * bz - az * by) * carga;
  let vetorJ = (az * bx - ax * bz) * carga;
  let vetorK = (ax * by - ay * bx) * carga;

  // console.log(vetorI);
  // console.log(vetorJ);
  // console.log(vetorK);

  // console.log(ax);
  // console.log(ay);
  // console.log(az);
  // console.log(bx);
  // console.log(by);
  // console.log(bz);

  // console.log(pax);
  // console.log(pay);
  // console.log(paz);
  // console.log(pbx);
  // console.log(pby);
  // console.log(pbz);

  alert(
    "o vetor da força magnetica é (" +
      vetorI +
      ", " +
      vetorJ +
      "," +
      vetorK +
      ")"
  );
}
