<template>
  <div>
    <div>
      <h2>Explorer</h2>
      <p>A propos</p>
      <p>Nous soutenir</p>
      <p>Mentions légales</p>
    </div>
    <div>
      <h2>Nous contacter</h2>
      <form action="#">
        <label for="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre E-mail"
        />
        <label for="msg"></label>
        <textarea
          name="message"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Votre message"
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div></div>
  </div>
</template>