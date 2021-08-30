/* eslint-disable no-undef, no-unused-vars */
//IMAGENES
const CARGAR_MAPA =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/hIR1-mapa.png";
const CARGAR_CAPIBARA =
  "https://uploads.codesandbox.io/uploads/user/36ad9f6a-524e-4199-83ac-a60c58ad3238/sobF-Capibara.png";
const CARGAR_JAGUAR =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/oge6-jaguar_prueba_3_742563.png";
const CARGAR_CONDOR =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/wy0O-condor.png";
const CARGAR_GUACAMAYA =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/HmLI-guacamaya.png";
const CARGAR_CAIMAN =
  "https://uploads.codesandbox.io/uploads/user/36ad9f6a-524e-4199-83ac-a60c58ad3238/jErz-caiman.png";
const CARGAR_LEONMARINO =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/ObwR-leon-marino.png";

//AUDIOS
const AUDIO_JAGUAR =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/Deo4-rugido-de-jaguar.mp3";
const AUDIO_LEONM =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/Pzav-leon-marino-sound-effect-hd.mp3";
const AUDIO_CONDOR =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/hyfp-audio-del-condor-andino-hd.mp3";
const AUDIO_CAIMAN =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/RKLx-sonido-de-caiman-alligator-sound.mp3";
const AUDIO_CAPIBARA =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/xR4x-Capibara.1.wav";
const AUDIO_GUACAMAYA =
  "https://uploads.codesandbox.io/uploads/user/dc17ed8c-7d46-468a-95a7-5cce69537694/UvJu-animals095.mp3";

let animalJaguar;
let animalCapibara;
let animalCondor;
let animalGuacamaya;
let animalLeonMarino;
let animalCaiman;
let visible1;
let visible2;
let visible3;
let visible4;
let visible5;
let visible6;

let velocidad;
let volumen;
let soundFile;

function preload() {
  // Se carga la imagen y se asigna a la variable
  MAPA = loadImage(CARGAR_MAPA);
  animalCapibara = loadImage(CARGAR_CAPIBARA);
  animalJaguar = loadImage(CARGAR_JAGUAR);
  animalCondor = loadImage(CARGAR_CONDOR);
  animalGuacamaya = loadImage(CARGAR_GUACAMAYA);
  animalCaiman = loadImage(CARGAR_CAIMAN);
  animalLeonMarino = loadImage(CARGAR_LEONMARINO);

  // Se los formatos de audio válidos dentro de la aplicación
  soundFormats("ogg", "mp3");
  // Carga el audio desde la URL y lo almacena en la variable
  soundFileJaguar = loadSound(AUDIO_JAGUAR);
  soundFileLeonM = loadSound(AUDIO_LEONM);
  soundFileCondor = loadSound(AUDIO_CONDOR);
  soundFileCaiman = loadSound(AUDIO_CAIMAN);
  soundFileCapibara = loadSound(AUDIO_CAPIBARA);
  soundFileGuacamaya = loadSound(AUDIO_GUACAMAYA);
}

function setup() {
  createCanvas(1366, 840);

  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;

  // Inicialmente el audio comienza parado
  soundFileJaguar.pause();
  soundFileLeonM.pause();
  soundFileCondor.pause();

  buttonAmazonas = createButton("Amazonas");
  buttonOrinoquia = createButton("Orinoquia");
  buttonAndina = createButton("Andina");
  buttonCaribe = createButton("Caribe");
  buttonPacifico = createButton("Pacifico");
  buttonInsular = createButton("Insular");

  buttonAmazonas.position(350, 600);
  buttonAmazonas.mousePressed(functionAmazonas);

  buttonOrinoquia.position(390, 490);
  buttonOrinoquia.mousePressed(functionOrinoquia);

  buttonAndina.position(340, 400);
  buttonAndina.mousePressed(functionAndina);

  buttonCaribe.position(275, 295);
  buttonCaribe.mousePressed(functionCaribe);

  buttonPacifico.position(200, 490);
  buttonPacifico.mousePressed(functionPacifico);

  buttonInsular.position(170, 260);
  buttonInsular.mousePressed(functionInsular);
}

function draw() {
  noLoop();
  background(171, 235, 198);
  fill(84, 153, 199);
  noStroke();
  rect(0, 30, 2000, 150);
  fill("white");
  textStyle(BOLD);
  textSize(60);
  text("Regiones naturales de Colombia", 200, 120);
  image(MAPA, 70, 145, 600, 700);
  if (visible1) {
    image(animalCapibara, 700, 300, 400, 400);
  }
  if (visible2) {
    image(animalJaguar, 700, 300, 500, 400);
  }
  if (visible3) {
    image(animalCondor, 700, 300, 400, 400);
  }
  if (visible4) {
    image(animalGuacamaya, 700, 300, 400, 400);
  }
  if (visible5) {
    image(animalCaiman, 700, 300, 600, 300);
  }
  if (visible6) {
    image(animalLeonMarino, 700, 300, 400, 400);
  }
}

function functionAmazonas() {
  if (soundFileCapibara.isPlaying()) {
    soundFileCapibara.pause();
  } else {
    soundFileCapibara.play();
  }
  visible1 = !visible1;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  redraw();
  soundFileJaguar.pause();
  soundFileCondor.pause();
  soundFileCaiman.pause();
  soundFileGuacamaya.pause();
  soundFileLeonM.pause();
}

function functionOrinoquia() {
  if (soundFileGuacamaya.isPlaying()) {
    soundFileGuacamaya.pause();
  } else {
    soundFileGuacamaya.play();
  }
  visible4 = !visible4;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible5 = false;
  visible6 = false;
  redraw();
  soundFileJaguar.pause();
  soundFileCondor.pause();
  soundFileLeonM.pause();
  soundFileCaiman.pause();
  soundFileCapibara.pause();
}

function functionAndina() {
  if (soundFileCondor.isPlaying()) {
    soundFileCondor.pause();
  } else {
    soundFileCondor.play();
  }
  visible3 = !visible3;
  visible1 = false;
  visible2 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  redraw();
  soundFileLeonM.pause();
  soundFileJaguar.pause();
  soundFileCapibara.pause();
  soundFileCaiman.pause();
  soundFileGuacamaya.pause();
}

function functionCaribe() {
  if (soundFileCaiman.isPlaying()) {
    soundFileCaiman.pause();
  } else {
    soundFileCaiman.play();
  }
  visible5 = !visible5;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible6 = false;
  redraw();
  soundFileJaguar.pause();
  soundFileCondor.pause();
  soundFileLeonM.pause();
  soundFileGuacamaya.pause();
  soundFileCapibara.pause();
}

function functionPacifico() {
  if (soundFileJaguar.isPlaying()) {
    soundFileJaguar.pause();
  } else {
    soundFileJaguar.play();
  }
  visible2 = !visible2;
  visible1 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  redraw();
  soundFileLeonM.pause();
  soundFileCondor.pause();
  soundFileCapibara.pause();
  soundFileCaiman.pause();
  soundFileGuacamaya.pause();
}

function functionInsular() {
  if (soundFileLeonM.isPlaying()) {
    soundFileLeonM.pause();
  } else {
    soundFileLeonM.play();
  }
  visible6 = !visible6;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  redraw();
  soundFileJaguar.pause();
  soundFileCondor.pause();
  soundFileCaiman.pause();
  soundFileGuacamaya.pause();
  soundFileCapibara.pause();
}

windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
