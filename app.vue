<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});
const Links = [
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Personlig pleje",
    to: "/Personlig pleje/",
    subMenus: [
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Bad og sæbe",
        to: "/Personlig pleje/Bad og sæbe",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bad tilbehør",
            to: "/Personlig pleje/Bad og sæbe/Bad tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bodyscrub",
            to: "/Personlig pleje/Bad og sæbe/Bodyscrub",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Håndsæbe",
            to: "/Personlig pleje/Bad og sæbe/Håndsæbe",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Sæber og sæbeskåle",
            to: "/Personlig pleje/Bad og sæbe/Sæber og sæbeskåle",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Hygiejne",
        to: "/Personlig pleje/Hygiejne/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Babering",
            to: "/Personlig pleje/Hygiejne/Babering",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Deodorant",
            to: "/Personlig pleje/Hygiejne/Deodorant",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Intimhygiejne",
            to: "/Personlig pleje/Hygiejne/Intimhygiejne",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Lommetørklæder",
            to: "/Personlig pleje/Hygiejne/Lommetørklæder",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Plaster",
            to: "/Personlig pleje/Hygiejne/Plaster",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Hår",
        to: "/Personlig pleje/Hår/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårbørster, Kamme & Sakse",
            to: "/Personlig pleje/Hår/Hårbørster, Kamme & Sakse",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårfarve",
            to: "/Personlig pleje/Hår/Hårfarve",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårserum, Kur & Massage",
            to: "/Personlig pleje/Hår/Hårserum, Kur & Massage",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårpynt",
            to: "/Personlig pleje/Hår/Hårpynt",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Shampoo - Balsam bar",
            to: "/Personlig pleje/Hår/Shampoo - Balsam bar",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Shampoo - Balsam flydende",
            to: "/Personlig pleje/Hår/Shampoo - Balsam flydende",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Styling & Tørshampoo",
            to: "/Personlig pleje/Hår/Styling & Tørshampoo",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Kosmetik",
        to: "/Personlig pleje/Kosmetik/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Ansigt",
            to: "/Personlig pleje/Kosmetik/Ansigt",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Eau de Toilette",
            to: "/Personlig pleje/Kosmetik/Eau de Toilette",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Læber",
            to: "/Personlig pleje/Kosmetik/Læber",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Makeup børster & tilbehør",
            to: "/Personlig pleje/Kosmetik/Makeup børster & tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Neglelak & negletilbehør",
            to: "/Personlig pleje/Kosmetik/Neglelak & negletilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Øjne",
            to: "/Personlig pleje/Kosmetik/Øjne",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Kropspleje",
        to: "/Personlig pleje/Kropspleje/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Ansigtscreme",
            to: "/Personlig pleje/Kropspleje/Ansigtscreme",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bodylotion",
            to: "/Personlig pleje/Kropspleje/Bodylotion",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Fodpleje",
            to: "/Personlig pleje/Kropspleje/Fodpleje",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Håndpleje",
            to: "/Personlig pleje/Kropspleje/Håndpleje",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Læbepomade",
            to: "/Personlig pleje/Kropspleje/Læbepomade",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Massage",
            to: "/Personlig pleje/Kropspleje/Massage",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Rens & tilbehør",
            to: "/Personlig pleje/Kropspleje/Rens & tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Solcreme & aftersun",
            to: "/Personlig pleje/Kropspleje/Solcreme & aftersun",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Mor og barn",
        to: "/Personlig pleje/Mor og barn/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Baby",
            to: "/Personlig pleje/Mor og barn/Baby",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Tandpleje",
        to: "/Personlig pleje/Tandpleje/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Tandpleje",
            to: "/Personlig pleje/Tandpleje/Tandpleje",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Natulige olier & kosmetriske råvare",
        to: "/Personlig pleje/Natulige olier & kosmetriske råvare/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Naturlig duft",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig duft",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Naturlig olie",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig olie",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Kosmetiske råvarer",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Kosmetiske råvarer",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Rondeller og vatpinde",
        to: "/Personlig pleje/Rondeller og vatpinde/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Vatpinde og ørerensere",
            to: "/Personlig pleje/Rondeller og vatpinde/Vatpinde og ørerensere",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Tilbehør",
        to: "/Personlig pleje/Tilbehør/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Toilettasker",
            to: "/Personlig pleje/Tilbehør/Toilettasker",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Varmepude",
            to: "/Personlig pleje/Tilbehør/Varmepude",
          },
        ],
      },
    ],
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Husholdning",
    to: "/Husholdning/",
    subMenus: [
      {
        img: "/images/ella-olsson.jpg",
        title: "Boligtilbehør",
        to: "/Husholdning/Boligtilbehør/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Duft, røgelse & lys",
            to: "/Husholdning/Boligtilbehør/Duft, røgelse & lys",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Glasflasker & beholder",
            to: "/Husholdning/Boligtilbehør/Glasflasker & beholder",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Indpakning, poser & pynt",
            to: "/Husholdning/Boligtilbehør/Indpakning, poser & pynt",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Køkkenartikler",
        to: "/Husholdning/Køkkenartikler/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Køkkentilbehør",
            to: "/Husholdning/Køkkenartikler/Køkkentilbehør",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Sugerør",
            to: "/Husholdning/Køkkenartikler/Sugerør",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Madopbevaring",
        to: "/Husholdning/Madopbevaring/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Drikkeflasker",
            to: "/Husholdning/Madopbevaring/Drikkeflasker",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Madkasser",
            to: "/Husholdning/Madopbevaring/Madkasser",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Rengøring(sartikler)",
        to: "/Husholdning/Rengøring(sartikler)/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Børste & svampe",
            to: "/Husholdning/Rengøring(sartikler)/Børste & svampe",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Koste & fejebakker",
            to: "/Husholdning/Rengøring(sartikler)/Koste & fejebakker",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Opvask",
            to: "/Husholdning/Rengøring(sartikler)/Opvask",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Rengøringsmidler",
            to: "/Husholdning/Rengøring(sartikler)/Rengøringsmidler",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Tøjvask",
            to: "/Husholdning/Rengøring(sartikler)/Tøjvask",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Tekstiler",
        to: "/Husholdning/Tekstiler/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Håndklæder",
            to: "/Husholdning/Tekstiler/Håndklæder",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Klude",
            to: "/Husholdning/Tekstiler/Klude",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Viskestykker",
            to: "/Husholdning/Tekstiler/Viskestykker",
          },
        ],
      },
    ],
  },
  {
    title: "Fødevare",
    to: "/Fødevare/",
    img: "/images/anh-nguyen.jpg",
    subMenus: [
      {
        img: "/images/anh-nguyen.jpg",
        title: "Mad - kolonial",
        to: "/Fødevare/Mad - kolonial/",
        subSubMenus: [
          {
            img: "/images/anh-nguyen.jpg",
            title: "Kolonial",
            to: "/Fødevare/Mad - kolonial/Kolonial",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Konfekture",
            to: "/Fødevare/Mad - kolonial/Konfekture",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Krydderier, Urter, Blomster & Pulver",
            to: "/Fødevare/Mad - kolonial/Krydderier, Urter, Blomster & Pulver",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Slik",
            to: "/Fødevare/Mad - kolonial/Slik",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Tyggeegummi",
            to: "/Fødevare/Mad - kolonial/Tyggeegummi",
          },
        ],
      },
      {
        img: "/images/anh-nguyen.jpg",
        title: "Drikkevare",
        to: "/Fødevare/Drikkevare/",
        subSubMenus: [
          {
            img: "/images/anh-nguyen.jpg",
            title: "Drikkevarer",
            to: "/Fødevare/Drikkevare/Drikkevarer",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Kaffe & te",
            to: "/Fødevare/Drikkevare/Kaffe & te",
          },
        ],
      },
    ],
  },
];
const collectionIDs = {
  Tandpleje: "401022910699",
  "Personlig pleje": "400981688555",
  Drikkevare: "401021927659",
  "Bad og sæbe": "400997122283",
  Fødevare: "400981819627",
  Tøjvask: "401022812395",
  Rengøring: "401022812395",
  Klude: "401022779627",
  Tekstiler: "401022517483",
  "Shampoo - Balsam": "401021796587",
  "Mad - kolonial": "401022288107",
  Kolonial: "401021894891",
  "Glasflasker og beholdere": "401021960427",
  Boligtilbehør: "401021862123",
  Kosmetik: "400996991211",
  Gavekort: "400984309995",
  Husholdning: "400981655787",
  Hår: "401021763819",
  "Kaffe Te og Kakao": "401022025963",
};
</script>

<template>
  <div>
    <Navbar :links="Links"></Navbar>
    <NuxtPage
      class="wrapper app"
      :links="Links"
      :collectionIDs="collectionIDs"
    ></NuxtPage>
    <Footer></Footer>
  </div>
</template>
