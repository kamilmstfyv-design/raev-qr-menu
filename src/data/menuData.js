import cappucinoImg from '../assets/producimgs/cappucino.png';
import latteImg from '../assets/producimgs/latte.png';
import americanoImg from '../assets/producimgs/americano.png';
import espresso from '../assets/producimgs/espresso.png';
import tkofe from '../assets/producimgs/tkofe.png';
import filtrek from '../assets/producimgs/filtrek.png';
import fincan from '../assets/producimgs/fincan.png';
import astaracay from '../assets/producimgs/astaracay.png';
import yasemencay from '../assets/producimgs/yasemencay.png';
import papatyacayi from '../assets/producimgs/papatyacayi.png';
import merakescayi from '../assets/producimgs/merakescayi.png';
import ballizencefil from '../assets/producimgs/ballizencefil.png';
import portagal from '../assets/producimgs/portagal.png';
import alma from '../assets/producimgs/alma.png';
import nar from '../assets/producimgs/nar.png';
import banan from '../assets/producimgs/banan.png';
import waffle from '../assets/producimgs/waffle.png';
import krep from '../assets/producimgs/krep.png';
import napaleon from '../assets/producimgs/napaleon.jpg';
import balli from '../assets/producimgs/balli.png';
import almapiroq from '../assets/producimgs/almapiroq.png';
import sansebastian from '../assets/producimgs/sansebastian.png';
import brauni from '../assets/producimgs/brauni.png';
import damskikapriz from '../assets/producimgs/damskikapriz.png';
import kruasan from '../assets/producimgs/kruasan.png';
import sadedondurma from '../assets/producimgs/sadedondurma.png';
import meyveli from '../assets/producimgs/meyveli.png';
import cerazli from '../assets/producimgs/cerazli.png';
import cikolatalimilkshake from '../assets/producimgs/cikolatalimilkshake.png';
import bananlimilkshake from '../assets/producimgs/bananlimilkshake.png';
import ciyelaklimilkshake from '../assets/producimgs/ciyelaklimilkshake.png';
import oreolimilkshake from '../assets/producimgs/oreolimilkshake.png';
import mangolulimonad from '../assets/producimgs/mangolulimonad.png';
import bubblegumlimonad from '../assets/producimgs/bubblegumlimonad.png';
import ciyelaklimonad from '../assets/producimgs/ciyelaklimonad.png';
import qarpizlimonad from '../assets/producimgs/qarpizlimonad.png';
import marakuyalimonad from '../assets/producimgs/marakuyalimonad.png';
import lobya from '../assets/producimgs/lobya.png';
import coban from '../assets/producimgs/coban.png';
import paytaxt from '../assets/producimgs/paytaxt.png';
import movsum from '../assets/producimgs/movsum.png';
import vineqrad from '../assets/producimgs/vineqrad.png';
import damskikaprizsalat from '../assets/producimgs/damskikaprizsalat.png';
import mercisorba from '../assets/producimgs/mercisorba.png';
import duysorba from '../assets/producimgs/duysorba.png';
import toyuqluvertezli from '../assets/producimgs/toyuqluvertezli.png';
import dovga from '../assets/producimgs/dovga.png';
import borsh from '../assets/producimgs/borsh.png';
import dustbera from '../assets/producimgs/dustbera.png';
import yarpaqxengeli from '../assets/producimgs/yarpaqxengeli.png';
import gurcuxengeli from '../assets/producimgs/gurcuxengeli.png';
import gurz from '../assets/producimgs/gurz.jpeg';
import qarinvutab from '../assets/producimgs/qarinvutab.avif';
import goyvutab from '../assets/producimgs/goyvutab.jpeg';
import etvutab from '../assets/producimgs/etvutab.jpg';
import toyuqvutab from '../assets/producimgs/toyuqvutab.jpg';
import boranivutab from '../assets/producimgs/boranivutab.jpeg';
import pendirvutab from '../assets/producimgs/pendirvutab.jpg';
import lazgivutab from '../assets/producimgs/lazgivutab.jpeg';

