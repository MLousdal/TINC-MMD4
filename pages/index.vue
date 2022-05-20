<template>
  <div>
    <header>
      <h1>LANDING PAGE</h1>
      <p>
        This is the index page which should be displayed as the first page...
      </p>
    </header>
    <nav class="flex flex-gap-2">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/openprops">Open Props page</NuxtLink>
    </nav>
    <section>
      <SectionHeader title="Nyheder" link="/"></SectionHeader>
    </section>
    <section>
      <SectionHeader
        title="Om TINC"
        link="/om-tinc"
        more="læs mere"
      ></SectionHeader>
      <div class="om-tinc">
        <article>
          <h3>
            Velkommen til TINC – bæredygtig webshop med alt i miljøvenlige
            produkter
          </h3>

          <p>
            Hos TINC er vi Danmarks største bæredygtige webshop, og det er os en
            sand fornøjelse at byde dig indenfor i vores univers af miljøvenlige
            produkter. Vi er en bæredygtig butik med håndplukkede brands og
            produkter, der er nøje udvalgt med omtanke for mennesker og miljø,
            og du kan derfor gå på opdagelse hos os med god samvittighed og
            finde lige det, du står og mangler.
          </p>
        </article>
        <article>
          <h3>Din Zero Waste-butik online</h3>

          <p>
            Økologisk butik. Bæredygtig butik. Zero Waste-butik. TINC lever op
            til det hele og kan imødekomme de behov, du har for miljøvenlige
            produkter i din hverdag. Vores produkter er fremstillet af
            miljøvenlige materialer gennem miljøvenlige processer og pakket i
            miljøvenlig emballage, og der er i det hele taget tænkt i
            bæredygtighed hele vejen rundt. Vi vil være dit foretrukne sted at
            handle miljøvenlige produkter, og vi håber, at du vil nyde dit besøg
            her i vores bæredygtige webshop.
          </p>
        </article>
        <article>
          <h3>Besøg os også i butikkerne i Aalborg og Aarhus</h3>

          <p>
            Du finder os ikke kun online. Kan du slet ikke få nok af
            TINC-universet, og vil du gerne selv kunne mærke varerne i hænderne,
            før du køber, glæder vi os til at møde dig i vores bæredygtige
            butikker i Aalborg og Aarhus, hvor endnu flere miljøvenlige
            produkter venter på dig.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