export const menuData = [
  {
    id: "cat1",
    category: "Coffee",
    slug: "coffee",
    page: "caylar-ve-kofeler",
    img: "", // Kateqoriya şəkli
    items: [
      { id: 101, name: "Cappucino", price: 3.0, img: cappucinoImg },
      { id: 102, name: "Latte", price: 3.0, img: latteImg },
      { id: 103, name: "Americano", price: 3.0, img: americanoImg },
      { id: 104, name: "Esspresso", price: 3.0, img: espresso },
      { id: 105, name: "Turkish coffee", price: 3.0, img: tkofe },
      { id: 106, name: "Filter coffee", price: 3.0, img: filtrek }
    ]
  },
  {
    id: "cat2",
    category: "Çay",
    slug: "cay",
    page: "caylar-ve-kofeler",
    img: "",
    items: [
      { id: 201, name: "Fincan çay", price: 1.0, img: fincan },
      { id: 202, name: "Astara çayı", price: 3.0, img: astaracay },
      { id: 203, name: "Yasəmən çayı", price: 3.0, img: yasemencay },
      { id: 204, name: "Papatya çayı", price: 3.0, img: papatyacayi },
      { id: 205, name: "Marakeş çayı", price: 4.0, img: merakescayi },
      { id: 206, name: "Ballı zəncəfil çayı", price: 4.0, img: ballizencefil }
    ]
  },
  {
    id: "cat3",
    category: "Kombo",
    slug: "kombo",
    page: "caylar-ve-kofeler",
    img: "",
    items: [
      { id: 301, name: "1 latte + 1 desert", price: 6.0, img: "" },
      { id: 302, name: "Çay + çərəz + şokolad", price: 8.0, img: "" },
      { id: 303, name: "Çay + 2 ədəd desert", price: 8.0, img: "" },
      { id: 304, name: "2 coffee + 2 desert", price: 10.0, img: "" }
    ]
  },
  {
    id: "cat4",
    category: "Fresh",
    slug: "fresh",
    page: "fresh-ickiler",
    img: "",
    items: [
      { id: 401, name: "Portağal", price: 5.0, img: portagal },
      { id: 402, name: "Alma", price: 5.0, img: alma},
      { id: 403, name: "Nar", price: 5.0, img: nar },
      { id: 404, name: "Banan", price: 5.0, img: banan }
    ]
  },
  {
    id: "cat5",
    category: "Desert",
    slug: "desert",
    page: "desert-dondurmalar",
    img: "",
    items: [
      { id: 501, name: "Waffle (meyvə/şokolad)", price: 3.0, img: waffle },
      { id: 502, name: "Krep (meyvə/şokolad)", price: 3.0, img: krep },
      { id: 503, name: "Napaleon tortu", price: 3.0, img: napaleon },
      { id: 504, name: "Ballı şokoladlı desert", price: 3.0, img: balli },
      { id: 505, name: "Alma piroqu", price: 3.0, img: almapiroq },
      { id: 506, name: "San sebastian", price: 5.0, img: sansebastian },
      { id: 507, name: "Brauni", price: 4.0, img: brauni },
      { id: 508, name: "Damski kapriz desert", price: 3.0, img: damskikapriz }
    ]
  },
  {
    id: "cat6",
    category: "Kruasan",
    slug: "kruasan",
    page: "desert-dondurmalar",
    img: "",
    items: [
      { id: 601, name: "Şokoladlı kruasan", price: 1.5, img: kruasan },
      { id: 602, name: "Çiyələkli kruasan", price: 1.5, img: kruasan },
      { id: 603, name: "Vanilli kruasan", price: 1.5, img: kruasan }
    ]
  },
  {
    id: "cat7",
    category: "Dondurma",
    slug: "dondurma",
    page: "desert-dondurmalar",
    img: "",
    items: [
      { id: 701, name: "Sadə Dondurma (vanil, çiyələk, şokolad)", price: 3.0, img: sadedondurma },
      { id: 702, name: "Meyvəli Dondurma", price: 4.0, img: meyveli },
      { id: 703, name: "Çərəzli Dondurma", price: 4.0, img: cerazli },
    ]
  },
  {
    id: "cat8",
    category: "Milkshake",
    slug: "milkshake",
    page: "milkshake-ve-limonadlar",
    img: "",
    items: [
      { id: 801, name: "Milkshake (şokolad)", price: 5.0, img: cikolatalimilkshake },
      { id: 802, name: "Milkshake (banan)", price: 5.0, img: bananlimilkshake },
      { id: 803, name: "Milkshake (çiyələk)", price: 5.0, img: ciyelaklimilkshake },
      { id: 804, name: "Milkshake (oreo)", price: 5.0, img: oreolimilkshake }
    ]
  },
  {
    id: "cat9",
    category: "Limonad",
    slug: "limonad",
    page: "milkshake-ve-limonadlar",
    img: "",
    items: [
      { id: 901, name: "Mangolu limonad", price: 3.0, img: mangolulimonad },
      { id: 902, name: "Bubble gum limonad", price: 3.0, img: bubblegumlimonad },
      { id: 903, name: "Çiyələkli limonad", price: 3.0, img: ciyelaklimonad },
      { id: 904, name: "Qarpızlı limonad", price: 3.0, img: qarpizlimonad },
      { id: 905, name: "Marakuya limonad", price: 3.0, img: marakuyalimonad }
    ]
  },
  {
    id: "cat10",
    category: "Salatlar",
    slug: "salatlar",
    page: "salatlar-ve-sorbalar",
    img: "",
    items: [
      { id: 1001, name: "Lobya salatı", price: 3.0, img: lobya },
      { id: 1002, name: "Çoban salatı", price: 3.0, img: coban },
      { id: 1003, name: "Paytaxt salatı", price: 4.0, img: paytaxt },
      { id: 1004, name: "Mövsüm dekor salatı", price: 3.0, img: movsum },
      { id: 1005, name: "Vineqrad salatı", price: 3.0, img: vineqrad },
      { id: 1006, name: "Damskiy kapriz salatı", price: 4.0, img: damskikaprizsalat }
    ]
  },
  {
    id: "cat11",
    category: "Şorbalar",
    slug: "sorbalar",
    page: "salatlar-ve-sorbalar",
    img: "",
    items: [
      { id: 1101, name: "Mərci şorbası", price: 3.0, img: mercisorba },
      { id: 1102, name: "Düyü şorbası", price: 3.0, img: duysorba },
      { id: 1103, name: "Toyuqlu tərəvəzli şorba", price: 4.0, img: toyuqluvertezli },
      { id: 1104, name: "Dovğa", price: 3.0, img: dovga },
      { id: 1105, name: "Borş", price: 4.0, img: borsh },
      { id: 1106, name: "Düşbərə", price: 4.0, img: dustbera }
    ]
  },
  {
    id: "cat12",
    category: "Xəmir yeməkləri",
    slug: "xemir-yemekleri",
    page: "milli-dadlar",
    img: "",
    items: [
      { id: 1201, name: "Yarpaq xəngəli", price: 5.0, img: yarpaqxengeli },
      { id: 1202, name: "Gürcü xəngəli", price: 1.0, img: gurcuxengeli },
      { id: 1203, name: "Gürzə (14 ədəd)", price: 4.0, img: gurz },
      { id: 1204, name: "Düşbərə", price: 4.0, img: dustbera }
    ]
  },
  {
    id: "cat13",
    category: "Qutablar",
    slug: "qutablar",
    page: "milli-dadlar",
    img: "",
    items: [
      { id: 1301, name: "Qarın qutabı", price: 1.0, img: qarinvutab },
      { id: 1302, name: "Göy qutabı", price: 1.0, img: goyvutab },
      { id: 1303, name: "Ət qutabı", price: 1.5, img: etvutab },
      { id: 1304, name: "Toyuq qutabı", price: 1.5, img: toyuqvutab },
      { id: 1305, name: "Boranı qutabı", price: 1.5, img: boranivutab },
      { id: 1306, name: "Pendir qutabı", price: 1.5, img: pendirvutab },
      { id: 1307, name: "Ləzgi qutabı", price: 2.0, img: lazgivutab }
    ]
  },
];